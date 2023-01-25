import TechItemCard from "./tech_itemCard";
import tech from "../../data/tech.json";

function KakaoTech() {
  return (
    <ul id="tabNewsContent2" className="list_card list_card_type2">
      <TechItemCard
        txt_cate={tech.txt_cate[0]}
        tit_card={tech.tit_card_kakao_tech[0]}
        img_name={"tech_kakao_tech_thumb_1.webp"}
        txt_keyword1={"#blog"}
        txt_keyword2={"#engineering"}
        txt_keyword3={"#service"}
        txt_keyword4={"#software"}
      />
    </ul>
  );
}

export default KakaoTech;
