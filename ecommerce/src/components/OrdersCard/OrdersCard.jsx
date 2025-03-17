function OrdersCard(props) {
  return (
    <div className="flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-80">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light">01.02.23</span>
          <span className="font-light">{props.totalProducts} articles</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl">${props.totalPrice}</span>
        </p>
      </div>
    </div>
  );
}

export { OrdersCard };
