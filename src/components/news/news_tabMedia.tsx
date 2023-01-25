import NewsItemCard from "./news_itemCard";
import news from "../../data/news.json";

function TabMedia() {
  return (
    <ul id="tabNewsContent4" className="list_card list_card_type2">
      <NewsItemCard
        txt_cate={news.txt_cate[2]}
        tit_card={news.tit_card_media[0]}
        img_name={"news_media_thumb_1.webp"}
        txt_keyword1={"#메타버스"}
        txt_keyword2={"#미디어행사"}
        txt_keyword3={"#유니버스"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[2]}
        tit_card={news.tit_card_media[1]}
        img_name={"news_media_thumb_1.webp"}
        txt_keyword1={"#미디어행사"}
        txt_keyword2={"#상생"}
        txt_keyword3={"#글로벌"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[2]}
        tit_card={news.tit_card_media[2]}
        img_name={"news_media_thumb_1.webp"}
        txt_keyword1={"#미디어행사"}
        txt_keyword2={"#if kakao"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[2]}
        tit_card={news.tit_card_media[3]}
        img_name={"news_media_thumb_1.webp"}
        txt_keyword1={"#카카오 ai"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[2]}
        tit_card={news.tit_card_media[4]}
        img_name={"news_media_thumb_1.webp"}
        txt_keyword1={"#카카오 ai"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[2]}
        tit_card={news.tit_card_media[5]}
        img_name={"news_media_thumb_1.webp"}
        txt_keyword1={"#카카오 ai"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[2]}
        tit_card={news.tit_card_media[6]}
        img_name={"news_media_thumb_1.webp"}
        txt_keyword1={"#카카오 ai"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[2]}
        tit_card={news.tit_card_media[7]}
        img_name={"news_media_thumb_1.webp"}
        txt_keyword1={"#카카오 ai"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[2]}
        tit_card={news.tit_card_media[8]}
        img_name={"news_media_thumb_1.webp"}
        txt_keyword1={"#카카오 ai"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[2]}
        tit_card={news.tit_card_media[9]}
        img_name={"news_media_thumb_1.webp"}
        txt_keyword1={"#카카오 ai"}
      />
      <NewsItemCard
        txt_cate={news.txt_cate[2]}
        tit_card={news.tit_card_media[10]}
        img_name={"news_media_thumb_1.webp"}
        txt_keyword1={"#t500"}
      />
    </ul>
  );
}

export default TabMedia;
