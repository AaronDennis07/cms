import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";




const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // State to hold the authentication token
  const [token, setToken_] = useState(JSON.parse(localStorage.getItem("token")) || null);
  const [cart,setCart] = useState([])
  const addToCart = (item, selectedQuantity) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
  
    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };
  useEffect(() => {
    console.log(cart); // This will log the updated cart state
  }, [cart]);
  const handleCartDelete = (id)=>{
    console.log(id)
    setCart((items)=>items.filter((item)=>item.id!=id))
  }
  const editQuantity = (id,qty)=>{
    setCart((items)=>{
      items.map((item)=>{
        if(item.id==id){
          item.qty = qty
          
        }
        return item
      })
    })
  }
  // Function to set the authentication token
  const setToken = (newToken) => {
    setToken_(newToken);
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", JSON.stringify(token));
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      cart,
      setCart,
      addToCart,
      handleCartDelete,
      editQuantity
    }),
    [token,cart]
  );

  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;