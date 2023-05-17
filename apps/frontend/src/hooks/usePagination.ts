import { TableProps } from 'antd';
import { useCallback } from 'react';
import { arrayFrom } from '@oapis/common';

type Options = {
  take: number;
  skip: number;
  total: number;
};

export const usePagination = (
  data: Options | null,
  setRequest: (cb: (newOptions: Options) => Options) => void,
) => {
  const pagination = data && {
    pageSize: data.take,
    total: data.total,
    current: data.skip > data.total ? -1 : Math.floor(data.skip / data.take) + 1,
    hideOnSinglePage: true,
  };

  const onChange = useCallback<TableProps<any>['onChange']>((
    newPagination,
    newFilters,
    newSorter,
  ) => {
    const sorter = arrayFrom(newSorter)[0];
    setRequest((oldRequest) => ({
      ...oldRequest,
      skip: (newPagination.current - 1) * newPagination.pageSize,
      take: newPagination.pageSize,
      orderBy: sorter.column ? [
        {
          [sorter.field as string]: { ascend: 'asc', descend: 'desc' }[sorter.order],
        },
      ] : [],
    }));
  }, [setRequest]);

  return {
    onChange,
    pagination,
  };
};
