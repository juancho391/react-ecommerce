import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context/Context";
import { useContext } from "react";
import { LuShoppingCart } from "react-icons/lu";

function NavBar() {
  const { count, setSearchByCategory, openCheckoutSideMenu } =
    useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4";

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0">
      <ul className="flex items-center gap-3">
        <li
          onClick={() => setSearchByCategory(null)}
          className="font-semibold text-lg"
        >
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setSearchByCategory(null)}
          >
            ALL
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setSearchByCategory("clothing")}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setSearchByCategory("electronics")}
          >
            Electronics
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          <NavLink>ByJuanBedoya</NavLink>
        </li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li className="flex items-center cursor-pointer">
          <LuShoppingCart
            onClick={(e) => {
              e.preventDefault();
              openCheckoutSideMenu();
            }}
          />
          <div>{count}</div>
        </li>
      </ul>
    </nav>
  );
}

export { NavBar };
