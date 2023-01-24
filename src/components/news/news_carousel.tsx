import Slider from "react-slick";
import CarouselCont from "./news_carouselCont";

function NewsCarousel() {
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
  };

  return (
    <>
      <Slider {...settings}>
        <CarouselCont
          tit_card={"끊김 없는 일상을 위하여 \n 전 국민에게 전하는 카카오 마음"}
          img_name={"news_thumb_1.webp"}
          txt_keyword0={"#메이커스"}
          txt_keyword1={"#이모티콘"}
          txt_keyword2={"#카카오"}
          txt_keyword3={"#쿠폰팩"}
          txt_keyword4={"#톡서랍"}
        />
      </Slider>
    </>
  );
}

export default NewsCarousel;
