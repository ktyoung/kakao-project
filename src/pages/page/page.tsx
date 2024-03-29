import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import HalfItemCard from "../../components/main/main_halfItemCard";
import ItemCard from "../../components/main/main_itemCard";
import ArrIcon from "../../components/svg/arr_ico";
import data from "../../data/data.json";
import CommonHooks from "../../hooks/common-hooks";

function Page() {
  CommonHooks();

  let date = new Date();
  let weeks = new Array(
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  );
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let today = date.getDay();
  let weekday = weeks[today];

  useEffect(() => {
    document
      .querySelectorAll(".tit_main")[0]
      .classList.remove("tit_date" + (day - 1));
    document.querySelectorAll(".tit_main")[0].classList.add("tit_date" + day);
  });

  return (
    <>
      <Header />
      <main className="doc-main">
        <section id="mainContent" className="inner-main">
          <h2 className="screen_out">홈 본문</h2>
          <section className="content-feature" style={{ visibility: "hidden" }}>
            <div className="inner_path">
              <h3 className="screen_out">현재 페이지 위치</h3>
              <div className="wrap_tit">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/date/date-png/" +
                    day +
                    ".png"
                  }
                  alt="아이콘 이미지"
                />
                <strong className="tit_path">오늘의 카카오</strong>
              </div>
            </div>
          </section>
          <div className="main-content">
            <article className="content-article">
              <h3 role={"text"} className="tit_main tit_home ">
                <em className="emph_tit">오늘의 카카오</em>
                <span className="txt_tit">
                  {month}월 {day}일 {weekday} 소식입니다
                </span>
              </h3>
              <div className="cont_home">
                <div className="section_home">
                  <div className="wrap_item">
                    <div
                      sticky-offset="{top: 181}"
                      sticky-side="top"
                      className="inner_item"
                    >
                      <ItemCard
                        addClass={""}
                        iconName={"ico_cate.webp"}
                        txt_cate={data.txt_cate[0]}
                        txt_date={"2023.01.12"}
                        title={data.tit_card[0]}
                        thumb_src={"thumb_1"}
                        keyword_1={data.text_keyword[0]}
                        keyword_2={data.text_keyword[1]}
                        keyword_3={data.text_keyword[2]}
                        isNew={true}
                      />
                    </div>
                  </div>
                  <div className="wrap_item">
                    <div
                      transition-duration=".5s"
                      item-selector=".item_card"
                      className="inner_item"
                      style={{ position: "relative", height: "1104px" }}
                    >
                      <ItemCard
                        addClass={""}
                        iconName={"ico_cate.webp"}
                        txt_cate={data.txt_cate[1]}
                        title={data.tit_card[1]}
                        thumb_src={"thumb_2"}
                        keyword_1={data.text_keyword[3]}
                        keyword_2={data.text_keyword[14]}
                        keyword_3={data.text_keyword[15]}
                        keyword_4={data.text_keyword[16]}
                        keyword_5={data.text_keyword[17]}
                        isNew={true}
                      />
                      <HalfItemCard
                        addClass={"item_stock"}
                        style={{
                          position: "absolute",
                          left: "333px",
                          top: "0px",
                        }}
                        iconName={"ico_stock.png"}
                        txt_cate={data.txt_cate[2]}
                      />
                      <ItemCard
                        addClass={""}
                        style={{
                          position: "absolute",
                          left: "333px",
                          top: "192px",
                        }}
                        iconName={"ico_cate.webp"}
                        txt_cate={data.txt_cate[0]}
                        title={data.tit_card[2]}
                        txt_date={"2023.01.11"}
                        thumb_src={"thumb_3"}
                        keyword_1={data.text_keyword[4]}
                        keyword_2={data.text_keyword[5]}
                      />
                      <ItemCard
                        addClass={""}
                        style={{
                          position: "absolute",
                          left: "0px",
                          top: "420px",
                        }}
                        iconName={"ico_cate.webp"}
                        txt_cate={data.txt_cate[0]}
                        title={data.tit_card[3]}
                        txt_date={"2023.01.02"}
                        thumb_src={"thumb_4"}
                        keyword_1={data.text_keyword[6]}
                        keyword_2={data.text_keyword[7]}
                      />
                      <HalfItemCard
                        addClass={""}
                        style={{
                          position: "absolute",
                          left: "333px",
                          top: "648px",
                        }}
                        iconName={"ico_responsible.png"}
                        txt_cate={data.txt_cate[3]}
                        title={data.tit_card[4]}
                        keyword_1={data.text_keyword[8]}
                        keyword_2={data.text_keyword[9]}
                        keyword_3={data.text_keyword[10]}
                      />
                      <HalfItemCard
                        addClass={""}
                        style={{
                          position: "absolute",
                          left: "0px",
                          top: "876px",
                        }}
                        iconName={"ico_responsible.png"}
                        txt_cate={data.txt_cate[3]}
                        title={data.tit_card[5]}
                        keyword_1={data.text_keyword[11]}
                        keyword_2={data.text_keyword[12]}
                      />
                    </div>
                  </div>
                </div>
                <div className="wrap_culture">
                  <strong className="tit_culture tit_pc">
                    기술과 사람으로 더 나은 세상을 만듭니다.
                  </strong>
                  <Link to="/kakaoCulture" className="link_culture">
                    카카오문화 바로가기
                    <ArrIcon className={"ico_arr"} />
                  </Link>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/bg_home_culture_210325.png"
                    }
                    alt="카카오 문화 이미지"
                    className="thumb_culture thumb_culture_l"
                  />
                </div>
                <div className="wrap_sns">
                  <strong className="tit_sns">
                    카카오의 다양한 소식을 구독해보세요.
                  </strong>
                  <ul className="inner_sns">
                    <li>
                      <a
                        href="https://pf.kakao.com/_ZRQBh"
                        target={"_blank"}
                        className="link_channel"
                      >
                        카카오 채널 바로가기
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/@Kakaobrandmedia"
                        target={"_blank"}
                        className="link_youtube"
                      >
                        유튜브 바로가기
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/kakao.today"
                        target={"_blank"}
                        className="link_insta"
                      >
                        인스타그램 바로가기
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/kakao.brandmedia"
                        target={"_blank"}
                        className="link_facebook"
                      >
                        페이스북 바로가기
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/kakaocorp"
                        target={"_blank"}
                        className="link_linkedin"
                      >
                        링크드인 바로가기
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="section_home section_home2">
                  <div className="wrap_item">
                    <div
                      sticky-offset="{top: 181}"
                      sticky-side="top"
                      className="inner_item"
                    >
                      <ItemCard
                        addClass={""}
                        iconName={"ico_cate.webp"}
                        txt_cate={data.txt_cate[4]}
                        title={data.tit_card[6]}
                        thumb_src={"thumb_6"}
                        keyword_1={data.text_keyword[13]}
                        keyword_2={data.text_keyword[14]}
                        keyword_3={data.text_keyword[15]}
                        keyword_4={data.text_keyword[16]}
                        keyword_5={data.text_keyword[17]}
                      />
                    </div>
                  </div>
                  <div className="wrap_item">
                    <div
                      transition-duration=".5s"
                      item-selector=".item_card"
                      className="inner_item"
                      style={{ position: "relative", height: "648px" }}
                    >
                      <HalfItemCard
                        addClass={"item_customer"}
                        style={{
                          position: "absolute",
                          left: "0px",
                          top: "0px",
                        }}
                      />
                      <ItemCard
                        addClass={""}
                        style={{
                          position: "absolute",
                          left: "333px",
                          top: "0px",
                        }}
                        iconName={"ico_cate.webp"}
                        txt_cate={data.txt_cate[0]}
                        title={data.tit_card[8]}
                        txt_date={"2023.01.09"}
                        thumb_src={"thumb_5"}
                        keyword_1={data.text_keyword[7]}
                      />
                      <ItemCard
                        addClass={""}
                        style={{
                          position: "absolute",
                          left: "0px",
                          top: "192px",
                        }}
                        iconName={"ico_cate.webp"}
                        txt_cate={data.txt_cate[1]}
                        title={data.tit_card[9]}
                        thumb_src={"thumb_2"}
                        keyword_1={data.text_keyword[3]}
                        keyword_2={data.text_keyword[14]}
                      />
                      <HalfItemCard
                        addClass={""}
                        style={{
                          position: "absolute",
                          left: "333px",
                          top: "420px",
                        }}
                        iconName={"ico_privacy.png"}
                        txt_cate={data.txt_cate[6]}
                        title={data.tit_card[10]}
                        keyword_1={data.text_keyword[18]}
                      />
                    </div>
                  </div>
                </div>
                <div className="wrap_etc">
                  <div className="item_etc">
                    <Link to="/service" className="link_etc link_service">
                      <strong className="tit_item">
                        사람과 기술로 일상을 돕는 카카오 서비스
                      </strong>
                      <span className="txt_item">
                        서비스 바로가기
                        <ArrIcon className={"ico_arr"} />
                      </span>
                    </Link>
                  </div>
                  <div className="item_etc">
                    <a
                      href="//careers.kakao.com/index"
                      target={"_blank"}
                      className="link_etc link_recruit"
                    >
                      <strong className="tit_item">
                        세상만사에 관심이 많다면, 당신은 이미 카카오 크루
                      </strong>
                      <span className="txt_item">
                        인재영입 바로가기
                        <ArrIcon className={"ico_arr"} />
                      </span>
                    </a>
                  </div>
                </div>
                <span
                  className="link_top"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  <ArrIcon className={"ico_top"} />
                </span>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Page;
