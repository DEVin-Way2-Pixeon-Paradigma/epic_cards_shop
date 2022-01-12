import { createContext } from "react";

export const CartContext = createContext([]);

export function CartProvider({children}) {

  return (
    <CartContext.Provider value={{
      message: 'ola mundo',
      name: 'douglas'
    }}>
      {children}
    </CartContext.Provider>
  )
}