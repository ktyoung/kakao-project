import ServiceItemCard from "./service_itemCard";
import service from "../../data/service.json";

function ServiceBusiness() {
  return (
    <ul id="tabNewsContent7" className="list_card list_card_type2">
      <ServiceItemCard
        txt_cate={service.txt_cate[5]}
        tit_card={service.tit_card_business[0]}
        img_name={"service_business_thumb_1.webp"}
        txt_keyword1={"#AI솔루션"}
        txt_keyword2={"#B2B"}
        txt_keyword3={"#비즈니스"}
        txt_keyword4={"#인공지능"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[5]}
        tit_card={service.tit_card_business[1]}
        img_name={"service_business_thumb_2.webp"}
        txt_keyword1={"#ai"}
        txt_keyword2={"#비즈니스"}
        txt_keyword3={"#언택트"}
        txt_keyword4={"#업무메신저"}
        txt_keyword5={"#카카오워크"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[5]}
        tit_card={service.tit_card_business[2]}
        img_name={"service_business_thumb_3.webp"}
        txt_keyword1={"#기업문화"}
        txt_keyword2={"#비즈니스"}
        txt_keyword3={"#아지트"}
        txt_keyword4={"#업무플랫폼"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[5]}
        tit_card={service.tit_card_business[3]}
        img_name={"service_business_thumb_4.webp"}
        txt_keyword1={"#비즈도구"}
        txt_keyword2={"#카카오광고"}
        txt_keyword3={"#카카오비즈니스"}
      />
    </ul>
  );
}

export default ServiceBusiness;
