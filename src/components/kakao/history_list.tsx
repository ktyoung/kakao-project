import React from "react";

function HistoryList(props: any) {
  return (
    <li className={props.className}>
      <span className="link_history">
        <div role={"text"}>
          <span className="wrap_thumb">
            <img
              src={"/images/history/" + props.img_name}
              alt="히스토리 썸네일"
              className="thumb_img"
            />
          </span>
          <div className="wrap_cont">
            <span className="txt_date">{props.txt_date}</span>
            <strong className="tit_item">{props.tit_item}</strong>
            <span className="tag_item">
              <span className="txt_tag">{props.txt_tag1}</span>
              <span className="txt_tag">{props.txt_tag2}</span>
              <span className="txt_tag">{props.txt_tag3}</span>
              <span className="txt_tag">{props.txt_tag4}</span>
              <span className="txt_tag">{props.txt_tag5}</span>
            </span>
          </div>
        </div>
      </span>
    </li>
  );
}

export default HistoryList;
