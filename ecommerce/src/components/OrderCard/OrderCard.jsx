import { HiOutlineXCircle } from "react-icons/hi";

function OrderCard(props) {
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-4">
        <figure className="w-20 h-20">
          <img
            src={props.image}
            alt={props.title}
            className="w-full h-full rounded-lg object-cover"
          />
        </figure>
        <p className="text-sm font-light max-w-[150px] truncate">
          {props.title}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${props.price}</p>
        <HiOutlineXCircle
          onClick={() => props.handleDelete(props.id)}
          className="w-6 h-6 cursor-pointer"
        />
      </div>
    </div>
  );
}

export { OrderCard };
