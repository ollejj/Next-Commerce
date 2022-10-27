import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { CartContextProvider } from "../contexts/CartContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { Products } from "../components/Products";

export default function Home() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <QueryClientProvider client={queryClient}>
        <CartContextProvider>
          <Header />
          <Products />
        </CartContextProvider>
      </QueryClientProvider>
    </div>
  );
}
