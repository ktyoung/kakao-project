import SocialItemCard from "./social_itemCard";
import social from "../../data/social.json";

function SocialITedu() {
  return (
    <ul id="tabNewsContent3" className="list_card list_card_type2">
      <SocialItemCard
        txt_cate={social.txt_cate[1]}
        tit_card={social.tit_card_ITedu[0]}
        img_name={"social_edu_thumb_1.webp"}
        txt_keyword1={"#IT교육"}
        txt_keyword2={"#디지털시민교육"}
        txt_keyword3={"#소셜임팩트"}
      />
      <SocialItemCard
        txt_cate={social.txt_cate[1]}
        tit_card={social.tit_card_ITedu[1]}
        img_name={"social_edu_thumb_2.webp"}
        txt_keyword1={"#IT교육"}
        txt_keyword2={"#소셜임팩트"}
        txt_keyword3={"#제주위드카카오"}
        txt_keyword4={"#클라우드"}
      />
      <SocialItemCard
        txt_cate={social.txt_cate[1]}
        tit_card={social.tit_card_ITedu[2]}
        img_name={"social_edu_thumb_3.webp"}
        txt_keyword1={"#IT교육"}
        txt_keyword2={"#소셜임팩트"}
        txt_keyword3={"#제주위드카카오"}
      />
      <SocialItemCard
        txt_cate={social.txt_cate[1]}
        tit_card={social.tit_card_ITedu[3]}
        img_name={"social_edu_thumb_4.webp"}
        txt_keyword1={"#IT교육"}
        txt_keyword2={"#소셜임팩트"}
        txt_keyword3={"#제주위드카카오"}
      />
    </ul>
  );
}

export default SocialITedu;
