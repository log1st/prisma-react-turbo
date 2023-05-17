import { contracts } from '@oapis/contracts';
import { useCallback, useMemo } from 'react';
import { WarningTwoTone } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import { Descriptions } from 'antd';
import { useAuthMe, useRolesDelete, useRoles } from '@/api';
import { useConfirm, useDateFormat, usePermissionName } from '@/hooks';
import { ModalType, useModals } from '@/providers';
import { ExpandSymbol, FilterFieldType, Listing } from '@/containers';

const getRoleDataRender = (
  permissionName: (permission: contracts.Permission) => string,
  permissionNamespaceName: (permission: contracts.PermissionNamespace) => string,
) => function RoleDataRender({ permissionsOnRoles }: contracts.Role) {
  const permissions = permissionsOnRoles.map((p) => p.permission);

  const groups = Object.entries(
    permissions.reduce((a, p) => ({
      ...a,
      [p.namespace]: [...a[p.namespace] || [], p],
    }), {} as Record<string, string[]>),
  );

  return (
    <Descriptions column={1} size="small">
      {groups.map(([namespace, ps]) => (
        <Descriptions.Item
          label={permissionNamespaceName(namespace as contracts.PermissionNamespace)}
          key={namespace}
        >
          {ps.map((p) => permissionName(p)).join(', ')}
        </Descriptions.Item>
      ))}
    </Descriptions>
  );
};

export function AdminRolesPage() {
  const formatDate = useDateFormat();

  const { hash } = useLocation();
  const id = hash?.substring(1);

  const filters = useMemo<contracts.FindManyRoleArgs['where']>(() => ({
    ...id ? {
      id: {
        contains: id,
      },
    } : {},
  }), [id]);

  const {
    showModal,
  } = useModals();

  const {
    deleteRoles,
  } = useRolesDelete();

  const {
    showConfirm,
  } = useConfirm();

  const showUpdateRoleModal = useCallback((role: contracts.Role) => {
    showModal({
      type: ModalType.updateRole,
      params: {
        roleId: role.id,
      },
    });
  }, [showModal]);

  const showCreateRoleModal = useCallback(() => {
    showModal({
      type: ModalType.createRole,
    });
  }, [showModal]);

  const showDeleteRolesConfirm = useCallback((roles: Array<contracts.Role>) => {
    showConfirm({
      namespace: 'admin',
      keyPrefix: `role.action.delete.${roles.length > 1 ? 'many' : 'one'}`,
      title: true,
      message: true,
      params: roles.length > 1 ? { count: roles.length } : roles[0],
      danger: true,
      icon: WarningTwoTone,
      onConfirm() {
        deleteRoles(roles.map((role) => role.id));
      },
    });
  }, [showConfirm]);

  const showDeleteRoleConfirm = useCallback((role: contracts.Role) => {
    showDeleteRolesConfirm([role]);
  }, [showDeleteRolesConfirm]);

  const { data: me } = useAuthMe();

  const { permissionName, permissionNamespaceName } = usePermissionName();

  return (
    <Listing<contracts.Role>
      namespace="admin"
      keyPrefix="role"
      initialOrderBy={[{
        createdAt: 'asc',
      }]}
      expandedRowRender={getRoleDataRender(permissionName, permissionNamespaceName)}
      rowKey="id"
      query={useRoles}
      populateRecord={(role) => ({
        ...role,
        [ExpandSymbol]: role.permissionsOnRoles.length > 0 ? (role.id === id) : null,
      })}
      initialFilters={filters}
      filter={{
        fields: [
          {
            key: 'id',
            span: 7,
            dataIndex: ['id', 'contains'],
          },
          {
            key: 'slug',
            span: 5,
            dataIndex: ['slug', 'contains'],
          },
          {
            key: 'createdAt.gte',
            span: 6,
            dataIndex: ['createdAt', 'gte'],
            type: FilterFieldType.date,
          },
          {
            key: 'createdAt.lte',
            span: 6,
            dataIndex: ['createdAt', 'lte'],
            type: FilterFieldType.date,
          },
        ],
      }}
      columns={[
        {
          key: 'slug',
          sorter: true,
        },
        {
          key: 'createdAt',
          sorter: true,
          render: (value: string) => formatDate(value),
        },
        {
          key: 'permissionsOnRoles',
          dataIndex: ['_count', 'permissionsOnRoles'],
        },
      ]}
      actions={[
        {
          key: 'create',
          onClick: showCreateRoleModal,
        },
      ]}
      multipleActions={[
        {
          key: 'delete',
          onClick: showDeleteRolesConfirm,
          danger: true,
        },
      ]}
      recordActions={[
        {
          key: 'update',
          onClick: showUpdateRoleModal,
        },
        {
          key: 'delete',
          onClick: showDeleteRoleConfirm,
          danger: true,
          check: (record) => record.id !== me?.roleId,
        },
      ]}
    />
  );
}
