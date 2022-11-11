import Link from 'next/link';

export const CartEmpty = () => {
  return (
    <div className='w-3/4 grid grid-cols-1 xl:grid-cols-1 gap-8 m-auto py-8'>
      <Link href='/'>Your shopping cart is Empty</Link>
    </div>
  );
};
