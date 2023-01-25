import NewsItemCard from "./news_itemCard";
import news from "../../data/news.json";

function TabNow() {
  return (
    <ul id="tabNewsContent3" className="list_card list_card_type2">
      <NewsItemCard
        txt_cate={news.txt_cate[1]}
        tit_card={news.tit_card_now[0]}
        img_name={"news_now_thumb_1.webp"}
        txt_keyword1={"#메이커스"}
        txt_keyword2={"#이모티콘"}
        txt_keyword3={"#카카오"}
        txt_keyword4={"#쿠폰팩"}
        txt_keyword5={"#톡서랍"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[1]}
        tit_card={news.tit_card_now[1]}
        img_name={"news_now_thumb_2.webp"}
        txt_keyword1={"#월간카카오"}
        txt_keyword2={"#유저인터뷰"}
        txt_keyword3={"#톡터뷰"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[1]}
        tit_card={news.tit_card_now[2]}
        img_name={"news_now_thumb_3.webp"}
        txt_keyword1={"#월간카카오"}
        txt_keyword2={"#유저인터뷰"}
        txt_keyword3={"#톡터뷰"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[1]}
        tit_card={news.tit_card_now[3]}
        img_name={"news_now_thumb_4.webp"}
        txt_keyword1={"#그룹페이스톡"}
        txt_keyword2={"#카카오"}
        txt_keyword3={"#카카오톡"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[1]}
        tit_card={news.tit_card_now[4]}
        img_name={"news_now_thumb_5.webp"}
        txt_keyword1={"#카카오나우"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[1]}
        tit_card={news.tit_card_now[5]}
        img_name={"news_now_thumb_6.webp"}
        txt_keyword1={"#10주년"}
        txt_keyword2={"#kakao"}
        txt_keyword3={"#김범수의장"}
        txt_keyword4={"#라이언"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[1]}
        tit_card={news.tit_card_now[6]}
        img_name={"news_now_thumb_7.webp"}
        txt_keyword1={"#메이슨"}
        txt_keyword2={"#션"}
        txt_keyword3={"#카카오"}
        txt_keyword4={"#카카오ceo"}
      />
    </ul>
  );
}

export default TabNow;
