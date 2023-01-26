function NewsCarouselCont(props: any) {
  return (
    <div style={{ width: "100%", display: "inline-block" }}>
      <div className="item_card wrap_item">
        <span className="wrap_cont">
          <span role={"text"} className="info_cate">
            <img
              src={process.env.PUBLIC_URL + "/images/news/ico_news.webp"}
              alt="아이콘"
              width={"36px"}
              height={"36px"}
              className={"ico_cate"}
            />
            <span className="txt_cate">카카오 나우</span>
          </span>
          <span className="link_item">
            <strong className="tit_card">{props.tit_card}</strong>
            <span className="wrap_thumb">
              <img
                src={process.env.PUBLIC_URL + "/images/news/" + props.img_name}
                alt="썸네일 이미지"
                className="thumb_img"
              />
            </span>
          </span>
          <span role={"text"} className="info_card">
            <span className="txt_keyword">{props.txt_keyword0}</span>
            <span className="txt_keyword">{props.txt_keyword1}</span>
            <span className="txt_keyword">{props.txt_keyword2}</span>
            <span className="txt_keyword">{props.txt_keyword3}</span>
            <span className="txt_keyword">{props.txt_keyword4}</span>
          </span>
        </span>
      </div>
    </div>
  );
}

export default NewsCarouselCont;
