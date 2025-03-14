import { useContext } from "react";
import { Link } from "react-router-dom";
import { OrdersCard } from "../../components/OrdersCard/OrdersCard";
import { Layout } from "../../components/Layout/Layout";
import { ShoppingCartContext } from "../../Context/Context";

function MyOrders() {
  const { order } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex w-80 items-center relative justify-center">
        <h1>My Orders</h1>
      </div>
      {order.map((order, index) => {
        <Link key={index} to={`/my-orders/${order.id}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          ></OrdersCard>
          ;
        </Link>;
      })}
    </Layout>
  );
}

export { MyOrders };
