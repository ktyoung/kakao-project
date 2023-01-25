import TechItemCard from "./tech_itemCard";
import tech from "../../data/tech.json";

function TechContents() {
  return (
    <ul id="tabNewsContent5" className="list_card list_card_type2">
      <TechItemCard
        txt_cate={tech.txt_cate[3]}
        tit_card={tech.tit_card_tech_contents[0]}
        img_name={"tech_contents_thumb_1.webp"}
        txt_keyword1={"#ai"}
        txt_keyword2={"#kakaokrew"}
        txt_keyword3={"#tech"}
      />
      <TechItemCard
        txt_cate={tech.txt_cate[3]}
        tit_card={tech.tit_card_tech_contents[1]}
        img_name={"tech_contents_thumb_2.webp"}
        txt_keyword1={"#ai"}
        txt_keyword2={"#brain"}
        txt_keyword3={"#cloud"}
        txt_keyword4={"#paper"}
        txt_keyword5={"#tech"}
      />
      <TechItemCard
        txt_cate={tech.txt_cate[3]}
        tit_card={tech.tit_card_tech_contents[2]}
        img_name={"tech_contents_thumb_3.webp"}
        txt_keyword1={"#mobility"}
        txt_keyword2={"#reoirt"}
        txt_keyword3={"#story"}
        txt_keyword4={"#tech"}
      />
    </ul>
  );
}

export default TechContents;
