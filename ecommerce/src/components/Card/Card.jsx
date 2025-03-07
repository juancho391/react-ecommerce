import React from "react";
import { useContext } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { ShoppingCartContext } from "../../Context/Context";
import { CiCircleCheck } from "react-icons/ci";

function Card(props) {
  const {
    count,
    setCount,
    openProductDetail,
    setProductToShow,
    setCartProducts,
    cartProducts,
    openCheckoutSideMenu,
    closeCheckoutSideMenu,
  } = useContext(ShoppingCartContext);

  const renderIcon = (id) => {
    const isInCart =
      cartProducts.filter((product) => product.id === id).length > 0;
    // const isInCart = newCart.length > 0;

    if (isInCart) {
      return (
        <div
          className="absolute top-0 right-0 bg-green-500 flex justify-center items-center rounded-full p-1"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addProductTocart(e, props.data);
          }}
        >
          <CiCircleCheck className="text-white p-auto rounded-full w-5 h-5" />
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 bg-white flex justify-center items-center rounded-full p-1"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addProductTocart(e, props.data);
          }}
        >
          <CiCirclePlus className="text-black p-auto rounded-full w-5 h-5" />
        </div>
      );
    }
  };

  const addProductTocart = (e, productData) => {
    setCount(count + 1);
    const newProducts = [...cartProducts, productData];
    setCartProducts(newProducts);
    openCheckoutSideMenu();
  };

  const showProduct = (productDetail) => {
    openProductDetail();
    setProductToShow(productDetail);
    closeCheckoutSideMenu();
  };
  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 box-shadow shadow-sm mb-5"
      onClick={() => showProduct(props.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/90 text-black text-xs m-2 px-3 py-0.5 rounded-sm ">
          {props.data.category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={props.data.image}
          alt={props.data.title}
        />
        {renderIcon(props.data.id)}
      </figure>
      <p className="flex justify-between rounded-sm p-0.5">
        <span className="text-sm font-light whitespace-nowrap overflow-hidden overflow-ellipsis">
          {props.data.title}
        </span>
        <span className="text-lg font-medium">${props.data.price}</span>
      </p>
    </div>
  );
}

export { Card };
