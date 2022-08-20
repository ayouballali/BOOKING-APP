import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import SearchItem from '../../components/searchItem/SearchItem'
import "./list.css"
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { format } from "date-fns";
import useFetch from '../../hooks/useFetch'

export default function List() {

  const { state } = useLocation();

 

  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(state.options)
  const [destination, setDestination] = useState(state.destination)
  const [date, setDate] = useState(state.date)
  const [min,setmin] = useState();
  const [max,setmax]= useState()
    // fetch our data 
    const [data, loading, errors,reFetch] = useFetch(
      `http://localhost:8800/api/hotels?city=${destination}&min=${min||1}&max=${max||1000}`
    )

  // function to handel butoon search 
  const handelSubmit = (e)=>{
    reFetch()

  }
  


 
  

  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>


            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} onChange={(e)=>setDestination(e.target.value)} type="text" />
            </div>

            <div className="lsItem">
              <label>Date </label>
              <span
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchText"
              >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}

                  minDate={new Date()}
                />
              )}

            </div>

            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input min={0} onChange={(e)=>{setmin(e.target.value)}} type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input onChange={(e)=>{setmax(e.target.value)}} type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={(e)=>handelSubmit(e)}>Search</button>
          </div>

          <div className="listResult">
            { loading ? ("please waite"):( data.map((hotel,i)=>{
              return (
                <SearchItem option={options} date={date} data={hotel} key={i} />
              )
            })
            )
          }
            
            
          </div>
        </div>
      </div>
    </div>
  )
}
