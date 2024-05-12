import { RouterProvider } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ThemeProvider } from './contexts/ThemeContext';
import router from './routes/Router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      retryDelay: 1000,
      staleTime: 1000 * 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <RouterProvider router={router} />
      </ThemeProvider>
      <ReactQueryDevtools buttonPosition='bottom-left' initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
