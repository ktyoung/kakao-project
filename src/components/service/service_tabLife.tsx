import ServiceItemCard from "./service_itemCard";
import service from "../../data/service.json";

function ServiceLife() {
  return (
    <ul id="tabNewsContent4" className="list_card list_card_type2">
      <ServiceItemCard
        txt_cate={service.txt_cate[2]}
        tit_card={service.tit_card_lifestyle[0]}
        img_name={"service_life_thumb_1.webp"}
        txt_keyword1={"#길안내"}
        txt_keyword2={"#내비게이션"}
        txt_keyword3={"#내차관리"}
        txt_keyword4={"#모빌리티"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[2]}
        tit_card={service.tit_card_lifestyle[1]}
        img_name={"service_life_thumb_2.webp"}
        txt_keyword1={"#내비게이션"}
        txt_keyword2={"#디스플레이"}
        txt_keyword3={"#모빌리티"}
        txt_keyword4={"#스마트홈"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[2]}
        tit_card={service.tit_card_lifestyle[2]}
        img_name={"service_life_thumb_3.webp"}
        txt_keyword1={"#같지만다른은행"}
        txt_keyword2={"#은행"}
        txt_keyword3={"#인터넷전문은행"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[2]}
        tit_card={service.tit_card_lifestyle[3]}
        img_name={"service_life_thumb_4.webp"}
        txt_keyword1={"#결제"}
        txt_keyword2={"#금융"}
        txt_keyword3={"#송금"}
        txt_keyword4={"#카카오페이"}
        txt_keyword5={"#테크핀"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[2]}
        tit_card={service.tit_card_lifestyle[4]}
        img_name={"service_life_thumb_5.webp"}
        txt_keyword1={"#라이프"}
        txt_keyword2={"#뷰티"}
        txt_keyword3={"#카카오헤어샵"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[2]}
        tit_card={service.tit_card_lifestyle[5]}
        img_name={"service_life_thumb_6.webp"}
        txt_keyword1={"#maas"}
        txt_keyword2={"#모빌리티"}
        txt_keyword3={"#이동플랫폼"}
        txt_keyword4={"#카카오T"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[2]}
        tit_card={service.tit_card_lifestyle[6]}
        img_name={"service_life_thumb_7.webp"}
        txt_keyword1={"#모빌리티"}
        txt_keyword2={"#지도"}
        txt_keyword3={"#카카오맵"}
        txt_keyword4={"#카카오버스"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[2]}
        tit_card={service.tit_card_lifestyle[7]}
        img_name={"service_life_thumb_8.webp"}
        txt_keyword1={"#pc온라인게임"}
        txt_keyword2={"#게임광고"}
        txt_keyword3={"#다음게임"}
      />
    </ul>
  );
}

export default ServiceLife;
