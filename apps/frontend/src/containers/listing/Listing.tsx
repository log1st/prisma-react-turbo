import { useTranslation } from 'react-i18next';
import {
  ReactNode,
  useCallback, useEffect, useMemo, useState, Key,
} from 'react';
import {
  Button, ButtonProps, Space, Table, TableColumnType,
} from 'antd';
import { filteredArray } from '@oapis/common';
import { Path, useNavigate } from 'react-router-dom';
import {
  CaretDownFilled, CaretUpFilled,
} from '@ant-design/icons';
import { TableRowSelection } from 'antd/es/table/interface';
import { useToasts } from '@/providers';
import { usePagination, useStorageState } from '@/hooks';
import { UiListingContainer } from '@/ui';
import { Filter, FilterProps } from '@/containers';
import {
  ListingQuery, ListingResponse, OrderBy, Request,
} from '@/types/listing';

export type TableAction<Entity> = Pick<ButtonProps, 'size' | 'type' | 'danger'> & {
  key: string;
  onClick?(record: Entity): void;
  to?: Partial<Path> | ((entity: Entity) => Partial<Path>);
  check?(record: Entity): boolean;
  icon?: ReactNode;
};

type Props<Entity> = {
  namespace?: string;
  keyPrefix?: string;
  initialOrderBy?: Array<OrderBy<Entity>>
  initialTake?: number;
  initialSkip?: number;
  query: ListingQuery<Entity>;
  populateRecord?(record: Entity): Entity;
  rowKey: keyof Entity & string;
  columns?: Array<TableColumnType<Entity> | boolean>;
  actions?: Array<TableAction<void> | boolean>;
  multipleActions?: Array<TableAction<Array<Entity>> | boolean>;
  recordActions?: Array<TableAction<Entity> | boolean>;
  initialFilters?: any;
  filter?: FilterProps<Entity>;
  expandedRowRender?(record: Entity): ReactNode;
};

export const ExpandSymbol = Symbol('expand');

