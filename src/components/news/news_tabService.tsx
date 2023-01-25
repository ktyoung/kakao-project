import NewsItemCard from "./news_itemCard";
import news from "../../data/news.json";

function TabService() {
  return (
    <ul id="tabNewsContent6" className="list_card list_card_type2">
      <NewsItemCard
        txt_cate={news.txt_cate[4]}
        tit_card={news.tit_card_service[0]}
        img_name={"news_service_thumb_1.webp"}
        txt_keyword1={"#1015협의체"}
        txt_keyword2={"#이모티콘"}
        txt_keyword3={"#카카오"}
        txt_keyword4={"#쿠폰팩"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[4]}
        tit_card={news.tit_card_service[1]}
        img_name={"news_service_thumb_2.webp"}
        txt_keyword1={"#1015협의체"}
        txt_keyword2={"#이모티콘"}
        txt_keyword3={"#카카오"}
        txt_keyword4={"#쿠폰팩"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[4]}
        tit_card={news.tit_card_service[2]}
        img_name={"news_service_thumb_3.webp"}
        txt_keyword1={"#카카오"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[4]}
        tit_card={news.tit_card_service[3]}
        img_name={"news_service_thumb_4.webp"}
        txt_keyword1={"#카카오"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[4]}
        tit_card={news.tit_card_service[4]}
        img_name={"news_service_thumb_5.webp"}
        txt_keyword1={"#카카오"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[4]}
        tit_card={news.tit_card_service[5]}
        img_name={"news_service_thumb_6.webp"}
        txt_keyword1={"#카카오"}
      />
    </ul>
  );
}

export default TabService;
