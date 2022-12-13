import { createContext, ReactNode, useContext, useState } from "react";
import { Alimento } from "../types/alimento";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cart: Alimento[];
  addProduct: (
    name: string,
    preco: number,
    time: number,
    gramas: number,
    kcal: number
  ) => Promise<void>;
  removeProduct: (name: string) => void;
  removeAllProduct: () => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Alimento[]>(() => {
    const storagedCart = localStorage.getItem("@Burger:alimentos");

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = async (
    name: string,
    preco: number,
    time: number,
    gramas: number,
    kcal: number
  ) => {
    try {
      let newCart = [...cart];
      const productInCart = cart
        .filter((item) => item.name === name)
        .map((product) => {
          return product.amount;
        });

      const productInCart2 = cart.findIndex((item) => item.name === name);

      if (Number(productInCart) >= 1) {
        newCart[productInCart2].amount += 1;
        setCart(newCart);
      } else {
        newCart = [
          ...cart,
          {
            name: name,
            preco: preco,
            time: time,
            gramas: gramas,
            kcal: kcal,
            amount: 1,
          },
        ];
        setCart(newCart);
      }
      localStorage.setItem("@Burger:alimentos", JSON.stringify(newCart));
    } catch (error) {
      console.log(error);
    }
  };

  const removeProduct = (name: string) => {
    let newCart = [...cart];
    try {
      const productInCart = cart
        .filter((item) => item.name === name)
        .map((product) => {
          return product.amount;
        });

      const productInCart2 = cart.findIndex((item) => item.name === name);

      if (Number(productInCart) > 1) {
        newCart[productInCart2].amount -= 1;
        setCart(newCart);
        localStorage.setItem("@Burger:alimentos", JSON.stringify(newCart));
      } else {
        const removeCart = cart.filter((item: Alimento) => item.name !== name);

        setCart(removeCart);
        localStorage.setItem("@Burger:alimentos", JSON.stringify(removeCart));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeAllProduct = () => {
    const removeCart = cart.filter((item: Alimento) => item.name === "");

    setCart(removeCart);
    localStorage.setItem("@Burger:alimentos", JSON.stringify(removeCart));
  };
  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, removeAllProduct }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
