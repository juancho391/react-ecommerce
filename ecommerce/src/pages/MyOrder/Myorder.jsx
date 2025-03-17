import { useContext } from "react";
import { Layout } from "../../components/Layout/Layout";
import { ShoppingCartContext } from "../../Context/Context";
import { OrderCard } from "../../components/OrderCard/OrderCard";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === "last") index = order?.length - 1;

  return (
    <Layout>
      <div className="flex w-80 items-center relative justify-center mb-10">
        <Link to={"/my-orders"} className="absolute left-0">
          <FaArrowLeftLong className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="w-150 flex flex-col relative">
        {order?.[index]?.products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
        <div className="mt-7">
          <p className="absolute right-0 bottom-0 font-bold">
            Total: ${order[0].totalPrice}
          </p>
        </div>
      </div>
    </Layout>
  );
}

export { MyOrder };
