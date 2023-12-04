import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ReactQueryDevtools } from "react-query/devtools";
import { useRef } from "react";
import { UserProvider } from "@/context/UserContext";
import Navbar from "@/components/Home/Navbar";
import "./index.css";
import "@smastrom/react-rating/style.css";

function MyApp({ Component, pageProps }) {
  const queryClientRef = useRef<null | QueryClient>(null);
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <UserProvider>
        <Hydrate state={pageProps.dehydratedState}>
          <Navbar />
          <Component {...pageProps} />
        </Hydrate>
      </UserProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
