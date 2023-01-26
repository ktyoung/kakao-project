import ESGItemCard from "./esg_itemCard";
import esg from "../../data/esg.json";

function ESGSocial() {
  return (
    <ul id="tabNewsContent4" className="list_card list_card_type2">
      <ESGItemCard
        txt_cate={esg.txt_cate[2]}
        tit_card={esg.tit_card_social[0]}
        img_name={"esg_social_thumb_1.webp"}
        txt_keyword1={"#다양성"}
        txt_keyword2={"#성장지원"}
        txt_keyword3={"#인권경영"}
        txt_keyword4={"#임직원"}
      />
      <ESGItemCard
        txt_cate={esg.txt_cate[2]}
        tit_card={esg.tit_card_social[1]}
        img_name={"esg_social_thumb_2.webp"}
        txt_keyword1={"#디지털책임"}
        txt_keyword2={"#지속가능한환경"}
        txt_keyword3={"#파트너성장"}
      />
      <ESGItemCard
        txt_cate={esg.txt_cate[2]}
        tit_card={esg.tit_card_social[2]}
        img_name={"esg_social_thumb_3.webp"}
        txt_keyword1={"#개인정보보호"}
        txt_keyword2={"#기업의디지털책임"}
        txt_keyword3={"#정보보안"}
      />
      <ESGItemCard
        txt_cate={esg.txt_cate[2]}
        tit_card={esg.tit_card_social[3]}
        img_name={"esg_social_thumb_4.webp"}
        txt_keyword1={"#사회문제해결"}
        txt_keyword2={"#소셜임팩트"}
        txt_keyword3={"#커뮤니티"}
      />
    </ul>
  );
}

export default ESGSocial;
