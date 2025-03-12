import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { HiOutlineXCircle } from "react-icons/hi";
import { ShoppingCartContext } from "../../Context/Context";
import { OrderCard } from "../OrderCard/OrderCard";
import { totalPrice } from "../../utils";

function CheckOutSideMenu() {
  const {
    closeCheckoutSideMenu,
    isCheckOutMenulOpen,
    cartProducts,
    setCartProducts,
    setOrder,
    order,
  } = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter((product) => product.id != id);
    setCartProducts(filteredProducts);
  };

  const handleCheckOut = () => {
    const orderToAdd = {
      date: "01-02-2025",
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    };
    setOrder([...order, orderToAdd]);
    setCartProducts([]);
    closeCheckoutSideMenu();
  };

  return (
    <aside
      className={`${
        isCheckOutMenulOpen ? "flex" : "hidden"
      } w-[390px] flex-col fixed right-0 border border-black rounded-lg bg-white h-[calc(100vh-80px)]`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <HiOutlineXCircle
          onClick={() => closeCheckoutSideMenu()}
          className="size-6 cursor-pointer"
        />
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="p-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">
            ${totalPrice(cartProducts)}
          </span>
        </p>
        <Link to="/my-orders/last">
          <button
            className="border-1 rounded-lg w-full bg-black text-white shadow-2xl p-3 cursor-pointer mb-3"
            onClick={() => handleCheckOut()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
}

export { CheckOutSideMenu };
