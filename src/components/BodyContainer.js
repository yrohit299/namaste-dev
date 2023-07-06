import CardComponent from './CardComponent';
import { useState, useEffect } from 'react';
import ShimmerCard from './ShimmerCard';

const BodyContainer = () => {
  const shimmerDefaultLength = 15;
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurantList, setFilterRestautantList] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleTopResturants = () => {
    let filter = listOfRestaurants.filter((item) => item.data.avgRating > 4);
    console.log(filter);
    setListOfRestaurants(filter);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.3150962&lng=72.859302&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestautantList(json?.data?.cards[2]?.data?.data?.cards);
  };

  const handleSearch = () => {
    const filter = listOfRestaurants.filter((res) => {
     return res.data.name.toLowerCase().includes(inputText.toLowerCase());
    });

    console.log(filter);

    setFilterRestautantList(filter);
  }

  return (
    <>
      <div className='filter-container'>
        <div>
          <input type='text' value={inputText} onChange={(e) => setInputText(e.target.value)}/>
          <button type='button' onClick={() => handleSearch()}>Search</button>
        </div>
        <button onClick={() => handleTopResturants()}>
          Filter top restaurant
        </button>
      </div>
      <div className='body-container'>
        {filterRestaurantList.length
          ? filterRestaurantList.map((item) => {
              return <CardComponent key={item.data.id} data={item.data} />;
            })
          : Array(shimmerDefaultLength).fill(<ShimmerCard />)}
      </div>
    </>
  );
};

export default BodyContainer;
