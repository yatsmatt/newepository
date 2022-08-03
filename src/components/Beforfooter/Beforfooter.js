import React from "react";
import "./Beforfooter.css";
function Beforfooter({ contactUsRef }) {
  return (
    <div className="Beforfooter" ref={contactUsRef}>
      <div className="Beforfooter-sub-div">
        <div className="Beforfooter-contact">
          <div className="info-windows">
            <div>
              {" "}
              <h1>contact us</h1>
            </div>
            <div>
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
              necessitatibus placeat debitis, distinctio eius fugiat sit porro
              nam iure tempore harum unde ratione accusamus ad architecto! Quam
              nam maiores reiciendis.
            </div>
          </div>
        </div>
        <div className="Beforfooter-aboutus">
          <div className="info-windows">
            <div>
              {" "}
              <h1>about us</h1>
            </div>
            <div>
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
              necessitatibus placeat debitis, distinctio eius fugiat sit porro
              nam iure tempore harum unde ratione accusamus ad architecto! Quam
              nam maiores reiciendis.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beforfooter;
