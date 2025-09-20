import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, use } from "react";
import resList from "./../utils/mockData";
import ShimmerUI from "./ShimmerUI";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestarunt, setFilterRestarunt] = useState([]);
  // useEffect => called only after component is rendered
  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);
  console.log("Body Rendered");

  const fetchData = async () => {
    console.log("fetchData called");
    const data = await fetch(
      // added cors proxy to avoid CORS error
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5534027&lng=73.75321890000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //console.log(json);
    // optional chaining
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestarunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return (
    <div className="Body">
      <div className="btn">
        <button
          className="btn-filter"
          onClick={() => {
            // filter on rating above 4.5
            let filterRestarunt = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurants(filterRestarunt);
          }}
        >
          Top Rated Restaurant
        </button>
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          onChange={(e) => {
            const searchText = e.target.value;
            const searchRestarunt = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterRestarunt(searchRestarunt);
          }}
        />
      </div>
      {filterRestarunt && filterRestarunt.length === 0 ? (
        <div>
          <ShimmerUI />
        </div>
      ) : (
        <div className="res-container">
          {filterRestarunt.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Body;
