import { CARD_LOGO_URL } from '../utils/constants';
import { useSelector } from 'react-redux';
import { addItem, removeItem } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

const ItemCard = (data) => {
  const location = useLocation();
  const handleAddItem = (item) => {
    console.log(item);
    dispatch(addItem(item));
  };
  const cartItem = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();
  console.log(cartItem);
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  }
  return (
    <>
      {data.itemData.map((item) => {
        const { name, id, price, defaultPrice, imageId, description } =
          item.card.info;
        return (
          <div
            key={id}
            className='relative flex items-center justify-between border-b-2'
          >
            {location.pathname == '/cart' && (
              <button className='absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-white bg-black rounded-full shadow-md cursor-pointer shadow-gray-400' onClick={() => handleRemove(id)}>x</button>
            )}
            <div className='w-10/12 py-8'>
              <h4 className='text-sm font-semibold'>{name}</h4>
              <h6 className='text-sm font-semibold'>
                Rs {(price || defaultPrice) / 100}
              </h6>
              <h6 className='pt-2 pr-2 text-xs leading-4 text-gray-500'>
                {description}
              </h6>
            </div>
            <div className='relative flex w-2/12'>
              {imageId && (
                <img
                  src={CARD_LOGO_URL + imageId}
                  className='w-full rounded-md'
                />
              )}
              {location.pathname !== '/cart' && (
                <button
                  onClick={() => handleAddItem(item)}
                  className={`bottom-0 left-0 right-0 z-10 px-4 py-1 ml-2 mr-2 -mb-2 text-sm font-semibold text-green-600 uppercase bg-gray-200 border-green-400 rounded-md ${
                    imageId ? 'absolute' : ''
                  }`}
                >
                  Add +
                </button>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ItemCard;
