import {
  configUpdateEndpoint,
} from './configUpdateEndpoint';

export const useConfigUpdate = () => {
  const [updateConfig, {
    isLoading: isUpdatingConfig,
  }] = configUpdateEndpoint.endpoints.update.useMutation();

  return {
    updateConfig,
    isUpdatingConfig,
  };
};
