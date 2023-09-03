import {
  QueryClientProvider as QueryProvider,
  QueryClient,
} from "@tanstack/react-query";
import FetingLayout from "./FetingLayout";

export default function CustomHookCatData() {
  const forClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryProvider client={forClient}>
      <FetingLayout />
    </QueryProvider>
  );
}
