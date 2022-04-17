import React from "react";
import Corousel from "react-bootstrap/Carousel";

import si1 from "../Images/slider-1.jpg";
import si2 from "../Images/slider-2.jpg";
import si3 from "../Images/slider-3.jpg";
import si4 from "../Images/slider-4.jpg";

export default function Slider() {
  return (
    <Corousel>
      <Corousel.Item>
        <img className="d-block w-100" src={si1} alt="First slide" />
      </Corousel.Item>
      <Corousel.Item>
        <img className="d-block w-100" src={si2} alt="Second slide" />
      </Corousel.Item>
      <Corousel.Item>
        <img className="d-block w-100" src={si3} alt="Third slide" />
      </Corousel.Item>
      <Corousel.Item>
        <img className="d-block w-100" src={si4} alt="Fourth slide" />
      </Corousel.Item>
    </Corousel>
  );
}
