function ESGItemCard(props: any) {
  return (
    <li>
      <div className="item_card">
        <span className="wrap_cont">
          <span role={"text"} className="info_cate">
            <img
              src="/images/esg/ico_esg.webp"
              alt="아이콘"
              width={"36px"}
              height={"36px"}
              className="ico_cate"
            />
            <span className="txt_cate">{props.txt_cate}</span>
          </span>
          <span className="link_item">
            <strong className="tit_card">{props.tit_card}</strong>
            <span className="wrap_thumb">
              <img
                src={"/images/esg/" + props.img_name}
                alt="카드 썸네일"
                className="thumb_img"
              />
            </span>
          </span>
          <span role={"text"} className="info_card">
            <span className="txt_keyword">{props.txt_keyword1}</span>
            <span className="txt_keyword">{props.txt_keyword2}</span>
            <span className="txt_keyword">{props.txt_keyword3}</span>
            <span className="txt_keyword">{props.txt_keyword4}</span>
            <span className="txt_keyword">{props.txt_keyword5}</span>
          </span>
        </span>
      </div>
    </li>
  );
}

export default ESGItemCard;
