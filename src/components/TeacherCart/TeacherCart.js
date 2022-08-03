import React from "react";
import "./TeacherCart.css";

function TeacherCart({ teacher }) {
  return (
    <div className="teachercart">
      <img alt="teacher-img" className="img-cart" src={teacher.img} />
      <div className="teacher-info" key={teacher.key}>
        <h2>Name: {teacher.name}</h2>
        <h4>
          Rate:{teacher.rate}{" "}
          <img
            alt="star img"
            src="https://www.pngkit.com/png/full/1-10969_polygons-drawing-watercolor-star-icon.png"
            height={15}
            width={15}
          ></img>
        </h4>
        <h4>Age: {teacher.age}</h4>
        <h4>City: {teacher.city}</h4>
        <h4>Course: {teacher.course}</h4>
        <h3>₪ {teacher.price} for 45 min</h3>
      </div>
    </div>
  );
}

export default TeacherCart;
