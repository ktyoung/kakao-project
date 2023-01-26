import ESGItemCard from "./esg_itemCard";
import esg from "../../data/esg.json";

function ESGGovernance() {
  return (
    <ul id="tabNewsContent5" className="list_card list_card_type2">
      <ESGItemCard
        txt_cate={esg.txt_cate[3]}
        tit_card={esg.tit_card_governance[0]}
        img_name={"esg_governance_thumb_1.webp"}
        txt_keyword1={"#ESG 위원회"}
        txt_keyword2={"#이사회"}
        txt_keyword3={"#지배구조"}
      />
      <ESGItemCard
        txt_cate={esg.txt_cate[3]}
        tit_card={esg.tit_card_governance[1]}
        img_name={"esg_governance_thumb_2.webp"}
        txt_keyword1={"#리스크관리체계"}
        txt_keyword2={"#잠재리스크"}
        txt_keyword3={"#통합리스크"}
      />
      <ESGItemCard
        txt_cate={esg.txt_cate[3]}
        tit_card={esg.tit_card_governance[2]}
        img_name={"esg_governance_thumb_3.webp"}
        txt_keyword1={"#사이버윤리센터"}
        txt_keyword2={"#상임윤리위원회"}
        txt_keyword3={"#윤리교육"}
      />
    </ul>
  );
}

export default ESGGovernance;
