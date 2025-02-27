import { useRoutes, BrowserRouter } from "react-router-dom";
import React from "react";
import { Home } from "../home/home";
import { MyOrder } from "../MyOrder/Myorder";
import { MyAccount } from "../MyAccount/MyAccount";
import { MyOrders } from "../MyOrders/Myorders";
import { NotFound } from "../NotFound/NotFound";
import { SignIn } from "../SignIn/SignIn";
import { NavBar } from "../../components/Navbar/Navbar";

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/my-order",
      element: <MyOrder />,
    },
    {
      path: "/my-orders",
      element: <MyOrders />,
    },
    {
      path: "/my-account",
      element: <MyAccount />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);

  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <NavBar />
    </BrowserRouter>
  );
}

export { App };
