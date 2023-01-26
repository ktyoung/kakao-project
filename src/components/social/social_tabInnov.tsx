import SocialItemCard from "./social_itemCard";
import social from "../../data/social.json";

function SocialInnov() {
  return (
    <ul id="tabNewsContent2" className="list_card list_card_type2">
      <SocialItemCard
        txt_cate={social.txt_cate[0]}
        tit_card={social.tit_card_innov[0]}
        img_name={"social_innov_thumb_1.webp"}
        txt_keyword1={"#ESG"}
        txt_keyword2={"#제주위드카카오"}
        txt_keyword3={"#제주임팩트챌린지"}
      />
      <SocialItemCard
        txt_cate={social.txt_cate[0]}
        tit_card={social.tit_card_innov[1]}
        img_name={"social_innov_thumb_2.webp"}
        txt_keyword1={"#ESG"}
        txt_keyword2={"#제주위드카카오"}
        txt_keyword3={"#제주임팩트챌린지"}
      />
      <SocialItemCard
        txt_cate={social.txt_cate[0]}
        tit_card={social.tit_card_innov[2]}
        img_name={"social_innov_thumb_3.webp"}
        txt_keyword1={"#사회혁신가"}
        txt_keyword2={"#소셜임팩트"}
        txt_keyword3={"#카카오임팩트"}
      />
      <SocialItemCard
        txt_cate={social.txt_cate[0]}
        tit_card={social.tit_card_innov[3]}
        img_name={"social_innov_thumb_4.webp"}
        txt_keyword1={"#기부"}
        txt_keyword2={"#사회혁신"}
        txt_keyword3={"#소셜임팩트"}
        txt_keyword4={"#자원봉사"}
      />
      <SocialItemCard
        txt_cate={social.txt_cate[0]}
        tit_card={social.tit_card_innov[4]}
        img_name={"social_innov_thumb_5.webp"}
        txt_keyword1={"#사회혁신"}
        txt_keyword2={"#소셜임팩트"}
        txt_keyword3={"#인터넷하는돌하르방"}
      />
      <SocialItemCard
        txt_cate={social.txt_cate[0]}
        tit_card={social.tit_card_innov[5]}
        img_name={"social_innov_thumb_6.webp"}
        txt_keyword1={"#기부"}
        txt_keyword2={"#사회변화"}
        txt_keyword3={"#소셜임팩트"}
        txt_keyword4={"#카카오같이가치"}
      />
      <SocialItemCard
        txt_cate={social.txt_cate[0]}
        tit_card={social.tit_card_innov[6]}
        img_name={"social_innov_thumb_7.webp"}
        txt_keyword1={"#사회혁신"}
        txt_keyword2={"#소셜임팩트"}
        txt_keyword3={"#인터넷하는돌하르방"}
      />
      <SocialItemCard
        txt_cate={social.txt_cate[0]}
        tit_card={social.tit_card_innov[7]}
        img_name={"social_innov_thumb_8.webp"}
        txt_keyword1={"#사회혁신"}
        txt_keyword2={"#소셜임팩트"}
        txt_keyword3={"#인터넷하는돌하르방"}
      />
    </ul>
  );
}

export default SocialInnov;
