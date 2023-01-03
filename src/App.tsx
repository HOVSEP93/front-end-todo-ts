import React, { FC, ReactElement } from 'react';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme } from './theme/customTheme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// components
import { Dashboard } from './pages/dashboard/Dashboard';

// Create a client
const queryClient = new QueryClient();

// Context
import ComposeContext from './context/Compose.context';
import { rootContext } from './context/root.context';

const App: FC = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <ComposeContext components={rootContext}>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          <Dashboard />
        </ThemeProvider>
      </ComposeContext>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
