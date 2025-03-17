import { useRoutes, BrowserRouter } from "react-router-dom";
import { Home } from "../home/home";
import { MyOrder } from "../MyOrder/Myorder";
import { MyAccount } from "../MyAccount/MyAccount";
import { MyOrders } from "../MyOrders/MyOrders";
import { NotFound } from "../NotFound/NotFound";
import { SignIn } from "../SignIn/SignIn";
import { NavBar } from "../../components/Navbar/Navbar";
import { ShoppingCartProvider } from "../../Context/Context";

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
      path: "/my-orders/last",
      element: <MyOrder />,
    },
    {
      path: "/my-orders/:id",
      element: <MyOrder />,
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
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export { App };
