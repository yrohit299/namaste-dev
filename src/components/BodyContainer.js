import CardComponent, { withPromotedLabel } from './CardComponent';
import { useState, useEffect } from 'react';
import ShimmerCard from './ShimmerCard';
import { RESTAURANTS_LIST } from '../utils/api'

const BodyContainer = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurantList, setFilterRestautantList] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleTopResturants = () => {
    let filter = filterRestaurantList.filter((item) => item.info.avgRating > 4);
    console.log(filter);
    setFilterRestautantList(filter);
  };

  useEffect(() => {
    fetchData();
    console.log('useEfferct called');
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_LIST);
    const json = await data.json();
    console.log(json.data.cards[5].card.card.gridElements?.infoWithStyle.restaurants);
    setListOfRestaurants(json.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterRestautantList(json.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const handleSearch = () => {
    const filter = listOfRestaurants.filter((res) => {
      return res.data.name.toLowerCase().includes(inputText.toLowerCase());
    });

    console.log(filter);

    setFilterRestautantList(filter);
  };

  return (
    <>
    {console.log('func return is called')}
      <div className='flex p-4'>
        <div className='flex'>
          <input
            type='text'
            className='px-3 border border-solid rounded-md'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder='search restaurant'
          />
          <button type='button' className='px-3 py-2 ml-2 mr-2 bg-red-100 border border-solid rounded-md' onClick={() => handleSearch()}>
            Search
          </button>
        </div>
        <button className='px-4 py-2 border rounded-md' onClick={() => handleTopResturants()}>
          Filter top restaurant
        </button>
      </div>
      <div className='flex flex-wrap'>
        {filterRestaurantList?.length
          ? filterRestaurantList?.map((item) => {
            const { id } = item.info
              return <CardComponent key={id} data={item.info} />;
            })
          : Array.from({ length: 15 }, (_, i) => <ShimmerCard key={i} />)}
      </div>
    </>
  );
};

export default BodyContainer;
