import React, { useMemo } from "react";
import Slider from "react-slick";
import PagenationIcon from "../svg/pagenation_ico";
import CarouselCont from "./history_carouselCont";
import history from "./.././../data/history.json";

function PrevArrow(props: any) {
  return (
    <button
      className="slick-arrow slick-prev slick-disabled"
      type="button"
      data-role={"none"}
      style={{ display: "block" }}
      onClick={() => {
        props.onClick();
        document
          .querySelectorAll(".slick-prev")[0]
          .classList.add("slick-disabled");
        document
          .querySelectorAll(".slick-next")[0]
          .classList.remove("slick-disabled");
      }}
    >
      <PagenationIcon className={"ico_pagenation"} />
    </button>
  );
}

function NextArrow(props: any) {
  return (
    <button
      className="slick-arrow slick-next"
      type="button"
      data-role={"none"}
      style={{ display: "block" }}
      onClick={() => {
        props.onClick();
        document
          .querySelectorAll(".slick-next")[0]
          .classList.add("slick-disabled");
        document
          .querySelectorAll(".slick-prev")[0]
          .classList.remove("slick-disabled");
      }}
    >
      <PagenationIcon className={"ico_pagenation"} />
    </button>
  );
}

function Carousel() {
  const settings = {
    dots: false,
    infinite: false,
    swipe: false,
    draggable: false,
    arrow: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    variableWidth: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow onClick={() => {}} />,
  };

  return (
    <>
      <Slider {...settings}>
        <CarouselCont
          tit_card={history.tit_card[0]}
          img_name={history.img_name[0]}
          txt_keyword0={history.txt_keyword[0]}
          txt_keyword1={history.txt_keyword[1]}
          txt_keyword2={history.txt_keyword[2]}
        />
        <CarouselCont
          tit_card={history.tit_card[1]}
          img_name={history.img_name[1]}
          txt_keyword0={history.txt_keyword[3]}
          txt_keyword1={history.txt_keyword[4]}
          txt_keyword2={history.txt_keyword[5]}
        />
        <CarouselCont
          tit_card={history.tit_card[2]}
          img_name={history.img_name[2]}
          txt_keyword0={history.txt_keyword[6]}
          txt_keyword1={history.txt_keyword[7]}
          txt_keyword2={history.txt_keyword[8]}
          txt_keyword3={history.txt_keyword[9]}
        />
        <CarouselCont
          tit_card={history.tit_card[3]}
          img_name={history.img_name[3]}
          txt_keyword0={history.txt_keyword[10]}
          txt_keyword1={history.txt_keyword[11]}
          txt_keyword2={history.txt_keyword[12]}
        />
        <CarouselCont
          tit_card={history.tit_card[4]}
          img_name={history.img_name[4]}
          txt_keyword0={history.txt_keyword[13]}
          txt_keyword1={history.txt_keyword[14]}
          txt_keyword2={history.txt_keyword[15]}
        />
        <CarouselCont
          tit_card={history.tit_card[5]}
          img_name={history.img_name[5]}
          txt_keyword0={history.txt_keyword[16]}
          txt_keyword1={history.txt_keyword[17]}
          txt_keyword2={history.txt_keyword[18]}
        />
      </Slider>
    </>
  );
}

export default Carousel;
