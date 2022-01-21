/* 
  COMO CRIAR UM CONTEXTO 
  1 - Importar createContext do react
  2 - atribui createContext para uma variável
    Ex: export const CartContext = createContext([]);
  3 - Criar o Provider
  4 - Importar o Provider no App.js
  5 - Consumir o contexto usando o useContex 
  ...
*/

import { createContext, useEffect, useState } from "react"; // 1 
import { toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';

export const CartContext = createContext([]); // 2

export function CartProvider({ children }) {

  const [cart, setCart] = useState([])

  console.log(cart)

  //map
  // filter

  function handleAddCart(card) {

    /* SOLUCAO 1 - POUCA EFICIENTE
    if(cart.find(item => item.id === card.id)) {
      alert('Item ja adicionado ao carrinho')
      return
    }
    */

    const newCard = {
      ...card,
      idCard: uuidv4()
    }

    setCart([...cart, newCard])
    toast.success('adicionado ao carrinho')
    localStorage.setItem("cart", JSON.stringify([...cart, card]));
    alert('Adicionado no carrinho')
  }

  function handleRemoveItemInCart(idCard) {
    const cartFiltered = cart.filter(item => {
      if (item.idCard === idCard) {
        return false // Remove item do carrinho
      } else {
        return true // permanece item no carrinho
      }
    })
    setCart(cartFiltered)
    localStorage.setItem("cart", JSON.stringify(cartFiltered));
    alert('Removido do item')
  }

  useEffect(() => {
    function handleGetItensLocalStorage() {
      const storedArray = JSON.parse(localStorage.getItem("cart"));
      // se storage estiver vazio , coloca um array vazio
      setCart(storedArray || [])
    }
    handleGetItensLocalStorage();
  }, [])

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        addItem: handleAddCart,
        removeItem: handleRemoveItemInCart
      }}>
      {children}
    </CartContext.Provider>
  )
}