import { createContext, useContext, ReactNode, useState } from "react";
import CartSection from "../components/CartSection";


type ShopingCartProviderProps = {
  children: ReactNode;
};

type cartItem = {
  id: number;
  quantity: number;
};

type shopingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;

  removeFromCart: (id: number) => void;

  openCart: () => void;
  closeCart: () => void;

  cartQuantity: number;
  cartItems: cartItem[];
};

const shopingCartContext = createContext({} as shopingCartContext);

export function useShopingCart() {
  return useContext(shopingCartContext);
}

export function ShopingCartProvider({ children }: ShopingCartProviderProps) {
  const [cartItems, setCartItems] = useState<cartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseItemQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseItemQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  const removeFromCart = (id: number) => {
    return decreaseItemQuantity(id);
  };

  const cartQuantity = cartItems.reduce((totalQuantity, item) => {
    return totalQuantity + item.quantity;
  }, 0);

  const openCart = () => setIsOpen(!isOpen);

  const closeCart = () => setIsOpen(!isOpen);

  return (
    <shopingCartContext.Provider
      value={{
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        cartItems,
        cartQuantity,
        openCart,
        closeCart,
        removeFromCart,
      }}
    >
      {children}
      <CartSection isOpen={isOpen} />
    </shopingCartContext.Provider>
  );
}
