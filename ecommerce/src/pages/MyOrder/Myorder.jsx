import React, { useContext } from "react";
import { Layout } from "../../components/Layout/Layout";
import { ShoppingCartContext } from "../../Context/Context";
import { OrderCard } from "../../components/OrderCard/OrderCard";

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);

  return (
    <Layout>
      My Order
      <div className="w-150 flex flex-col">
        {order.slice(-1)[0]?.products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  );
}

export { MyOrder };
