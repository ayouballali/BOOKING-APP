import React from 'react'
import useFetch from '../../hooks/useFetch'
import './featuredProperties.css'

export default function FeaturedProperties() {
  const [data, loading, errors] = useFetch(
    "http://localhost:8800/api/hotels?limit=4&featured=true"
  )
  return (
    <div className="fp">

      {loading ? "Please wait" :(
        <>{
        data.map((hotel,i) => {
          return (

            < div className="fpItem" key={i}>
              <img
                src={hotel.image}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{hotel.name}</span>
              <span className="fpCity">{hotel.city}</span>
              <span className="fpPrice">Starting from $ {hotel.price}</span>
              <div className="fpRating">
                <button>{hotel.rating}</button>
                <span>Excellent</span>
              </div>
            </div>
          )
        })}

    </> ) }
    </div >
  )
}
