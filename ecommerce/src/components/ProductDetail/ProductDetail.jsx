import React from "react";
import { useContext } from "react";
import { HiOutlineXCircle } from "react-icons/hi";
import { ShoppingCartContext } from "../../Context/Context";

function ProductDetail() {
  const { isProductDetailOpen, closeProductDetail, productToShow } =
    useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } w-[390px] flex-col fixed right-0 border border-black rounded-lg bg-white h-[calc(100vh-80px)]`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <HiOutlineXCircle
          onClick={() => closeProductDetail()}
          className="size-6 cursor-pointer"
        />
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg shadow-lg"
          src={productToShow.image}
          alt={productToShow.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-md ">${productToShow.price}</span>
        <span className="font-medium text-md ">{productToShow.category}</span>
        <span className="font-medium text-md ">{productToShow.title}</span>
        <span className="font-light text-md ">{productToShow.description}</span>
      </p>
    </aside>
  );
}

export { ProductDetail };
