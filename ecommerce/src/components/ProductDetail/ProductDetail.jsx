import { useContext } from "react";
import { HiOutlineXCircle } from "react-icons/hi";
import { ShoppingCartContext } from "../../Context/Context";

function ProductDetail() {
  const { isProductDetailOpen, closeProductDetail } =
    useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } w-[360px] flex-col fixed right-0 border border-black rounded-lg bg-white h-[calc(100vh-80px)]`}
    >
      <div
        onClick={() => closeProductDetail()}
        className="flex justify-between items-center p-6"
      >
        <h2 className="font-medium text-xl">Detail</h2>
        <HiOutlineXCircle className="size-6" />
      </div>
    </aside>
  );
}

export { ProductDetail };
