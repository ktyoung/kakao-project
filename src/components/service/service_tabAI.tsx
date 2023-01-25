import ServiceItemCard from "./service_itemCard";
import service from "../../data/service.json";

function ServiceAI() {
  return (
    <ul id="tabNewsContent8" className="list_card list_card_type2">
      <ServiceItemCard
        txt_cate={service.txt_cate[6]}
        tit_card={service.tit_card_AI_blockchain[0]}
        img_name={"service_ai_thumb_1.webp"}
        txt_keyword1={"#B2B"}
        txt_keyword2={"#기업솔루션"}
        txt_keyword3={"#카카오i클라우드"}
      />
      <ServiceItemCard
        txt_cate={service.txt_cate[6]}
        tit_card={service.tit_card_AI_blockchain[1]}
        img_name={"service_ai_thumb_2.webp"}
        txt_keyword1={"#그라운드X"}
        txt_keyword2={"#블록체인"}
        txt_keyword3={"#지갑"}
        txt_keyword4={"#클레이튼"}
        txt_keyword5={"#클립"}
      />
    </ul>
  );
}

export default ServiceAI;
