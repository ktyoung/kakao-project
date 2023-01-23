import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PagenationIcon from "../svg/pagenation_ico";

function SamplePrevArrow(props: any) {
  return (
    <button
      type="button"
      aria-label="이전 카드 목록"
      className="slick-arrow slick-prev slick-disabled"
      disabled={true}
      onClick={props.onClick}
    >
      <PagenationIcon className={"ico_pagenation"} />
    </button>
  );
}

function SampleNextArrow(props: any) {
  return (
    <button
      type="button"
      aria-label="다음 카드 목록"
      className="slick-arrow slick-next"
      disabled={true}
      onClick={props.onClick}
    >
      <PagenationIcon className={"ico_pagenation"} />
    </button>
  );
}

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </>
  );
}

export default Carousel;
