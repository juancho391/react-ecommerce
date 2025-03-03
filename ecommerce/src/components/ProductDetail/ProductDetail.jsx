import { HiOutlineXCircle } from "react-icons/hi";

function ProductDetail() {
  return (
    <aside className="w-[360px] flex flex-col fixed right-0 border border-black rounded-lg bg-white h-[calc(100vh-80px)]">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <HiOutlineXCircle className="size-6" />
      </div>
    </aside>
  );
}

export { ProductDetail };
