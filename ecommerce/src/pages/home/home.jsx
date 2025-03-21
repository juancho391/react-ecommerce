import { useContext } from "react";
import { Layout } from "../../components/Layout/Layout";
import { Card } from "../../components/Card/Card";
import { ProductDetail } from "../../components/ProductDetail/ProductDetail";
import { ShoppingCartContext } from "../../Context/Context";

function Home() {
  const {
    items,
    setSearchByTitle,
    searchByTitle,
    filteredItems,
    searchByCategory,
  } = useContext(ShoppingCartContext);

  const renderView = () => {
    if (searchByTitle?.length > 0) {
      if (filteredItems?.length > 0) {
        return filteredItems?.map((item) => <Card key={item.id} data={item} />);
      } else {
        return <div> We dont have anything :(</div>;
      }
    } else if (searchByCategory) {
      return filteredItems?.map((item) => <Card key={item.id} data={item} />);
    } else {
      return items?.map((item) => <Card key={item.id} data={item} />);
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a Product"
        className="rounded-lg border-black border p-2 w-80 mb-5 focus:outline-none"
        onChange={(e) => setSearchByTitle(e.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export { Home };
