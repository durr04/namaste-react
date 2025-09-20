import { IMG_CDN_URL } from "../utils/constants";

// passing props & also doing destructring on the fly also
// 1 (props)
// 2 ({resName, cuisine})
const RestaurantCard = (props) => {
  //console.log(props);
  // object destructring
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, sla } = resData.info;
  return (
    <div className="res-card">
      <img
        alt="res-logo"
        className="res-logo"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};
export default RestaurantCard;
