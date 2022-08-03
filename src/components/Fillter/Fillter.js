import React from "react"; //i took off a useState here
import "./Fillter.css";

function Fillter({
  citys,
  cours,
  rates,
  rateChange,
  citychange,
  courchange,
  addtocitFil,
  remFromcitFil,
  addtocouFil,
  remFromcouFil,
  addtoratFil,
  remFromratFil,
  sortby,
  changeSort,
}) {
  //================img========================

  const img = (
    <img
      src="https://www.pngkit.com/png/full/1-10969_polygons-drawing-watercolor-star-icon.png"
      alt="star-fillter-img"
      height={10}
      width={10}
    ></img>
  );
  return (
    <div className="fillter">
      <h1>Search:</h1>
      <div className="main-fil-comp">
        <h2>Sort by:</h2>
        <div className="div-sort">
          <select
            className="Select-sort"
            value={sortby.find((v) => v.flage)?.val}
            onChange={(e) => {
              changeSort(e.currentTarget.value);
            }}
          >
            {sortby.map((v) => (
              <option key={v.key} value={v.val}>
                {v.val}
              </option>
            ))}
          </select>
        </div>
        <div className="fil-comp"></div>
        <h2>Cites</h2>
        <div className="fil-comp">
          {citys.map((city) => {
            if (city.flag) {
              return (
                <button
                  key={city.key}
                  className="but-clik"
                  value={city.city}
                  onClick={(e) => {
                    citychange(e.target.value);
                    remFromcitFil(e.currentTarget.value);

                    // console.log("remove");
                  }}
                >
                  {city.city}
                </button>
              );
            } else {
              return (
                <button
                  key={city.key}
                  className="but-remove"
                  value={city.city}
                  onClick={(e) => {
                    citychange(e.target.value);
                    addtocitFil(e.currentTarget.value);
                    //console.log("add");
                  }}
                >
                  {city.city}
                </button>
              );
            }
          })}
        </div>
        <h2>Courses</h2>
        <div className="fil-comp">
          {cours.map((cour) => {
            if (cour.flag) {
              return (
                <button
                  key={cour.key}
                  className="but-clik"
                  value={cour.cour}
                  onClick={(e) => {
                    courchange(e.target.value);
                    remFromcouFil(e.currentTarget.value);
                    //console.log("remove");
                  }}
                >
                  {cour.cour}
                </button>
              );
            } else {
              return (
                <button
                  key={cour.key}
                  className="but-remove"
                  value={cour.cour}
                  onClick={(e) => {
                    courchange(e.target.value);
                    addtocouFil(e.currentTarget.value);
                    //console.log("add");
                  }}
                >
                  {cour.cour}
                </button>
              );
            }
          })}
        </div>
        <h2>Rate</h2>
        <div className="fil-comp">
          {rates.map((rate) => {
            if (rate.flag) {
              return (
                <button
                  key={rate.key}
                  className="but-clik"
                  value={rate.rate}
                  onClick={(e) => {
                    rateChange(rate.rate);
                    remFromratFil(rate.rate);
                    //console.log("remove");
                  }}
                >
                  {rate.rate}

                  {img}
                  {" +"}
                </button>
              );
            } else {
              return (
                <button
                  key={rate.key}
                  className="but-remove"
                  value={rate.rate}
                  onClick={(e) => {
                    rateChange(rate.rate);
                    addtoratFil(rate.rate);
                    //console.log("add");
                  }}
                >
                  {rate.rate}

                  {img}
                  {" +"}
                </button>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Fillter;
