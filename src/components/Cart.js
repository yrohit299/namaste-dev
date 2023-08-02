import { useSelector } from 'react-redux';
import ItemCard from './ItemCard';
import { useDispatch } from 'react-redux';
import { clearCart } from '../store/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearAll = () => {
    dispatch(clearCart());
  }
  const dispatch = useDispatch();
  return (
    <div className='w-6/12 m-auto'>
      <h2 className='p-4 m-4 font-bold text-center'>Cart</h2>
      {cartItems.length > 0 && <button className='p-2 mt-2 text-white bg-black border-solid rounded-md text-ceter' onClick={() => handleClearAll()}>Clear All</button>}
      {cartItems.length ? (
        <ItemCard itemData={cartItems} />
      ) : (
        <h3>Cart is Empty. Add some items</h3>
      )}
    </div>
  );
};

export default Cart;
