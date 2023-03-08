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

/*
Features
3/3

Historical data visualization: You can use charting libraries like Chart.js or D3.js to display historical air quality data. This would help users understand the trend of air quality over time.
Air quality news: Implement a feature that displays the latest air quality-related news articles from credible sources. You can use APIs provided by news organizations or use web scraping techniques to fetch the news.
Air quality index calculation: Implement a feature that calculates the air quality index based on various pollutants like PM2.5, ozone, etc. You can use the Air Quality Index (AQI) formula for this.
Add content to the website. Give nice look and feel using Chakra UI components. Ready-made components can be used from here https://chakra-templates.dev/page-sections/hero

*/
