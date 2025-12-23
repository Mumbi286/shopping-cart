import { createContext, useState, useEffect, useContext} from "react";
// creting a context
const CartContext = createContext();

// creating a provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

// passing it down from ProductCard
  const addToCart = (product) => {
    // checking to see if the items we have exists
    setCart((prev) => {
        const existing = prev.find((item) => item.id === product.id)

        if(existing){
            return prev.map((item) => item.id ===product.id ? {...item, qty:item.qty + 1}: item);
        }
        return [...prev,{...product, qty: 1}]
    })
  }

  const removeFromCart = (id) => {
    setCart ((prev) => prev.filter((item) => item.id !== id))
  }

  const clearCart = () => setCart ([])

  return (
    // Providing value with provider and it will be consumed in the productList
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart}}>
        { children }

    </CartContext.Provider> 
  )

}

// Creating a custome  hook
export function useCart (){
    return useContext(CartContext)

}