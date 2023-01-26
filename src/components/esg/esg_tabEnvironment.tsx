import ESGItemCard from "./esg_itemCard";
import esg from "../../data/esg.json";

function ESGEnvironment() {
  return (
    <ul id="tabNewsContent3" className="list_card list_card_type2">
      <ESGItemCard
        txt_cate={esg.txt_cate[1]}
        tit_card={esg.tit_card_environment[0]}
        img_name={"esg_env_thumb_1.webp"}
        txt_keyword1={"#지속가능경영"}
        txt_keyword2={"#친환경"}
        txt_keyword3={"#환경경영시스템인증"}
      />
      <ESGItemCard
        txt_cate={esg.txt_cate[1]}
        tit_card={esg.tit_card_environment[1]}
        img_name={"esg_env_thumb_2.webp"}
        txt_keyword1={"#기후변화"}
        txt_keyword2={"#넷제로"}
        txt_keyword3={"#액티브그린이니셔티브"}
      />
      <ESGItemCard
        txt_cate={esg.txt_cate[1]}
        tit_card={esg.tit_card_environment[2]}
        img_name={"esg_env_thumb_3.webp"}
        txt_keyword1={"#데이터센터"}
        txt_keyword2={"#에너지효율"}
        txt_keyword3={"#친환경"}
      />
      <ESGItemCard
        txt_cate={esg.txt_cate[1]}
        tit_card={esg.tit_card_environment[3]}
        img_name={"esg_env_thumb_4.webp"}
        txt_keyword1={"#그린디지털"}
        txt_keyword2={"#서비스"}
        txt_keyword3={"#환경캠페인"}
      />
    </ul>
  );
}

export default ESGEnvironment;
