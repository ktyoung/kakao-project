import ServiceItemCard from "./service_itemCard";
import service from "../../data/service.json";

function ServiceCommerce() {
  return (
    <ul id="tabNewsContent5" className="list_card list_card_type2">
      <ServiceItemCard
        txt_cate={service.txt_cate[3]}
        tit_card={service.tit_card_commerce[0]}
        img_name={"service_commerce_thumb_1.webp"}
        txt_keyword1={"#개인화추천"}
        txt_keyword2={"#쇼핑"}
        txt_keyword3={"#스타일"}
        txt_keyword4={"#지그재그"}
        txt_keyword5={"#패션"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[3]}
        tit_card={service.tit_card_commerce[1]}
        img_name={"service_commerce_thumb_2.webp"}
        txt_keyword1={"#b2b선물"}
        txt_keyword2={"#비즈니스선물"}
        txt_keyword3={"#선물하기"}
        txt_keyword4={"#카카오톡"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[3]}
        tit_card={service.tit_card_commerce[2]}
        img_name={"service_commerce_thumb_3.webp"}
        txt_keyword1={"#라이브커머스"}
        txt_keyword2={"#카카오쇼핑라이브"}
        txt_keyword3={"#커머스"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[3]}
        tit_card={service.tit_card_commerce[3]}
        img_name={"service_commerce_thumb_4.webp"}
        txt_keyword1={"#쇼핑"}
        txt_keyword2={"#쇼핑하우"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[3]}
        tit_card={service.tit_card_commerce[4]}
        img_name={"service_commerce_thumb_5.webp"}
        txt_keyword1={"#공동주문"}
        txt_keyword2={"#주문제작"}
        txt_keyword3={"#카카오메이커스"}
        txt_keyword4={"#커머스"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[3]}
        tit_card={service.tit_card_commerce[5]}
        img_name={"service_commerce_thumb_6.webp"}
        txt_keyword1={"#카카오톡쇼핑하기"}
        txt_keyword2={"#커머스"}
        txt_keyword3={"#톡딜"}
        txt_keyword4={"#톡스토어"}
      />
    </ul>
  );
}

export default ServiceCommerce;
