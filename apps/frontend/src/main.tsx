import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';
import { RouterProvider } from 'react-router-dom';
import { i18n } from '@/i18n';
import { store, persistor } from '@/store';
import { router } from '@/router';
import { ModalsProvider, ToastsProvider } from '@/providers';

i18n.init().then(() => {
  createRoot(
    document.getElementById('root') as HTMLElement,
  ).render(
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <ModalsProvider>
              <ToastsProvider>
                <RouterProvider router={router} />
              </ToastsProvider>
            </ModalsProvider>
          </PersistGate>
        </Provider>
      </I18nextProvider>
    </StrictMode>,
  );
});
