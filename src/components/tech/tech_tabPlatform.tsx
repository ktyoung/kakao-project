import TechItemCard from "./tech_itemCard";
import tech from "../../data/tech.json";

function TechPlatform() {
  return (
    <ul id="tabNewsContent3" className="list_card list_card_type2">
      <TechItemCard
        txt_cate={tech.txt_cate[1]}
        tit_card={tech.tit_card_tech_platform[0]}
        img_name={"tech_platform_thumb_1.webp"}
        txt_keyword1={"#ai"}
        txt_keyword2={"#engineering"}
        txt_keyword3={"#sdk"}
        txt_keyword4={"#software"}
        txt_keyword5={"#tech"}
      />
      <TechItemCard
        txt_cate={tech.txt_cate[1]}
        tit_card={tech.tit_card_tech_platform[1]}
        img_name={"tech_platform_thumb_2.webp"}
        txt_keyword1={"#ai"}
        txt_keyword2={"#tech"}
        txt_keyword3={"#techplatform"}
      />
      <TechItemCard
        txt_cate={tech.txt_cate[1]}
        tit_card={tech.tit_card_tech_platform[2]}
        img_name={"tech_platform_thumb_3.webp"}
        txt_keyword1={"#blockchain"}
        txt_keyword2={"#groundx"}
        txt_keyword3={"#tech"}
      />
    </ul>
  );
}

export default TechPlatform;
