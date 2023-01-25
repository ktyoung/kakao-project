import TechItemCard from "./tech_itemCard";
import tech from "../../data/tech.json";

function IfKakao() {
  return (
    <ul id="tabNewsContent7" className="list_card list_card_type2">
      <TechItemCard
        txt_cate={tech.txt_cate[5]}
        tit_card={tech.tit_card_ifkakao[0]}
        img_name={"tech_ifkakao_thumb_1.webp"}
        txt_keyword1={"#기술로만드는더나은세상"}
      />
      <TechItemCard
        txt_cate={tech.txt_cate[5]}
        tit_card={tech.tit_card_ifkakao[1]}
        img_name={"tech_ifkakao_thumb_2.webp"}
        txt_keyword1={"#함께나아가는더나은세상"}
      />
      <TechItemCard
        txt_cate={tech.txt_cate[5]}
        tit_card={tech.tit_card_ifkakao[2]}
        img_name={"tech_ifkakao_thumb_3.webp"}
        txt_keyword1={"#연결을넘어"}
        txt_keyword2={"#의미있는관계로"}
      />
      <TechItemCard
        txt_cate={tech.txt_cate[5]}
        tit_card={tech.tit_card_ifkakao[3]}
        img_name={"tech_ifkakao_thumb_4.webp"}
        txt_keyword1={"#관심많은"}
        txt_keyword2={"#세상만사"}
        txt_keyword3={"#카카오개발자"}
      />
      <TechItemCard
        txt_cate={tech.txt_cate[5]}
        tit_card={tech.tit_card_ifkakao[4]}
        img_name={"tech_ifkakao_thumb_5.webp"}
        txt_keyword1={"#ai"}
        txt_keyword2={"#세상은전부개발거리"}
        txt_keyword3={"#인공지능"}
      />
    </ul>
  );
}

export default IfKakao;
