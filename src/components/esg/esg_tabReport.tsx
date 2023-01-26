import ESGItemCard from "./esg_itemCard";
import esg from "../../data/esg.json";

function ESGReport() {
  return (
    <ul id="tabNewsContent6" className="list_card list_card_type2">
      <ESGItemCard
        txt_cate={esg.txt_cate[4]}
        tit_card={esg.tit_card_report[0]}
        img_name={"esg_report_thumb_1.webp"}
        txt_keyword1={"#이해관계소통"}
        txt_keyword2={"#지속가능경영"}
      />
      <ESGItemCard
        txt_cate={esg.txt_cate[4]}
        tit_card={esg.tit_card_report[1]}
        img_name={"esg_report_thumb_2.webp"}
        txt_keyword1={"#감사기구"}
        txt_keyword2={"#기업지배구조정책"}
        txt_keyword3={"#이사회"}
        txt_keyword4={"#주주"}
      />
      <ESGItemCard
        txt_cate={esg.txt_cate[4]}
        tit_card={esg.tit_card_report[2]}
        img_name={"esg_report_thumb_3.webp"}
        txt_keyword1={"#Partners with Kakao"}
        txt_keyword2={"#상생"}
      />
      <ESGItemCard
        txt_cate={esg.txt_cate[4]}
        tit_card={esg.tit_card_report[3]}
        img_name={"esg_report_thumb_4.webp"}
        txt_keyword1={"#ESG보고서"}
        txt_keyword2={"#규정&정책"}
        txt_keyword3={"#기업지배구조보고서"}
      />
    </ul>
  );
}

export default ESGReport;
