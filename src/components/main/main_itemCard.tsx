import React from "react";

function ItemCard(props: any) {
  return (
    <div className={"item_card " + props.addClass} style={props.style}>
      <span className="wrap_cont">
        <span role={"text"} className="info_cate">
          <img
            src={process.env.PUBLIC_URL + "/images/" + props.iconName}
            alt="아이콘"
            width={"36"}
            height={"36"}
            className="ico_cate"
          />
          <span className="txt_cate">{props.txt_cate}</span>
          {props.isNew == true ? <span className="dot_new"></span> : null}

          <span className="txt_date">
            <span className="screen_out">발행일</span>
            {props.txt_date}
          </span>
        </span>
        <span className="item_text">
          <strong className="tit_card">{props.title}</strong>
          <div className="wrap_thumb">
            <img
              src={
                process.env.PUBLIC_URL + "/images/" + props.thumb_src + ".webp"
              }
              alt="썸네일 이미지"
              className="thumb_img"
            />
          </div>
        </span>
        <span role={"text"} className="info_card">
          <span className="txt_keyword">{props.keyword_1}</span>
          <span className="txt_keyword">{props.keyword_2}</span>
          <span className="txt_keyword">{props.keyword_3}</span>
          <span className="txt_keyword">{props.keyword_4}</span>
          <span className="txt_keyword">{props.keyword_5}</span>
        </span>
      </span>
    </div>
  );
}

export default ItemCard;
