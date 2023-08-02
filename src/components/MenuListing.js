// import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useRestaurantList from '../utils/useRestaurantList';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const MenuListing = () => {
  const [showIndex, setShowIndex] = useState(false);
  const params = useParams();
  const { id } = params;
  const menuListing = useRestaurantList(id);
  // const menu = menuListing?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards

  const menuLists =
    menuListing?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards;
  const name = menuListing?.data?.cards[0]?.card?.card?.info?.name;

  const filteredMenuList = menuLists?.filter(
    (item) =>
      item.card.card['@type'] ===
      'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  );
  // console.log(filteredMenuList);
  // console.log(name);
  const handleHeaderClick = (index) => {
    setShowIndex(index);
  };
  return (
    <div className='w-8/12 py-8 m-auto'>
      <h1 className='text-2xl font-bold'>{name}</h1>
      {filteredMenuList?.map((category, index) => {
        const { title } = category.card.card;
        return (
          <RestaurantCategory
            key={title}
            data={category.card.card}
            show={index === showIndex ? true : false}
            handleHeaderClick={() => handleHeaderClick(index)}
          />
        );
      })}
    </div>
  );
};

export default MenuListing;
