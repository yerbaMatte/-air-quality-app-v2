import GridLayout from './components/UI/Grid/GridLayout';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <GridLayout />
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
