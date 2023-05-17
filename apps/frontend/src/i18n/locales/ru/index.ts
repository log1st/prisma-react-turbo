export default {
  meta: {
    title: 'APIs',
    language: 'Русский',
  },
  formatters: {
    date: {
      full: '{value, date} {value, time}',
    },
  },
  admin: {
    title: 'Админ-панель',
    dashboard: {
      title: 'Сводка',
    },
    roles: {
      title: 'Роли',
      column: {
        slug: 'Ключ',
        createdAt: 'Дата создания',
        permissions: 'Количество прав доступа',
      },
    },
    users: {
      title: 'Пользователи',
    },
    endpoints: {
      title: 'Эндпоинты',
    },
    transactions: {
      title: 'Транзакции',
    },
    wallets: {
      title: 'Кошельки',
    },
  },
  auth: {
    signOut: {
      action: 'Выйти',
      signedInAs: 'Привет, {login}',
    },
    signIn: {
      title: 'Авторизация',
      signUp: 'Зарегистрироваться',
      field: {
        login: {
          label: 'Логин',
          validation: {
            required: 'Логин обязателен',
            notFound: 'Пользователь не найден',
          },
        },
        password: {
          label: 'Пароль',
          validation: {
            required: 'Пароль обязателен',
          },
        },
      },
      submit: 'Войти',
    },
    signUp: {
      title: 'Регистрация',
      signIn: 'Войти',
      field: {
        login: {
          label: 'Логин',
          validation: {
            required: 'Логин обязателен',
            minLength: 'Логин должен быть не короче {0, plural, one{одного символа} other{# символов}}',
            maxLength: 'Логин должен быть не длиннее {0, plural, one{одного символа} other{# символов}}',
            matches: 'Логин должен состоять только из латинских букв, цифр и символа "_"',
            unique: 'Логин уже занят',
          },
        },
        password: {
          label: 'Пароль',
          validation: {
            required: 'Пароль обязателен',
            minLength: 'Пароль должен быть не короче {0, plural, one{одного символа} other{# символов}}',
            maxLength: 'Пароль должен быть не длиннее {0, plural, one{одного символа} other{# символов}}',
          },
        },
        passwordConfirmation: {
          label: 'Подтверждение пароля',
          validation: {
            required: 'Подтверждение пароля обязательно',
            match: 'Пароли не совпадают',
          },
        },
      },
      submit: 'Зарегистрироваться',
    },
  },
};
