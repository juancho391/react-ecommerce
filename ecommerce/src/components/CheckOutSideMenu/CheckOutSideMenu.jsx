import React from "react";
import { useContext } from "react";
import { HiOutlineXCircle } from "react-icons/hi";
import { ShoppingCartContext } from "../../Context/Context";
import { OrderCard } from "../OrderCard/OrderCard";

function CheckOutSideMenu() {
  const {
    closeCheckoutSideMenu,
    isCheckOutMenulOpen,
    cartProducts,
    setCartProducts,
  } = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter((product) => product.id != id);
    setCartProducts(filteredProducts);
  };

  console.log(cartProducts);

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
      <div className="px-6 overflow-y-scroll">
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
    </aside>
  );
}

export { CheckOutSideMenu };
