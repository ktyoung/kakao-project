import TechItemCard from "./tech_itemCard";
import tech from "../../data/tech.json";

function TechEvent() {
  return (
    <ul id="tabNewsContent6" className="list_card list_card_type2">
      <TechItemCard
        txt_cate={tech.txt_cate[4]}
        tit_card={tech.tit_card_tech_event[0]}
        img_name={"tech_event_thumb_1.webp"}
        txt_keyword1={"#ai"}
        txt_keyword2={"#al"}
        txt_keyword3={"#competition"}
        txt_keyword4={"#ml"}
        txt_keyword5={"#tech"}
      />
    </ul>
  );
}

export default TechEvent;
