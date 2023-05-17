import {
  __namespace____name__PascalCase__Endpoint,
  __namespace__PascalCase____name__PascalCase__Request,
  __namespace__PascalCase____name__PascalCase__Response,
} from './__namespace____name__PascalCase__Endpoint';

export const use__namespace__PascalCase____name__PascalCase__ = (
  request: __namespace__PascalCase____name__PascalCase__Request,
) => {
  const {
    data,
    error,
    isLoading,
    isFetching,
  } = __namespace____name__PascalCase__Endpoint.endpoints.__name__.useQuery(request);

  return {
    error,
    data,
    isLoading,
    isFetching,
  };
};

export const use__namespace__PascalCase____name__PascalCase__ = () => {
  const [__name__, {
    isLoading: is__name__PascalCase,
  }] = __namespace____name__PascalCase__Endpoint.endpoints.__name__.useMutation();

  return {
    __name__,
    is__name__PascalCase,
  };
};
