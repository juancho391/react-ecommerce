import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Card } from "../../components/Card/Card";

function Home() {
  return (
    <Layout>
      <Card
        imageUrl={
          "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
        productName={"HeadPhones"}
        productPrice={1000}
      />
      <Card
        imageUrl={
          "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        productName={"Apple Watch"}
        productPrice={500}
      />
    </Layout>
  );
}

export { Home };
