import "../styles/globals.css";

import { Layout } from "./Layout";
import { CartContextProvider } from "../contexts/CartContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <CartContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
