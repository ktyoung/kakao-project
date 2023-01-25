import TechItemCard from "./tech_itemCard";
import tech from "../../data/tech.json";

function TechService() {
  return (
    <ul id="tabNewsContent4" className="list_card list_card_type2">
      <TechItemCard
        txt_cate={tech.txt_cate[2]}
        tit_card={tech.tit_card_tech_service[0]}
        img_name={"tech_service_thumb_1.webp"}
        txt_keyword1={"#ai"}
        txt_keyword2={"#comprehension"}
        txt_keyword3={"#ocr"}
        txt_keyword4={"#search"}
        txt_keyword5={"#tech"}
      />
      <TechItemCard
        txt_cate={tech.txt_cate[2]}
        tit_card={tech.tit_card_tech_service[1]}
        img_name={"tech_service_thumb_2.webp"}
        txt_keyword1={"#compliance"}
        txt_keyword2={"#kakaoolive"}
        txt_keyword3={"#license"}
      />
      <TechItemCard
        txt_cate={tech.txt_cate[2]}
        tit_card={tech.tit_card_tech_service[2]}
        img_name={"tech_service_thumb_3.webp"}
        txt_keyword1={"#engineering"}
        txt_keyword2={"#opensource"}
        txt_keyword3={"#software"}
      />
      <TechItemCard
        txt_cate={tech.txt_cate[2]}
        tit_card={tech.tit_card_tech_service[3]}
        img_name={"tech_service_thumb_4.webp"}
        txt_keyword1={"#engineering"}
        txt_keyword2={"#opensource"}
        txt_keyword3={"#software"}
      />
      <TechItemCard
        txt_cate={tech.txt_cate[2]}
        tit_card={tech.tit_card_tech_service[4]}
        img_name={"tech_service_thumb_5.webp"}
        txt_keyword1={"#ai"}
        txt_keyword2={"#dl"}
        txt_keyword3={"#ml"}
        txt_keyword4={"#system"}
        txt_keyword5={"#tech"}
      />
    </ul>
  );
}

export default TechService;
