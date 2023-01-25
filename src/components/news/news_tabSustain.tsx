import NewsItemCard from "./news_itemCard";
import news from "../../data/news.json";

function TabSustain() {
  return (
    <ul id="tabNewsContent5" className="list_card list_card_type2">
      <NewsItemCard
        txt_cate={news.txt_cate[3]}
        tit_card={news.tit_card_sustain[0]}
        img_name={"news_sustain_thumb_1.webp"}
        txt_keyword1={"#기술윤리 전담 조직"}
        txt_keyword2={"#기술윤리위원회"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[3]}
        tit_card={news.tit_card_sustain[1]}
        img_name={"news_sustain_thumb_2.webp"}
        txt_keyword1={"#아동청소년"}
        txt_keyword2={"#digital for kids"}
        txt_keyword3={"#유니세프"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[3]}
        tit_card={news.tit_card_sustain[2]}
        img_name={"news_sustain_thumb_3.webp"}
        txt_keyword1={"#oecd"}
        txt_keyword2={"#d4sme"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[3]}
        tit_card={news.tit_card_sustain[3]}
        img_name={"news_sustain_thumb_4.webp"}
        txt_keyword1={"#세이프봇"}
        txt_keyword2={"#증오발언"}
        txt_keyword3={"#혐오표현"}
        txt_keyword4={"#뉴스댓글"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[3]}
        tit_card={news.tit_card_sustain[4]}
        img_name={"news_sustain_thumb_5.webp"}
        txt_keyword1={"#Kr-IGF"}
        txt_keyword2={"#한국 인터넷거버넌스포럼"}
        txt_keyword3={"#리터러시"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[3]}
        tit_card={news.tit_card_sustain[5]}
        img_name={"news_sustain_thumb_6.webp"}
        txt_keyword1={"#고용노동부"}
        txt_keyword2={"#일자리으뜸기업"}
        txt_keyword3={"#카카오공동체"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[3]}
        tit_card={news.tit_card_sustain[6]}
        img_name={"news_sustain_thumb_7.webp"}
        txt_keyword1={"#APEC"}
        txt_keyword2={"#백신예약"}
        txt_keyword3={"#코로나19"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[3]}
        tit_card={news.tit_card_sustain[7]}
        img_name={"news_sustain_thumb_8.webp"}
        txt_keyword1={"#노르딕토크코리아"}
        txt_keyword2={"#카카오의약속과책임"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[3]}
        tit_card={news.tit_card_sustain[8]}
        img_name={"news_sustain_thumb_9.webp"}
        txt_keyword1={"#RightsCon"}
        txt_keyword2={"#qr체크인"}
        txt_keyword3={"#공적마스크"}
        txt_keyword4={"#백신예약"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[3]}
        tit_card={news.tit_card_sustain[9]}
        img_name={"news_sustain_thumb_10.webp"}
        txt_keyword1={"#연구반"}
        txt_keyword2={"#자율규제"}
        txt_keyword3={"#증오발언"}
        txt_keyword4={"#혐오표현"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[3]}
        tit_card={news.tit_card_sustain[10]}
        img_name={"news_sustain_thumb_11.webp"}
        txt_keyword1={"#d4sme"}
        txt_keyword2={"#oecd"}
        txt_keyword3={"#인증"}
        txt_keyword4={"#카카오톡"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[3]}
        tit_card={news.tit_card_sustain[11]}
        img_name={"news_sustain_thumb_12.webp"}
        txt_keyword1={"#녹서"}
        txt_keyword2={"#증오발언"}
        txt_keyword3={"#혐오표현"}
      />
    </ul>
  );
}

export default TabSustain;
