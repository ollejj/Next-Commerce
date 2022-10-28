export const CheckoutItem = ({
  image,
  price,
  rating,
  desc,
  discount,
  title,
  specs,
  qty,
}) => {
  //   const handleClick = (e) => {
  //     e.preventDefault();

  //     setItems([
  //       {
  //         id,
  //         image,
  //         price,
  //         rating,
  //         desc,
  //         discount,
  //         title,
  //         specs,
  //       },
  //       ...items,
  //     ]);
  //   };

  return (
    <div className="w-full flex flex-row items-center shadow-xl px-8 gap-12">
      <img className="w-1/5" src={image} alt="prod_img" />
      <p>{qty}</p>
      <div className="flex flex-col justify-evenly h-full w-1/3">
        <p className="font-bold text-xl">{title}</p>
        <p className="font-semibold text-xl">{rating}/5</p>
        {discount ? (
          <div className="flex flex-row gap-x-4 w-full items-center">
            <p className="line-through">{price}:-</p>
            <p className="text-red-500 font-bold text-3xl">
              {price - discount}:-
            </p>
          </div>
        ) : (
          <p className="font-bold text-3xl">{price}:-</p>
        )}
      </div>
      <div className="flex flex-col w-2/3 gap-8">
        <p className="">{desc}</p>
        <div className="flex flex-col gap-y-1.5">
          <h1 className="font-semibold">Specs:</h1>
          {specs.map((e) => (
            <p className="text-gray-500">{e}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
