import ServiceItemCard from "./service_itemCard";
import service from "../../data/service.json";

function ServiceCommunication() {
  return (
    <ul id="tabNewsContent3" className="list_card list_card_type2">
      <ServiceItemCard
        txt_cate={service.txt_cate[1]}
        tit_card={service.tit_card_communication[0]}
        img_name={"service_communication_thumb_1.webp"}
        txt_keyword1={"#블로그"}
        txt_keyword2={"#수익"}
        txt_keyword3={"#커뮤니케이션"}
        txt_keyword4={"#콘텐츠"}
        txt_keyword5={"#티스토리"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[1]}
        tit_card={service.tit_card_communication[1]}
        img_name={"service_communication_thumb_2.webp"}
        txt_keyword1={"#검색"}
        txt_keyword2={"#뉴스"}
        txt_keyword3={"#다음앱"}
        txt_keyword4={"#콘텐츠"}
        txt_keyword5={"#포털"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[1]}
        tit_card={service.tit_card_communication[2]}
        img_name={"service_communication_thumb_3.webp"}
        txt_keyword1={"#글쓰기"}
        txt_keyword2={"#브런치"}
        txt_keyword3={"#브런치북"}
        txt_keyword4={"#작가"}
        txt_keyword5={"#창작"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[1]}
        tit_card={service.tit_card_communication[3]}
        img_name={"service_communication_thumb_4.webp"}
        txt_keyword1={"#sns"}
        txt_keyword2={"#사진"}
        txt_keyword3={"#스토리채널"}
        txt_keyword4={"#일상"}
        txt_keyword5={"#카카오스토리"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[1]}
        tit_card={service.tit_card_communication[4]}
        img_name={"service_communication_thumb_5.webp"}
        txt_keyword1={"#공식팬카페"}
        txt_keyword2={"#다음카페"}
        txt_keyword3={"#실시간인기글"}
        txt_keyword4={"#커뮤니티"}
      />
    </ul>
  );
}

export default ServiceCommunication;
