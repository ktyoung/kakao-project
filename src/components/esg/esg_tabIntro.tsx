import ESGItemCard from "./esg_itemCard";
import esg from "../../data/esg.json";

function ESGIntro() {
  return (
    <ul id="tabNewsContent2" className="list_card list_card_type2">
      <ESGItemCard
        txt_cate={esg.txt_cate[0]}
        tit_card={esg.tit_card_intro[0]}
        img_name={"esg_intro_thumb_1.webp"}
        txt_keyword1={"#ESG 위원회"}
        txt_keyword2={"#이사회"}
        txt_keyword3={"#지속가능경영"}
      />
      <ESGItemCard
        txt_cate={esg.txt_cate[0]}
        tit_card={esg.tit_card_intro[1]}
        img_name={"esg_intro_thumb_2.webp"}
        txt_keyword1={"#2021년 실적"}
        txt_keyword2={"#사회적책임"}
        txt_keyword3={"#카카오ceo"}
      />
      <ESGItemCard
        txt_cate={esg.txt_cate[0]}
        tit_card={esg.tit_card_intro[2]}
        img_name={"esg_intro_thumb_3.webp"}
        txt_keyword1={"#2021"}
        txt_keyword2={"#2022"}
        txt_keyword3={"#주요성과"}
      />
      <ESGItemCard
        txt_cate={esg.txt_cate[0]}
        tit_card={esg.tit_card_intro[3]}
        img_name={"esg_intro_thumb_4.webp"}
        txt_keyword1={"#디지털책임"}
        txt_keyword2={"#사회문제해결"}
        txt_keyword3={"#파트너성장"}
        txt_keyword4={"#환경"}
      />
      <ESGItemCard
        txt_cate={esg.txt_cate[0]}
        tit_card={esg.tit_card_intro[4]}
        img_name={"esg_intro_thumb_5.webp"}
        txt_keyword1={"#ai"}
        txt_keyword2={"#블록체인"}
        txt_keyword3={"#이동기술"}
        txt_keyword4={"#클라우드"}
      />
      <ESGItemCard
        txt_cate={esg.txt_cate[0]}
        tit_card={esg.tit_card_intro[5]}
        img_name={"esg_intro_thumb_6.webp"}
        txt_keyword1={"#디지털생태계"}
        txt_keyword2={"#상생기금"}
        txt_keyword3={"#포용성"}
      />
      <ESGItemCard
        txt_cate={esg.txt_cate[0]}
        tit_card={esg.tit_card_intro[6]}
        img_name={"esg_intro_thumb_7.webp"}
        txt_keyword1={"#DJSI"}
        txt_keyword2={"#KCGS"}
        txt_keyword3={"#MSCI"}
      />
    </ul>
  );
}

export default ESGIntro;
