function OrdersCard(props) {
  return (
    <div className="flex justify-between items-center mb-3 border border-black">
      <p>
        <span>01-02-2025</span>
        <span>{props.totalProducts}</span>
        <span>{props.totalPrice}</span>
      </p>
    </div>
  );
}

export { OrdersCard };
