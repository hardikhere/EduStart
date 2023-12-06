import React from "react";
import { UserProvider } from "@/context/UserContext";
import Navbar from "@/components/Home/Navbar";
import {
  QueryClient,
  HydrationBoundary,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import NextNProgress from "nextjs-progressbar";
import "./index.css";
import "@smastrom/react-rating/style.css";

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <Navbar />
          <NextNProgress />
          <Component {...pageProps} />
        </HydrationBoundary>
      </UserProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
