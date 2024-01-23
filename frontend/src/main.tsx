import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom"
import AppRouter from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={AppRouter} />
  </QueryClientProvider>
);
