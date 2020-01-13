import React from "react";
import Slider from "react-slick";
import Recife from "../../images/recife07.jpg";
import Berlin from "../../images/berlin.jpg";
import Paris from "../../images/paris.jpg";
import Rio from "../../images/rio.jpg";
import Barcelona from "../../images/barcelona2.jpg";
import Thessaloniki from "../../images/thessaloniki2.jpg";
import Lisbon from "../../images/lisboa.jpg";
import BuenosAires from "../../images/buenos-aires.jpg";
import Roma from "../../images/roma2.jpg";
import Viena from "../../images/viena.jpg";
import Medellin from "../../images/medellin.jpg";
import Sydney from "../../images/sydney.jpg";
import { Col } from "react-bootstrap";

export default class extends React.Component {
  render() {
    const settings = {
      //className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 1,
      speed: 500,
      rows: 4,
      slidesPerRow: 2,
      autoplay: false,
      pauseOnHover: true,
      dots: true,
      adaptiveHight: true,
      useCSS: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            // slidesToScroll: 1,
            infinite: true,
            dots: true,
            autoplay: false,
            pauseOnHover: true,
            adaptiveHeight: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            //slidesToScroll: 1,
            initialSlide: 0,
            infinite: true,
            dots: true,
            autoplay: false,
            pauseOnHover: true,
            adaptiveHeight: true
          }
        },
        {
          breakpoint: 300,
          settings: {
            slidesToShow: 1,
            infinite: true,
            dots: true,
            autoplay: false,
            pauseOnHover: true,
            adaptiveHeight: true
            // slidesToScroll: 0
          }
        }
      ]
    };

    const style = {
      headerStyle: {
        fontSize: "30px"
      }
    };

    return (
      <div>
        <h2 style={style.headerStyle}> Popular MYtineraries </h2>{" "}
        <Col
          md={{
            span: 10,
            offset: 1
          }}
        >
          <Slider {...settings}>
            <div>
              <img src={Recife} alt="Recife" className="carousel-img" />
            </div>{" "}
            <div>
              <img src={Berlin} alt="Berlin" className="carousel-img" />
            </div>{" "}
            <div>
              <h3> Recife </h3>{" "}
            </div>{" "}
            <div>
              <h3> Berlin </h3>{" "}
            </div>{" "}
            <div>
              <img src={Paris} alt="Paris" className="carousel-img" />
            </div>{" "}
            <div>
              <img src={Rio} alt="Rio" className="carousel-img" />
            </div>{" "}
            <div>
              <h3> Paris </h3>{" "}
            </div>{" "}
            <div>
              <h3> Rio </h3>{" "}
            </div>{" "}
            <div>
              <img src={Barcelona} alt="Barcelona" className="carousel-img" />
            </div>{" "}
            <div>
              <img
                src={Thessaloniki}
                alt="Thessaloniki"
                className="carousel-img"
              />
            </div>{" "}
            <div>
              <h3> Barcelona </h3>{" "}
            </div>{" "}
            <div>
              <h3> Thessaloniki </h3>{" "}
            </div>{" "}
            <div>
              <img src={Lisbon} alt="Lisbon" className="carousel-img" />
            </div>{" "}
            <div>
              <img
                src={BuenosAires}
                alt="Buenos Aires"
                className="carousel-img"
              />
            </div>{" "}
            <div>
              <h3> Lisbon </h3>{" "}
            </div>{" "}
            <div>
              <h3> Buenos Aires </h3>{" "}
            </div>{" "}
            <div>
              <img src={Roma} alt="Roma" className="carousel-img" />
            </div>{" "}
            <div>
              <img src={Viena} alt="Vienna" className="carousel-img" />
            </div>{" "}
            <div>
              <h3> Roma </h3>{" "}
            </div>{" "}
            <div>
              <h3> Vienna </h3>{" "}
            </div>{" "}
            <div>
              <img src={Medellin} alt="Medellín" className="carousel-img" />
            </div>{" "}
            <div>
              <img src={Sydney} alt="Sydney" className="carousel-img" />
            </div>{" "}
            <div>
              <h3> Medellín </h3>{" "}
            </div>{" "}
            <div>
              <h3> Sydney </h3>{" "}
            </div>{" "}
          </Slider>{" "}
        </Col>{" "}
      </div>
    );
  }
}
