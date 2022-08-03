import React, { useEffect, useState } from "react";
import "./Main.css";
import Fillter from "../Fillter/Fillter";
import TeacherCart from "../TeacherCart/TeacherCart";
import { NavLink } from "react-router-dom";
const templateSort = [
  { val: "Select sort", flage: true, key: 1 },
  { val: "Price(decrease)", flage: false, key: 2 },
  { val: "Price(increase)", flage: false, key: 3 },
  { val: "Rate(decrease)", flage: false, key: 4 },
  { val: "Rate(increase)", flage: false, key: 5 },
];
function Main({ teachers }) {
  // ================================teacherList====================data, setData
  const [data, setData] = useState(teachers);

  //=========City=============================================citys, setCitys,citychange
  const [citys, setCitys] = useState([
    { city: "Ashkelon", flag: false, key: 1 },
    { city: "Ashdod", flag: false, key: 2 },
    { city: "Tel-aviv", flag: false, key: 3 },
    { city: "Hulon", flag: false, key: 4 },
    { city: "Sderot", flag: false, key: 5 },
  ]);
  const citychange = (city) => {
    setCitys(
      citys.map((item) =>
        item.city === city ? { ...item, flag: !item.flag } : item
      )
    );
  };
  //=========Cours=============================================cours, setCours,courchange
  const [cours, setCours] = useState([
    { cour: "Economics", flag: false, key: 1 },
    { cour: "English", flag: false, key: 2 },
    { cour: "Computer", flag: false, key: 3 },
    { cour: "Mathematics", flag: false, key: 4 },
    { cour: "Physics", flag: false, key: 5 },
    { cour: "Geography", flag: false, key: 6 },
    { cour: "Art", flag: false, key: 7 },
    { cour: "Music", flag: false, key: 8 },
    { cour: "Chemistry", flag: false, key: 9 },
    { cour: "Biology", flag: false, key: 10 },
    { cour: "Statistics", flag: false, key: 11 },
  ]);
  const courchange = (cour) => {
    setCours(
      cours.map((item) =>
        item.cour === cour ? { ...item, flag: !item.flag } : item
      )
    );
  };

  //=========Rates=============================================rates, setRates,rateChange

  const [rates, setRates] = useState([
    { rate: "2", flag: false, key: 1 },
    { rate: "3", flag: false, key: 2 },
    { rate: "4", flag: false, key: 3 },
  ]);
  const rateChange = (rate) => {
    setRates(
      rates.map((item) =>
        item.rate === rate ? { ...item, flag: !item.flag } : item
      )
    );
  };
  //================citFilarr======================== citFil,setcitFil,addtocitFil,remFromcitFil
  const [citFil, setcitFil] = useState("");
  const addtocitFil = (val) => {
    setcitFil([...citFil, val]);
  };
  const remFromcitFil = (val) => {
    const newarr = citFil.filter((remo) => {
      return val !== remo;
    });
    setcitFil(newarr);
  };
  //================couFilarr======================== couFil, setcouFil,addtocouFil,remFromcouFil
  const [couFil, setcouFil] = useState("");
  const addtocouFil = (val) => {
    setcouFil([...couFil, val]);
  };
  const [sortby, setSort] = useState(templateSort);
  const remFromcouFil = (val) => {
    const newarr = couFil.filter((remo) => {
      return val !== remo;
    });
    setcouFil(newarr);
  };
  //================ratFilarr======================== ratFil,setratFil,addtoratFil,remFromratFil
  const [ratFil, setratFil] = useState("");
  const addtoratFil = (val) => {
    setratFil([...ratFil, val]);
  };
  const remFromratFil = (val) => {
    const newarr = ratFil.filter((remo) => {
      return val !== remo;
    });
    setratFil(newarr);
  };
  //========================useEffect===================================
  useEffect(() => {
    if (couFil.length === 0 && ratFil.length === 0 && citFil.length === 0) {
      setData(teachers);
      setSort([...templateSort]);
    } else {
      const newArrCits = teachers.filter((teac) => {
        return citFil.includes(teac.city);
      });
      const newArrCourses = teachers.filter((teac) => {
        return couFil.includes(teac.course);
      });
      const newArrRate = teachers.filter((teac) => {
        return teac.rate >= Math.min(...ratFil);
      });
      const finalArray = teachers.filter((teac) => {
        if (couFil.length !== 0 && ratFil.length !== 0 && citFil.length === 0) {
          return newArrCourses.includes(teac) && newArrRate.includes(teac);
        }
        if (couFil.length !== 0 && ratFil.length === 0 && citFil.length !== 0) {
          return newArrCourses.includes(teac) && newArrCits.includes(teac);
        }
        if (couFil.length === 0 && ratFil.length !== 0 && citFil.length !== 0) {
          return newArrRate.includes(teac) && newArrCits.includes(teac);
        }
        if (couFil.length !== 0 && ratFil.length === 0 && citFil.length === 0) {
          return newArrCourses.includes(teac);
        }
        if (couFil.length === 0 && ratFil.length !== 0 && citFil.length === 0) {
          return newArrRate.includes(teac);
        }
        if (couFil.length === 0 && ratFil.length === 0 && citFil.length !== 0) {
          return newArrCits.includes(teac);
        } else {
          return (
            newArrCourses.includes(teac) &&
            newArrRate.includes(teac) &&
            newArrCits.includes(teac)
          );
        }
      });
      changeSort("Select sort");
      setData(finalArray);
      setSort([...templateSort]);
    }
  }, [couFil, ratFil, citFil]);

  //===========================Sortby======================

  const changeSort = (value) => {
    const newSort = sortby.filter((item) => {
      if (value === item.val) {
        item.flage = true;
        return item;
      } else {
        item.flage = false;
        return item;
      }
    });
    setSort(newSort);
  };
  useEffect(() => {
    if (sortby[1].flage === true) {
      const newarr = [...data].sort((a, b) => {
        return b.price - a.price;
      });
      setData(newarr);
    }
    if (sortby[2].flage === true) {
      const newarr = [...data].sort((a, b) => {
        return a.price - b.price;
      });
      setData(newarr);
    }
    if (sortby[3].flage === true) {
      const newarr = [...data].sort((a, b) => {
        return b.rate - a.rate;
      });
      setData(newarr);
    }
    if (sortby[4].flage === true) {
      const newarr = [...data].sort((a, b) => {
        return a.rate - b.rate;
      });
      setData(newarr);
    }
  }, [sortby]);

  //====================GenericRouter=======================================

  return (
    <div className="main">
      <div className="main-sub-div">
        <div className="main-fillter">
          <Fillter
            citys={citys}
            cours={cours}
            rates={rates}
            rateChange={rateChange}
            citychange={citychange}
            courchange={courchange}
            addtocitFil={addtocitFil}
            remFromcitFil={remFromcitFil}
            addtocouFil={addtocouFil}
            remFromcouFil={remFromcouFil}
            addtoratFil={addtoratFil}
            remFromratFil={remFromratFil}
            sortby={sortby}
            changeSort={changeSort}
          />
        </div>
        <div className="main-teacher">
          {data.map((teacher) => (
            <div className="TeacherCart-div" key={teacher.key}>
              <NavLink
                to={`/Teacher/${teacher.name}`}
                state={{ keyUser: teacher }}
                key={teacher.key}
              >
                <TeacherCart key={teacher.key} teacher={teacher} />
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
