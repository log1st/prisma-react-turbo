import { contracts } from '@oapis/contracts';

export default {
  meta: {
    title: 'APIs',
    language: 'English',
  },
  formatters: {
    date: {
      full: '{value, date, ::yyy MM dd HH mm ss}',
    },
  },
  admin: {
    title: 'Admin',
    dashboard: {
      title: 'Dashboard',
    },
    config: {
      title: 'Config',
      form: {
        loading: 'Loading...',
        submit: 'Save',
        field: {
          initialRoleId: {
            label: 'Initial role ID',
          },
        },
      },
    },
    role: {
      title: 'Roles',
      error: {
        data: {
          forbidden: 'Forbidden',
        },
        title: 'Unable to load roles',
      },
      column: {
        slug: 'Slug',
        createdAt: 'Created at',
        permissionsOnRoles: 'Permissions count',
        __actions: 'Actions',
      },
      form: {
        loading: 'Loading...',
        submit: 'Save',
        field: {
          slug: {
            label: 'Slug',
            validation: {
              empty: 'Slug is required',
              unique: 'Slug has been already taken',
              minLength: 'Slug must contain at least {0, plural, one{one symbol} other {# symbols}}',
              maxLength: 'Slug must contain at most {0, plural, one{one symbol} other {# symbols}}',
            },
          },
          permissions: {
            label: 'Permissions',
            validation: {
              exists: 'Some of permissions don\'t exist',
            },
          },
        },
        error: {
          forbidden: {
            title: 'You don\'t have access to edit roles',
          },
        },
      },
      filter: {
        title: 'Filter',
        field: {
          id: {
            label: 'ID',
          },
          slug: {
            label: 'Slug',
          },
          'createdAt.gte': {
            label: 'Min created at',
          },
          'createdAt.lte': {
            label: 'Max created at',
          },
        },
        reset: 'Reset',
        submit: 'Apply filters',
      },
      action: {
        '__toggle-filters': {
          action: 'Toggle filters',
        },
        create: {
          action: 'Create',
          title: 'Create role',
        },
        update: {
          action: 'Update',
          loading: 'Loading...',
          title: 'Update <code>{slug}</code>\'s role',
        },
        delete: {
          action: 'Delete',
          one: {
            title: 'Are you sure want to delete <code>{slug}</code> role?',
            message: 'All related users will lost all access until new role assigned',
            cancel: 'Cancel',
            confirm: 'Delete',
          },
          many: {
            title: 'Are you sure want to delete <code>{count, plural, other{# roles}}</code>?',
            message: 'All related users will lost all access until new role assigned',
            cancel: 'Cancel',
            confirm: 'Delete',
          },
        },
      },
    },
    user: {
      title: 'Users',
      error: {
        data: {
          forbidden: 'Forbidden',
        },
        title: 'Unable to load users',
      },
      column: {
        login: 'Login',
        createdAt: 'Registration date',
        role: 'Role',
        __actions: 'Actions',
      },
      form: {
        loading: 'Loading...',
        submit: 'Save',
        field: {
          login: {
            label: 'Login',
            validation: {
              empty: 'Login is required',
              minLength: 'Login must contain at least {0, plural, one{one symbol} other {# symbols}}',
              maxLength: 'Login must contain at most {0, plural, one{one symbol} other {# symbols}}',
              matches: 'Login should contain only letters, numbers and "_" symbol',
              unique: 'Login has been already taken',
            },
          },
          password: {
            label: 'Password',
            validation: {
              empty: 'Password is required',
              minLength: 'Password must contain at least {0, plural, one{one symbol} other {# symbols}}',
              maxLength: 'Password must contain at most {0, plural, one{one symbol} other {# symbols}}',
            },
          },
          roleId: {
            label: 'Role',
            validation: {
              exists: 'Role doesn\'t exist',
            },
          },
        },
        error: {
          forbidden: {
            title: 'You don\'t have access to edit users',
          },
        },
      },
      filter: {
        title: 'Filter',
        field: {
          id: {
            label: 'ID',
          },
          login: {
            label: 'Login',
          },
          roleId: {
            label: 'Role',
          },
          'createdAt.gte': {
            label: 'Min registration date',
          },
          'createdAt.lte': {
            label: 'Max registration date',
          },
        },
        reset: 'Reset',
        submit: 'Apply filters',
      },
      action: {
        '__toggle-filters': {
          action: 'Toggle filters',
        },
        create: {
          action: 'Create',
          title: 'Create user',
        },
        update: {
          action: 'Update',
          loading: 'Loading...',
          title: 'Update user <code>{login}</code>',
        },
        delete: {
          action: 'Delete',
          one: {
            title: 'Are you sure want to delete user <code>{login}</code>?',
            cancel: 'Cancel',
            confirm: 'Delete',
          },
          many: {
            title: 'Are you sure want to delete <code>{count, plural, other{# users}}</code>?',
            cancel: 'Cancel',
            confirm: 'Delete',
          },
        },
      },
    },
    endpoint: {
      title: 'Endpoints',
    },
    transaction: {
      title: 'Transactions',
    },
    wallet: {
      title: 'Wallets',
    },
  },
  auth: {
    signOut: {
      action: 'Sign out',
      signedInAs: 'Signed in as {login}',
    },
    signIn: {
      title: 'Authorization',
      signUp: 'Sign up',
      field: {
        login: {
          label: 'Login',
          validation: {
            empty: 'Login is required',
            notFound: 'User not found',
          },
        },
        password: {
          label: 'Password',
          validation: {
            empty: 'Password is required',
          },
        },
      },
      submit: 'Sign in',
    },
    signUp: {
      title: 'Registration',
      signIn: 'Sign in',
      field: {
        login: {
          label: 'Login',
          validation: {
            empty: 'Login is required',
            minLength: 'Login must contain at least {0, plural, one{one symbol} other {# symbols}}',
            maxLength: 'Login must contain at most {0, plural, one{one symbol} other {# symbols}}',
            matches: 'Login should contain only letters, numbers and "_" symbol',
            unique: 'Login has been already taken',
          },
        },
        password: {
          label: 'Password',
          validation: {
            empty: 'Password is required',
            minLength: 'Password must contain at least {0, plural, one{one symbol} other {# symbols}}',
            maxLength: 'Password must contain at most {0, plural, one{one symbol} other {# symbols}}',
          },
        },
        passwordConfirmation: {
          label: 'Password confirmation',
          validation: {
            empty: 'Password confirmation is required',
            match: 'Passwords must match',
          },
        },
      },
      submit: 'Sign up',
    },
  },
  permission: {
    [contracts.PermissionNamespace.admin]: {
      title: 'Admin',
      permission: {
        [contracts.adminPermission.slug]: 'Panel',
        [contracts.dashboardAdminPermission.slug]: 'Dashboard',
        [contracts.rolesAdminPermission.slug]: 'Roles',
        [contracts.endpointsAdminPermission.slug]: 'Endpoints',
        [contracts.usersAdminPermission.slug]: 'Users',
        [contracts.transactionsAdminPermission.slug]: 'Transactions',
        [contracts.walletsAdminPermission.slug]: 'Wallets',
      },
    },
    [contracts.PermissionNamespace.auth]: {
      title: 'Authorization',
      permission: {
        [contracts.authSignInPermission.slug]: 'Sign in',
      },
    },
  },
  error: {
    404: {
      title: 'Not found',
      action: 'Go back',
    },
  },
};
