import ServiceItemCard from "./service_itemCard";
import service from "../../data/service.json";

function ServiceKaKaoTalk() {
  return (
    <ul id="tabNewsContent2" className="list_card list_card_type2">
      <ServiceItemCard
        txt_cate={service.txt_cate[0]}
        tit_card={service.tit_card_kakaotalk[0]}
        img_name={"service_kakaotalk_thumb_1.webp"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[0]}
        tit_card={service.tit_card_kakaotalk[1]}
        img_name={"service_kakaotalk_thumb_2.webp"}
        txt_keyword1={"#보이스룸"}
        txt_keyword2={"#오픈채팅"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[0]}
        tit_card={service.tit_card_kakaotalk[2]}
        img_name={"service_kakaotalk_thumb_3.webp"}
        txt_keyword1={"#일정관리"}
        txt_keyword2={"#친구초대"}
        txt_keyword3={"#카톡알림"}
        txt_keyword4={"#캘린더"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[0]}
        tit_card={service.tit_card_kakaotalk[3]}
        img_name={"service_kakaotalk_thumb_4.webp"}
        txt_keyword1={"#비즈니스"}
        txt_keyword2={"#채널"}
        txt_keyword3={"#카카오톡채널"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[0]}
        tit_card={service.tit_card_kakaotalk[4]}
        img_name={"service_kakaotalk_thumb_5.webp"}
        txt_keyword1={"#이모티콘"}
        txt_keyword2={"#이모티콘플러스"}
        txt_keyword3={"#카카오이모티콘"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[0]}
        tit_card={service.tit_card_kakaotalk[5]}
        img_name={"service_kakaotalk_thumb_6.webp"}
        txt_keyword1={"#o2o"}
        txt_keyword2={"#배달"}
        txt_keyword3={"#주문"}
        txt_keyword4={"#카카오톡주문하기"}
        txt_keyword5={"#픽업"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[0]}
        tit_card={service.tit_card_kakaotalk[6]}
        img_name={"service_kakaotalk_thumb_7.webp"}
        txt_keyword1={"#카카오메일"}
        txt_keyword2={"#커뮤니케이션"}
        txt_keyword3={"#톡메일"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[0]}
        tit_card={service.tit_card_kakaotalk[7]}
        img_name={"service_kakaotalk_thumb_8.webp"}
        txt_keyword1={"#간편로그인"}
        txt_keyword2={"#전자증명서"}
        txt_keyword3={"#카카오인증서"}
        txt_keyword4={"#톡명함"}
      />
    </ul>
  );
}

export default ServiceKaKaoTalk;
