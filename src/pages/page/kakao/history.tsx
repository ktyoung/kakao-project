import React, { useEffect, useState } from "react";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import Carousel from "../../../components/kakao/history_carousel";
import HistoryList from "../../../components/kakao/history_list";
import ArrIcon from "../../../components/svg/arr_ico";
import CommonHooks from "../../../hooks/common-hooks";
import historyList from "../../../data/history_list.json";

function History() {
  let [clickCount, setClickCount] = useState(0);
  useEffect(() => {
    document
      .querySelectorAll(".btn_more")[0]
      .addEventListener("click", function () {
        setClickCount(clickCount++);
        if (clickCount == 1) {
          for (let i = 0; i < document.querySelectorAll(".hide").length; i++) {
            document.querySelectorAll(".hide")[i].classList.remove("hide");
          }
        } else {
          document.querySelectorAll(".btn_more")[0].classList.add("deleted");
        }
      });
  });
  CommonHooks();
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
                  src="/images/history/ico_history.webp"
                  alt="아이콘 이미지"
                />
                <strong className="tit_path">히스토리</strong>
              </div>
            </div>
          </section>
          <div className="main-content">
            <article className="content-article cont_culture">
              <h3 role={"text"} className="tit_main tit_history">
                <em className="emph_tit">히스토리</em>
                <span className="txt_tit">더 나은 세상을 만드는 카카오</span>
              </h3>
              <div className="feature_card">
                <Carousel />
              </div>
              {/* <div className="feature_card feature_mo"></div> */}
              <section className="section_history">
                <h4 className="tit_section">연도별 히스토리</h4>
                <div className="opt_comm">
                  <div className="selected_item">
                    <button className="btn_opt">
                      <span className="screen_out">조회기간,</span>
                      <span>
                        모든 연도 <span className="screen_out">년도</span>
                      </span>
                      <span className="screen_out">, 변경</span>
                    </button>
                  </div>
                  <strong className="screen_out">선택 항목 목록</strong>
                  <ul className="list_opt">
                    <li>
                      <button type="button" className="btn_select">
                        모든 연도
                      </button>
                    </li>
                    <li>
                      <button type="button" className="btn_select">
                        2023 <span className="screen_out">년도</span>
                      </button>
                    </li>
                  </ul>
                </div>
                <ul className="list_history">
                  <HistoryList
                    className={""}
                    img_name={historyList.img_name[0]}
                    txt_date={"2023년 01월"}
                    tit_item={historyList.tit_item[0]}
                    txt_tag1={"#KOGPT"}
                    txt_tag2={"#인공지능작가"}
                    txt_tag3={"#카카오브레인"}
                  />
                  <HistoryList
                    className={""}
                    img_name={historyList.img_name[1]}
                    txt_date={"2023년 01월"}
                    tit_item={historyList.tit_item[1]}
                    txt_tag1={"#Karlo"}
                    txt_tag2={"#generative AI"}
                    txt_tag3={"#멀티모달AI"}
                    txt_tag4={"#카카오브레인"}
                  />
                  <HistoryList
                    className={""}
                    img_name={historyList.img_name[2]}
                    txt_date={"2022년 12월"}
                    tit_item={historyList.tit_item[2]}
                    txt_tag1={"#스타트업"}
                    txt_tag2={"#씨드투자"}
                    txt_tag3={"#초기투자"}
                    txt_tag4={"#벤처창업"}
                    txt_tag5={"#벤처캐피탈"}
                  />
                  <HistoryList
                    className={""}
                    img_name={historyList.img_name[3]}
                    txt_date={"2022년 11월"}
                    tit_item={historyList.tit_item[3]}
                    txt_tag1={"#리버스엔지니어링"}
                    txt_tag2={"#세이프봇"}
                    txt_tag3={"#스패밍"}
                    txt_tag4={"#안티어뷰징"}
                    txt_tag5={"#톡사이렌"}
                  />
                  <HistoryList
                    className={""}
                    img_name={historyList.img_name[4]}
                    txt_date={"2020년 12월"}
                    tit_item={historyList.tit_item[4]}
                    txt_tag1={"#디지털 자격증"}
                    txt_tag2={"#카카오 인증서"}
                    txt_tag3={"#톡 지갑"}
                  />
                  <HistoryList
                    className={""}
                    img_name={historyList.img_name[5]}
                    txt_date={"2020년 11월"}
                    tit_item={historyList.tit_item[5]}
                    txt_tag1={"#니니즈"}
                    txt_tag2={"#춘식이"}
                    txt_tag3={"#카카오프렌즈"}
                  />
                  <HistoryList
                    className={""}
                    img_name={historyList.img_name[6]}
                    txt_date={"2018년 09월"}
                    tit_item={historyList.tit_item[6]}
                    txt_tag1={"#if kakao"}
                    txt_tag2={"#이프카카오"}
                  />
                  <HistoryList
                    className={""}
                    img_name={historyList.img_name[7]}
                    txt_date={"2017년 07월"}
                    tit_item={historyList.tit_item[7]}
                    txt_tag1={"#인터넷전문은행"}
                    txt_tag2={"#카뱅"}
                    txt_tag3={"#카카오뱅크"}
                  />
                  <HistoryList
                    className={""}
                    img_name={historyList.img_name[8]}
                    txt_date={"2017년 01월"}
                    tit_item={historyList.tit_item[8]}
                    txt_tag1={"#Kakao enterprise"}
                    txt_tag2={"#kakao AI"}
                    txt_tag3={"#kakao i"}
                  />
                  <HistoryList
                    className={""}
                    img_name={historyList.img_name[9]}
                    txt_date={"2016년 04월"}
                    tit_item={historyList.tit_item[9]}
                    txt_tag1={"#웹툰"}
                    txt_tag2={"#카카오픽코마"}
                    txt_tag3={"#픽코마"}
                  />
                  <HistoryList
                    className={"hide"}
                    img_name={historyList.img_name[10]}
                    txt_date={"2015년 03월"}
                    tit_item={historyList.tit_item[10]}
                    txt_tag1={"#카카오 T"}
                    txt_tag2={"#카카오 택시"}
                    txt_tag3={"#카카오모빌리티"}
                  />
                  <HistoryList
                    className={"hide"}
                    img_name={historyList.img_name[11]}
                    txt_date={"2014년 09월"}
                    tit_item={historyList.tit_item[11]}
                    txt_tag1={"#간편결제"}
                    txt_tag2={"#카카오페이"}
                    txt_tag3={"#핀테크"}
                  />
                  <HistoryList
                    className={"hide"}
                    img_name={historyList.img_name[12]}
                    txt_date={"2014년 07월"}
                    tit_item={historyList.tit_item[12]}
                    txt_tag1={"#선물하기"}
                  />
                  <HistoryList
                    className={"hide"}
                    img_name={historyList.img_name[13]}
                    txt_date={"2014년 05월"}
                    tit_item={historyList.tit_item[13]}
                    txt_tag1={"#다음카카오"}
                    txt_tag2={"#카카오 합병"}
                    txt_tag3={"#합병"}
                  />
                  <HistoryList
                    className={"hide"}
                    img_name={historyList.img_name[14]}
                    txt_date={"2014년 04월"}
                    tit_item={historyList.tit_item[14]}
                    txt_tag1={"#카카오프렌즈"}
                    txt_tag2={"#카카오프렌즈 스토어"}
                  />
                  <HistoryList
                    className={"hide"}
                    img_name={historyList.img_name[15]}
                    txt_date={"2013년 04월"}
                    tit_item={historyList.tit_item[15]}
                    txt_tag1={"#웹툰"}
                    txt_tag2={"#카카오페이지"}
                  />
                  <HistoryList
                    className={"hide"}
                    img_name={historyList.img_name[16]}
                    txt_date={"2012년 11월"}
                    tit_item={historyList.tit_item[16]}
                    txt_tag1={"#라이언"}
                    txt_tag2={"#카카오프렌즈"}
                    txt_tag3={"#프렌즈"}
                  />
                  <HistoryList
                    className={"hide"}
                    img_name={historyList.img_name[17]}
                    txt_date={"2012년 09월"}
                    tit_item={historyList.tit_item[17]}
                    txt_tag1={"#이모티콘"}
                    txt_tag2={"#이모티콘플러스"}
                    txt_tag3={"#카카오 이모티콘"}
                  />
                  <HistoryList
                    className={"hide"}
                    img_name={historyList.img_name[18]}
                    txt_date={"2012년 07월"}
                    tit_item={historyList.tit_item[18]}
                    txt_tag1={"#카카오 게임하기"}
                    txt_tag2={"#카카오톡 게임하기"}
                  />
                  <HistoryList
                    className={"hide"}
                    img_name={historyList.img_name[19]}
                    txt_date={"2012년 03월"}
                    tit_item={historyList.tit_item[19]}
                    txt_tag1={"#sns"}
                    txt_tag2={"#소셜미디어"}
                    txt_tag3={"#카스"}
                  />
                  <HistoryList
                    className={"hide"}
                    img_name={historyList.img_name[20]}
                    txt_date={"2011년 11월"}
                    tit_item={historyList.tit_item[20]}
                    txt_tag1={"#이모티콘"}
                    txt_tag2={"#이모티콘플러스"}
                    txt_tag3={"#카카오이모티콘"}
                  />
                  <HistoryList
                    className={"hide"}
                    img_name={historyList.img_name[21]}
                    txt_date={"2011년 11월"}
                    tit_item={historyList.tit_item[21]}
                    txt_tag1={"#톡채널"}
                    txt_tag2={"#플러스친구"}
                  />
                  <HistoryList
                    className={"hide"}
                    img_name={historyList.img_name[22]}
                    txt_date={"2011년 07월"}
                    tit_item={historyList.tit_item[22]}
                    txt_tag1={"#소잃고외양간"}
                  />
                  <HistoryList
                    className={"hide"}
                    img_name={historyList.img_name[23]}
                    txt_date={"2011년 04월"}
                    tit_item={historyList.tit_item[23]}
                    txt_tag1={"#카카오톡"}
                  />
                  <HistoryList
                    className={"hide"}
                    img_name={historyList.img_name[24]}
                    txt_date={"2010년 12월"}
                    tit_item={historyList.tit_item[24]}
                    txt_tag1={"#겁나빠른황소"}
                    txt_tag2={"#오바마 카카오톡"}
                    txt_tag3={"#카카오톡"}
                  />
                  <HistoryList
                    className={"hide"}
                    img_name={historyList.img_name[25]}
                    txt_date={"2010년 12월"}
                    tit_item={historyList.tit_item[25]}
                    txt_tag1={"#선물하기"}
                  />
                  <HistoryList
                    className={"hide"}
                    img_name={historyList.img_name[26]}
                    txt_date={"2010년 04월"}
                    tit_item={historyList.tit_item[26]}
                    txt_tag1={"#카카오"}
                    txt_tag2={"#카카오톡"}
                  />
                  <HistoryList
                    className={"hide"}
                    img_name={historyList.img_name[27]}
                    txt_date={"2010년 03월"}
                    tit_item={historyList.tit_item[27]}
                    txt_tag1={"#아이위랩"}
                    txt_tag2={"#카카오톡"}
                  />
                </ul>
                <button className="btn_more">
                  <span className="screen_out">히스토리 목록</span>더 보기
                </button>
              </section>
              <span
                className="link_top"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                <ArrIcon className={"ico_top"} />
              </span>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default History;
