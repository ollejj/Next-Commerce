import { Header } from "../components/Header";
import { CartContextProvider } from "../contexts/CartContext";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <CartContextProvider>
        <Header />
      </CartContextProvider>
    </div>
  );
}
