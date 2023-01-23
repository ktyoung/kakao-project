import React from "react";
import OutlinkCircleIcon from "../../components/svg/outlink_circle_ico";

function ListSubsidiary(props: any) {
  return (
    <li>
      <div className="cont_item">
        <strong role={"heading"} className="tit_item">
          {props.tit_item}
        </strong>
        <span className="txt_item">{props.txt_item}</span>
        <p className="desc_item">{props.desc_item}</p>
        {props.tit_item === "카카오" && (
          <div className="wrap_logo">
            <img
              src={"/images/subsidiary/kakao.png"}
              alt="로고"
              className="img_logo"
            />
          </div>
        )}
        {props.tit_item !== "카카오" && props.tit_item !== "카카오스페이스" && (
          <a href={props.outlink_url} target="_blank" className="wrap_logo">
            <span role={"text"}>
              <img
                src={"/images/subsidiary/" + props.logo_name}
                alt="로고"
                className="img_logo"
              />
              <span className="screen_out">홈페이지 바로가기</span>
              <OutlinkCircleIcon className={"ico_outlink_circle"} />
            </span>
          </a>
        )}
        {props.tit_item === "카카오스페이스" && (
          <div className="wrap_logo">
            <img
              src={"/images/subsidiary/kakaospace.png"}
              alt="로고"
              className="img_logo"
            />
          </div>
        )}
      </div>
    </li>
  );
}

export default ListSubsidiary;
