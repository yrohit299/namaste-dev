import { useState, useEffect } from 'react';
import { MENU_LIST } from '../utils/api';
const useRestaurantList = (id) => {
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_LIST + 'restaurantId=' + id);
    const json = await data.json();
    setMenuList(json);
  };
  return menuList;
};

export default useRestaurantList;
