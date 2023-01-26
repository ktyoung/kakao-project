import SocialItemCard from "./social_itemCard";
import social from "../../data/social.json";

function SocialPartner() {
  return (
    <ul id="tabNewsContent4" className="list_card list_card_type2">
      <SocialItemCard
        txt_cate={social.txt_cate[2]}
        tit_card={social.tit_card_partner[0]}
        img_name={"social_partner_thumb_1.webp"}
        txt_keyword1={"#소셜임팩트"}
        txt_keyword2={"#제주위드카카오"}
      />
      <SocialItemCard
        txt_cate={social.txt_cate[2]}
        tit_card={social.tit_card_partner[1]}
        img_name={"social_partner_thumb_2.webp"}
        txt_keyword1={"#소셜임팩트"}
        txt_keyword2={"#제주위드카카오"}
        txt_keyword3={"#카카오클래스"}
      />
      <SocialItemCard
        txt_cate={social.txt_cate[2]}
        tit_card={social.tit_card_partner[2]}
        img_name={"social_partner_thumb_3.webp"}
        txt_keyword1={"#소셜임팩트"}
        txt_keyword2={"#제주위드카카오"}
      />
      <SocialItemCard
        txt_cate={social.txt_cate[2]}
        tit_card={social.tit_card_partner[3]}
        img_name={"social_partner_thumb_4.webp"}
        txt_keyword1={"#소셜임팩트"}
        txt_keyword2={"#제주위드카카오"}
      />
    </ul>
  );
}

export default SocialPartner;
