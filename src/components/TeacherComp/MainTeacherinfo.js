import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import "./MainTeacherinfo.css";
import TeacherCart from "../TeacherCart/TeacherCart";
import SingleTeacher from "../SingleTeacher/SingleTeacher";

function MainTeacherinfo({ teachers }) {
  const location = useLocation();
  // const params = useParams();
  const Mainteacher = location.state.keyUser; //this is the main selected

  const arrayCityTeatchers = teachers.filter((teacher) => {
    return (
      Mainteacher.city.toUpperCase() === teacher.city.toUpperCase() &&
      Mainteacher.key !== teacher.key
    );
  }); // array of Teatchers from the same city
  const arrayCourseTeatchers = teachers.filter((teacher) => {
    return (
      Mainteacher.course.toUpperCase() === teacher.course.toUpperCase() &&
      Mainteacher.key !== teacher.key
    );
  }); // array of Teatchers from the same course

  return (
    <div className="MainTeacherinfo">
      <div className="bio">
        <SingleTeacher key={Mainteacher.key} teacher={Mainteacher} />
      </div>
      <h1 className="textbefor">
        You may also be interested in... teachers from the same city
      </h1>
      <div className="similar">
        {arrayCityTeatchers.map((teacher) => (
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
      <h1 className="textbefor">
        You may also be interested in... teachers from the same course
      </h1>
      <div className="similar">
        {arrayCourseTeatchers.map((teacher) => (
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
  );
}

export default MainTeacherinfo;
