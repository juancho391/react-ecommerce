function Card({ imageUrl, productName, productPrice }) {
  return (
    <div className="bg-white cursor-pointer w-56 h-60 box-shadow shadow-sm mb-5">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/90 text-black text-xs m-2 px-3 py-0.5 rounded-sm ">
          Electronics
        </span>
        <img className="w-full h-full object-cover rounded-lg" src={imageUrl} />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-3">
          +
        </div>
      </figure>
      <p className="flex justify-between rounded-sm p-0.5">
        <span className="text-sm font-light">{productName}</span>
        <span className="text-lg font-medium">${productPrice}</span>
      </p>
    </div>
  );
}

export { Card };
