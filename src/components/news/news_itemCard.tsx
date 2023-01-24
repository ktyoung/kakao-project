function NewsItemCard(props: any) {
  return (
    <li>
      <div className="item_card">
        <span className="wrap_cont">
          <span role={"text"} className="info_cate">
            <img
              src="/images/news/ico_news.webp"
              alt="아이콘"
              width={"36px"}
              height={"36px"}
              className="ico_cate"
            />
            <span className="txt_cate">{props.txt_cate}</span>
            {props.txt_cate === "보도자료" ? (
              <span className="txt_date">
                <span className="screen_out">발행일</span>
                {props.txt_date}
              </span>
            ) : null}
          </span>
          <span className="link_item">
            <strong className="tit_card">{props.tit_card}</strong>
            <span className="wrap_thumb">
              <img
                src={"/images/news/" + props.img_name}
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

export default NewsItemCard;