export function Listing<Entity extends object>({
  query: useQuery,
  namespace,
  keyPrefix,
  initialOrderBy,
  initialTake = 10,
  initialSkip = 0,
  columns = [],
  rowKey,
  recordActions = [],
  actions = [],
  multipleActions = [],
  populateRecord,
  initialFilters: where,
  filter,
  expandedRowRender,
}: Props<Entity>) {
  const [
    filtersVisible,, toggleFilters,
  ] = useStorageState<boolean>(`${namespace}-${keyPrefix}-filters-visible`, true);

  const { t } = useTranslation(namespace, {
    keyPrefix,
  });

  const [
    request,
    setRequest,
  ] = useState<Request<Entity>>({
    take: initialTake,
    skip: initialSkip,
    orderBy: initialOrderBy || [],
    where,
  });

  const updateWhere = useCallback((newRequest: Partial<Request<Entity>>) => {
    setRequest((oldRequest) => ({
      ...oldRequest,
      where: newRequest,
    }));
  }, [setRequest]);

  useEffect(() => {
    setRequest((oldRequest) => ({
      ...oldRequest,
      where,
    }));
  }, [where, setRequest]);

  const {
    isFetching,
    data,
    error,
  } = useQuery(request) as ListingResponse<Entity, true>;

  const {
    showToast,
  } = useToasts();

  useEffect(() => {
    if (!error) {
      return () => {};
    }
    return showToast({
      namespace,
      keyPrefix: `${keyPrefix}.error`,
      params: error,
      type: 'error',
    });
  }, [error, namespace, keyPrefix]);

  const { pagination, onChange } = usePagination(data, setRequest);

  const navigate = useNavigate();

  const handleAction = useCallback(<E extends any>(
    action: Pick<TableAction<E>, 'onClick' | 'to'>,
    record?: E,
  ) => () => {
      action.onClick?.(record);
      if (action.to) {
        navigate(action.to instanceof Function ? (
          action.to(record)
        ) : action.to);
      }
    }, [navigate]);

  const computedColumns = useMemo<Array<TableColumnType<Entity>>>(() => ([
    ...filteredArray(columns).map((column) => ({
      title: t(`column.${column.key}`),
      dataIndex: column.key,
      showSorterTooltip: false,
      ...column,
    })),
    ...filteredArray(recordActions).length ? ([
      {
        key: '__actions',
        title: t('column.__actions'),
        fixed: 'right' as any,
        render: (value, record) => (
          <Space>
            {filteredArray(recordActions).filter((action) => (
              !action.check || action.check(record)
            )).map(({
              to,
              onClick,
              key,
              size = 'small',
              type = 'primary',
              danger,
              icon,
            }) => (
              <Button
                key={key}
                size={size}
                danger={danger}
                type={type}
                icon={icon}
                onClick={handleAction({ onClick, to }, record)}
              >
                {t(`action.${key}.action`)}
              </Button>
            ))}
          </Space>
        ),
      },
    ]) : [],
  ]), [columns, recordActions, navigate]);

  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);
  const [selectedRows, setSelectedRows] = useState<Array<Entity>>([]);
  const selectRows = useCallback<TableRowSelection<Entity>['onChange']>((keys, rows) => {
    setSelectedRowKeys(keys);
    setSelectedRows(rows);
  }, [setSelectedRowKeys, setSelectedRows]);

  const records = useMemo(() => (
    filteredArray(populateRecord ? data?.records.map(populateRecord) : data?.records)
  ), [data?.records, populateRecord]);

  const [expandedRowKeys, setExpandedRowKeys] = useState<readonly Key[]>([]);

  useEffect(() => {
    setExpandedRowKeys(
      records.filter((i) => (i as any)[ExpandSymbol]).map((record) => record[rowKey] as Key),
    );
  }, [records, setExpandedRowKeys]);

  const selectable = !!filteredArray(multipleActions).length;

  return (
    <UiListingContainer
      title={t('title')}
      actions={filteredArray([
        filter && ({
          key: '__toggle-filters',
          type: 'link',
          label: t('toggleFilters'),
          onClick: toggleFilters,
          icon: filtersVisible ? (
            <CaretUpFilled />
          ) : (
            <CaretDownFilled />
          ),
        }),
        ...actions,
      ] as Array<TableAction<void>>)?.filter((action) => (
        !action.check || action.check()
      )).map(({
        type = 'primary',
        key,
        onClick,
        to,
        danger,
        size,
        icon,
      }) => (
        <Button
          type={type}
          key={key}
          danger={danger}
          size={size}
          icon={icon}
          onClick={handleAction({ onClick, to })}
        >
          {t(`action.${key}.action`)}
        </Button>
      ))}
      filters={filter && filtersVisible && (
        <Filter
          {...filter}
          value={request.where}
          onChange={updateWhere}
          namespace={namespace}
          keyPrefix={`${keyPrefix}.filter`}
        />
      )}
    >
      <Table<Entity>
        loading={isFetching}
        columns={computedColumns}
        rowKey={rowKey}
        dataSource={records}
        pagination={pagination}
        onChange={onChange}
        scroll={{ x: true }}
        rowSelection={selectable && {
          selectedRowKeys,
          onChange: selectRows,
        }}
        expandable={expandedRowRender && {
          rowExpandable: (record) => record[ExpandSymbol] !== null,
          expandedRowRender,
          expandedRowKeys,
          onExpandedRowsChange: setExpandedRowKeys,
        }}
        footer={(
          !!selectedRowKeys.length && !!multipleActions?.length
        ) && (() => filteredArray(multipleActions).map(({
          type = 'primary',
          key,
          onClick,
          to,
          danger,
          size,
          icon,
        }) => (
          <Button
            type={type}
            key={key}
            danger={danger}
            size={size}
            icon={icon}
            onClick={handleAction({ onClick, to }, selectedRows)}
          >
            {t(`action.${key}.action`)}
          </Button>
        )))}
      />
    </UiListingContainer>
  );
}
