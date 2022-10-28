import { useCartContext } from "../contexts/CartContext";

export const ProductCard = ({
  image,
  price,
  rating,
  desc,
  discount,
  title,
  specs,
  id,
}) => {
  const { items, setItems } = useCartContext();

  const truncateText = (text) => {
    return text?.length >= 100 ? text.substring(0, 100) + "..." : text;
  };

  const handleClick = (e) => {
    e.preventDefault();

    setItems([
      {
        id,
        image,
        price,
        rating,
        desc,
        discount,
        title,
        specs,
      },
      ...items,
    ]);
  };

  return (
    <div className="max-w-96 flex flex-col p-4 gap-y-4 shadow-xl rounded-xl">
      <img className="w-3/4 self-center" src={image} alt="prod_img" />
      <p className="self-start">{rating}/5</p>
      <p>{title}</p>
      {discount ? (
        <div className="flex flex-row gap-x-4 w-full">
          <p className="line-through">{price}:-</p>
          <p className="text-red-500">{price - discount}:-</p>
        </div>
      ) : (
        <p>{price}:-</p>
      )}
      <p className="">{truncateText(desc)}</p>
      <div className="flex flex-col gap-y-1.5">
        <h1 className="font-semibold">Specs:</h1>
        {specs.map((e) => (
          <p className="text-gray-500">{e}</p>
        ))}
      </div>
      <button
        className="mt-auto ml-auto bg-oxley h-12 w-32 text-white font-bold"
        onClick={handleClick}
      >
        Add to Cart
      </button>
    </div>
  );
};
