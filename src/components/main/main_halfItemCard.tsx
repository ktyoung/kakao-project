import React from "react";

function HalfItemCard(props: any) {
  return (
    <div
      className={"item_card card_half " + props.addClass}
      style={props.style}
    >
      {props.addClass == "item_stock" && (
        <Stock iconName={props.iconName} txt_cate={props.txt_cate} />
      )}
      {props.addClass == "item_customer" && <Customer />}
      {props.addClass == "" && (
        <Half
          iconName={props.iconName}
          tit_card={props.title}
          txt_cate={props.txt_cate}
          keyword_1={props.keyword_1}
          keyword_2={props.keyword_2}
          keyword_3={props.keyword_3}
        />
      )}
    </div>
  );
}

function Stock(props: any) {
  let today = new Date();
  let year = today.getFullYear();
  let month = ("0" + (today.getMonth() + 1)).slice(-2);
  let day = ("0" + today.getDate()).slice(-2);
  let hours = today.getHours() < 10 ? "0" + today.getHours() : today.getHours();
  let minutes =
    today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
  let ampm = today.getHours() >= 12 ? "PM" : "AM";

  return (
    <span className="wrap_cont">
      <div role={"text"}>
        <span className="info_cate">
          <img
            src={process.env.PUBLIC_URL + "/images/" + props.iconName}
            alt="아이콘"
            width={"36px"}
            height={"36px"}
            className="ico_cate"
          />
          <span className="txt_cate">{props.txt_cate}</span>
        </span>
        <span className="screen_out">카카오 주가정보</span>
        <strong className="tit_card">
          <span className="num_tit">62,400</span>
          <span className="num_info down">
            <span className="screen_out">전일대비</span>
            <span className="info_arr">하락</span>
            2100
          </span>
        </strong>
        <span className="info_card">
          {year + "." + month + "." + day + " " + hours + ":" + minutes + ampm}
        </span>
      </div>
    </span>
  );
}

function Half(props: any) {
  return (
    <span className="wrap_cont">
      <div role={"text"}>
        <span className="info_cate">
          <img
            src={process.env.PUBLIC_URL + "/images/" + props.iconName}
            alt="약속과 책임 아이콘"
            width={"36px"}
            height={"36px"}
            className="ico_cate"
          />
          <span className="txt_cate">{props.txt_cate}</span>
        </span>
        <strong className="tit_card">{props.tit_card}</strong>
        <span className="info_card">
          <span className="txt_keyword">{props.keyword_1}</span>
          <span className="txt_keyword">{props.keyword_2}</span>
          <span className="txt_keyword">{props.keyword_3}</span>
        </span>
      </div>
    </span>
  );
}

function Customer(props: any) {
  return (
    <div className="wrap_cont">
      <div role={"text"}>
        <span className="info_cate">
          <img
            src={process.env.PUBLIC_URL + "/images/ico_customer.png"}
            alt=""
            width={"36"}
            height={"36"}
            className="ico_cate"
          />
          <span className="txt_cate">고객센터</span>
        </span>
        <strong className="tit_card">어떤 서비스를 도와드릴까요?</strong>
      </div>
      <ul className="list_cs">
        <li>
          <a href="//cs.kakao.com/" target={"_blank"} className="link_cs">
            카카오
          </a>
        </li>
        <li>
          <a href="//cs.daum.net/" target={"_blank"} className="link_cs">
            다음
          </a>
        </li>
        <li>
          <a
            href="//faqs2.melon.com/customer/index.htm"
            target={"_blank"}
            className="link_cs"
          >
            멜론
          </a>
        </li>
      </ul>
    </div>
  );
}
export default HalfItemCard;
