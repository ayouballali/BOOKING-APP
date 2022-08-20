import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ data, date,option }) => {
  


  return (
    <div className="searchItem">
      <img
        src={data.photos[0]}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{data.name}</h1>
        <span className="siDistance">{data.distance} from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">${data.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link state={{ state: {date:date ,option:option} }} to={`/hotels/${data._id}`}>
            <button
              className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
