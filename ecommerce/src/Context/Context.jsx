import { createContext, useState, useEffect } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [searchByTitle, setSearchByTitle] = useState("");

  //Fetch Products
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchByCategory, setSearchByCategory] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  const filterBy = (searchType, items, searchByCategory, searchByTitle) => {
    if (searchType === "BY_TITLE") {
      return setFilteredItems(filteredItemsByTitle(items, searchByTitle));
    }
    if (searchType === "BY_CATEGORY") {
      return setFilteredItems(filteredItemsByCategory(items, searchByCategory));
    }
    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return setFilteredItems(
        filteredItemsByCategory(items, searchByCategory).filter((item) =>
          item.title.toLowerCase().includes(searchByTitle.toLowerCase())
        )
      );
    }
    if (!searchType) return items;
  };

  useEffect(() => {
    const applyFilters = () => {
      if (searchByTitle && searchByCategory) {
        filterBy(
          "BY_TITLE_AND_CATEGORY",
          items,
          searchByCategory,
          searchByTitle
        );
      } else if (searchByTitle) {
        filterBy("BY_TITLE", items, searchByCategory, searchByTitle);
      } else if (searchByCategory) {
        filterBy("BY_CATEGORY", items, searchByCategory, searchByTitle);
      } else {
        setFilteredItems(items);
      }
    };
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, searchByTitle, searchByCategory]);

  //Cart Quantity
  const [count, setCount] = useState(0);

  //Oder State
  const [order, setOrder] = useState([]);

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
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setFilteredItems,
        searchByCategory,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
