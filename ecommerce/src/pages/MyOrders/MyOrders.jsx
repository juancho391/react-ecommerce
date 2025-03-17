import { useContext } from "react";
import { Link } from "react-router-dom";
import { OrdersCard } from "../../components/OrdersCard/OrdersCard";
import { Layout } from "../../components/Layout/Layout";
import { ShoppingCartContext } from "../../Context/Context";

function MyOrders() {
  const { order } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex items-center  mb-3 border-black rounded-lg p-4 w-80 justify-center">
        <h1 className="font-medium text-xl">My Orders</h1>
      </div>
      {order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
}

export { MyOrders };
