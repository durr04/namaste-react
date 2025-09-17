import RestaurantCard from "./RestaurantCard";
import resList from "./../utils/mockData";
const Body = () => {
  return (
    <div className="Body">
      <div className="btn">Button</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
