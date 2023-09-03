import {
  QueryClientProvider as QueryProvider,
  QueryClient,
} from "@tanstack/react-query";
import FetchingData from "./FetchingData";

export default function ReactQuery() {
  const forClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      }
    }
  });

  return (
    <QueryProvider client={forClient}>
      <FetchingData />
    </QueryProvider>
  );
}
