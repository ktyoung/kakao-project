import ServiceItemCard from "./service_itemCard";
import service from "../../data/service.json";

function ServiceEntertainment() {
  return (
    <ul id="tabNewsContent6" className="list_card list_card_type2">
      <ServiceItemCard
        txt_cate={service.txt_cate[4]}
        tit_card={service.tit_card_entertainment[0]}
        img_name={"service_entertainment_thumb_1.webp"}
        txt_keyword1={"#엔터테인먼트"}
        txt_keyword2={"#웹툰"}
        txt_keyword3={"#카카오웹툰"}
        txt_keyword4={"#컨텐츠"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[4]}
        tit_card={service.tit_card_entertainment[1]}
        img_name={"service_entertainment_thumb_2.webp"}
        txt_keyword1={"#기다리면무료"}
        txt_keyword2={"#엔터테인먼트"}
        txt_keyword3={"#웹소설"}
        txt_keyword4={"#웹툰"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[4]}
        tit_card={service.tit_card_entertainment[2]}
        img_name={"service_entertainment_thumb_3.webp"}
        txt_keyword1={"#드라마"}
        txt_keyword2={"#라이브"}
        txt_keyword3={"#예능"}
        txt_keyword4={"#오리지널"}
        txt_keyword5={"#카카오TV"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[4]}
        tit_card={service.tit_card_entertainment[3]}
        img_name={"service_entertainment_thumb_4.webp"}
        txt_keyword1={"#만화"}
        txt_keyword2={"#소설"}
        txt_keyword3={"#웹툰"}
        txt_keyword4={"#콘텐츠"}
        txt_keyword5={"#픽코마"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[4]}
        tit_card={service.tit_card_entertainment[4]}
        img_name={"service_entertainment_thumb_5.webp"}
        txt_keyword1={"#k팝"}
        txt_keyword2={"#mma"}
        txt_keyword3={"#멜론"}
        txt_keyword4={"#멜론차트"}
        txt_keyword5={"#뮤직앱"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[4]}
        tit_card={service.tit_card_entertainment[5]}
        img_name={"service_entertainment_thumb_6.webp"}
        txt_keyword1={"#니니즈"}
        txt_keyword2={"#니니툰즈"}
        txt_keyword3={"#죠르디"}
        txt_keyword4={"#죠르디24시"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[4]}
        tit_card={service.tit_card_entertainment[6]}
        img_name={"service_entertainment_thumb_7.webp"}
        txt_keyword1={"#라이언"}
        txt_keyword2={"#리틀카카오프렌즈"}
        txt_keyword3={"#어피치"}
        txt_keyword4={"#춘식이"}
      />
    </ul>
  );
}

export default ServiceEntertainment;
