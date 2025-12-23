import { createContext, useState, useEffect, useContext} from "react";
// creting a context
const ProductContext = createContext();

// creating a provider
export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =>{
    const fetchProducts = async () => {
      try {
        // Making a request to json server 
        const res = await fetch('/api/products')
        if(!res.ok) throw new Error ('Failed to fetch products')
          const data = await res.json()
        // console.log(data)
        setProducts(data)
      }catch (err){
        setError(err.message)
      }finally {
        setLoading(false)
      }
    }
    fetchProducts();
  }, [])
  return (
    // Providing value with provider and it will be consumed in the productList
    <ProductContext.Provider value={{products, loading, error}}>
        { children }

    </ProductContext.Provider> 
  )

}

// Creating a custome hook
export function useProducts (){
    return useContext(ProductContext)

}