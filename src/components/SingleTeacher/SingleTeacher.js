import React from "react";
import "./SingleTeacher.css";

const SingleTeacher = ({ teacher }) => {
  return (
    <div className="SingleTeacher">
      <img alt="Singeimg" className="img-cart-single" src={teacher.img}></img>

      <div className="SingleTeacher-bio">
        <div>
          <h1 className="textbio">About {teacher.name}</h1>
        </div>
        <div>
          <h3 className="textbio">
            {"Hi I am " +
              teacher.name +
              " I teach " +
              teacher.course +
              " from " +
              teacher.city +
              " whit a rate of " +
              teacher.rate +
              " "}
            <img
              alt="star img"
              src="https://www.pngkit.com/png/full/1-10969_polygons-drawing-watercolor-star-icon.png"
              height={15}
              width={15}
            />
          </h3>
        </div>
        <div className="biodiv">
          <h2>about me:</h2>
          <h5 className="mybio">
            {
              " ( here some generic information about the ,its should be a file for each teacher ).......  "
            }
          </h5>
          <h5 className="mybio">
            ,Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium qui iure neque optio quas a mollitia reiciendis sint
            eius vero doloremque rerum impedit odit, velit sed reprehenderit vel
            asperiores quo! At, nihil. Pariatur mollitia aliquam reiciendis
            culpa ab voluptate,{" "}
          </h5>
          <h5 className="mybio">
            {
              "Telephone number : 05*-***-**-** ,(should be a phone file for each teacher same idea as bio)"
            }
          </h5>
          <h5 className="mybio">{"Price :" + teacher.price}</h5>
        </div>
      </div>
    </div>
  );
};

export default SingleTeacher;
