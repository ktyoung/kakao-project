import ServiceItemCard from "./service_itemCard";
import service from "../../data/service.json";

function ServiceSocial() {
  return (
    <ul id="tabNewsContent9" className="list_card list_card_type2">
      <ServiceItemCard
        txt_cate={service.txt_cate[7]}
        tit_card={service.tit_card_socal_impact[0]}
        img_name={"service_social_thumb_1.webp"}
        txt_keyword1={"#기부"}
        txt_keyword2={"#마음챙김"}
        txt_keyword3={"#사회변화"}
        txt_keyword4={"#소셜임팩트"}
      />
    </ul>
  );
}

export default ServiceSocial;
