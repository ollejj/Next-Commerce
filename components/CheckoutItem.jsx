import { convertToDecimal } from '../util/utils';

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
  return (
    <div className='w-full flex flex-row items-center shadow-xl px-8 py-4 gap-12 rounded-xl'>
      <img className='w-1/5' src={image} alt='prod_img' />
      <p>{qty}</p>
      <div className='flex flex-col justify-evenly h-full w-1/3'>
        <p className='font-bold text-xl'>{title}</p>
        <p className='font-semibold text-xl'>{rating}/5</p>
        {discount ? (
          <div className='flex flex-row gap-x-4 w-full items-center'>
            <p className='line-through'>{convertToDecimal(price)}:-</p>
            <p className='text-red-500 font-bold text-3xl'>
              {convertToDecimal(price - discount)}:-
            </p>
          </div>
        ) : (
          <p className='font-bold text-3xl'>{convertToDecimal(price)}:-</p>
        )}
      </div>
      <div className='flex flex-col w-2/3 gap-8'>
        <p className=''>{desc}</p>
        <div className='flex flex-col gap-y-1.5'>
          <h1 className='font-semibold'>Specs:</h1>
          {specs.map((e, i) => (
            <p key={i} className='text-gray-500'>
              {e}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
