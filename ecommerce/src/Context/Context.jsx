import React from "react";
import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  //Cart Quantity
  const [count, setCount] = useState(0);

  //Shopping cart state
  const [cartProducts, setCartProducts] = useState([]);

  //Product Detail Open Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);
  //Checkout Side Menu
  const [isCheckOutMenulOpen, setCheckOutMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setCheckOutMenuOpen(true);
  const closeCheckoutSideMenu = () => setCheckOutMenuOpen(false);

  //Product Detail => Show Product
  const [productToShow, setProductToShow] = useState({});

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        setCartProducts,
        cartProducts,
        isCheckOutMenulOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
