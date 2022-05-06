import React from 'react';
import AppRoutes from '@/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();
const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={process.env.NODE_ENV === 'development'}/>
        <Router>
          <AppRoutes/>
        </Router>
      </QueryClientProvider>
    </>
  );
};
export default App;
