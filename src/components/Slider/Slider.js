import "./style.css";
import Image from "next/image";
import SliderImage from "/public/img/bg.png";
import SliderImage2 from "/public/img/bg2.png";
import SliderImage3 from "/public/img/bg3.png";
import SliderImage4 from "/public/img/bg4.png";
import FlechaRight from "/public/img/icons/flecha-right2.png";
import FlechaLeft from "/public/img/icons/flecha-left2.png";

import Script from "next/script";
export default function Slider() {
  return (
    <div className="wrapper m-auto">
      <i id="left" className="punteros">
        <Image src={FlechaLeft} width={100} height={0} alt="img flecha-left" />
      </i>
      <ul className="carousel">
        <div className="slide1">
          <li className="card">
            <Image
              src={SliderImage}
              width={10000}
              heigth={0}
              alt="slider-1"></Image>
          </li>
        </div>
        <div className="slide2">
          <li className="card">
            <Image
              src={SliderImage2}
              width={10000}
              heigth={0}
              alt="slider-2"></Image>
          </li>
        </div>
        <div className="slide3">
          <li className="card">
            <Image
              src={SliderImage3}
              width={10000}
              heigth={0}
              alt="slider-3"></Image>
          </li>
        </div>
        <div className="slide4">
          <li className="card">
            <Image
              src={SliderImage4}
              width={10000}
              heigth={0}
              alt="slider-4"></Image>
          </li>
        </div>
      </ul>
      <i id="right" className="punteros">
        <Image
          src={FlechaRight}
          width={100}
          height={0}
          alt="img flecha-right"
        />
      </i>
      <Script type="text/javascript" src="script.js"></Script>
    </div>
  );
}
