import { contracts } from '@oapis/contracts';
import { useCallback } from 'react';
import { WarningTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import {
  useAuthMe, useRoles, useUsersDelete, useUsers,
} from '@/api';
import { useConfirm, useDateFormat } from '@/hooks';
import { ModalType, useModals } from '@/providers';
import { FilterFieldType, Listing } from '@/containers';
import { getAdminRoleRoute } from '@/router';

export function AdminUsersPage() {
  const formatDate = useDateFormat();

  const {
    showModal,
  } = useModals();

  const {
    deleteUsers,
  } = useUsersDelete();

  const {
    showConfirm,
  } = useConfirm();

  const showUpdateUserModal = useCallback((user: contracts.User) => {
    showModal({
      type: ModalType.updateUser,
      params: {
        userId: user.id,
      },
    });
  }, [showModal]);

  const showCreateUserModal = useCallback(() => {
    showModal({
      type: ModalType.createUser,
    });
  }, [showModal]);

  const showDeleteUsersConfirm = useCallback((users: Array<contracts.User>) => {
    showConfirm({
      namespace: 'admin',
      keyPrefix: `user.action.delete.${users.length > 1 ? 'many' : 'one'}`,
      title: true,
      message: true,
      params: users.length > 1 ? { count: users.length } : users[0],
      danger: true,
      icon: WarningTwoTone,
      onConfirm() {
        deleteUsers(users.map((user) => user.id));
      },
    });
  }, []);

  const showDeleteUserConfirm = useCallback((user: contracts.User) => {
    showDeleteUsersConfirm([user]);
  }, [showDeleteUsersConfirm]);

  const { data: me } = useAuthMe();

  return (
    <Listing<contracts.User>
      namespace="admin"
      keyPrefix="user"
      initialOrderBy={[{
        createdAt: 'asc',
      }]}
      rowKey="id"
      query={useUsers}
      columns={[
        {
          key: 'login',
          sorter: true,
        },
        {
          key: 'createdAt',
          sorter: true,
          render: (value: string) => formatDate(value),
        },
        {
          key: 'role',
          dataIndex: ['role', 'slug'],
          render: (value: string, record) => (
            record.role && (
            <Link to={getAdminRoleRoute(record.role)}>
              {value}
            </Link>
            )
          ),
        },
      ]}
      filter={{
        fields: [
          {
            key: 'id',
            span: 5,
            dataIndex: ['id', 'contains'],
          },
          {
            key: 'login',
            span: 3,
            dataIndex: ['login', 'contains'],
          },
          {
            key: 'roleId',
            span: 6,
            dataIndex: ['roleId', 'in'],
            type: FilterFieldType.select,
            config: {
              valueField: 'id',
              labelField: 'slug',
              useQuery: useRoles,
            },
          },
          {
            key: 'createdAt.gte',
            span: 5,
            dataIndex: ['createdAt', 'gte'],
            type: FilterFieldType.date,
          },
          {
            key: 'createdAt.lte',
            span: 5,
            dataIndex: ['createdAt', 'lte'],
            type: FilterFieldType.date,
          },
        ],
      }}
      actions={[
        {
          key: 'create',
          onClick: showCreateUserModal,
        },
      ]}
      multipleActions={[
        {
          key: 'delete',
          onClick: showDeleteUsersConfirm,
          danger: true,
        },
      ]}
      recordActions={[
        {
          key: 'update',
          onClick: showUpdateUserModal,
        },
        {
          key: 'delete',
          onClick: showDeleteUserConfirm,
          danger: true,
          check: (record) => record.id !== me?.id,
        },
      ]}
    />
  );
}
