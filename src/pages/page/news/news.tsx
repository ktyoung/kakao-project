import React, { useEffect, useState } from "react";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import NewsCarousel from "../../../components/news/news_carousel";
import ArrIcon from "../../../components/svg/arr_ico";
import CommonHooks from "../../../hooks/common-hooks";
import PagenationIcon from "../../../components/svg/pagenation_ico";
import TabContents from "../../../components/news/news_tabContents";

function News() {
  let [page, setPage] = useState(1);
  let [tab, setTab] = useState(1);

  let list_tab = document.querySelectorAll(".list_tab li");
  function RemoveOn() {
    for (let i = 0; i < list_tab.length; i++) {
      list_tab[i].classList.remove("on");
    }
  }

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
                  src={process.env.PUBLIC_URL + "/images/news/ico_news.webp"}
                  alt="아이콘 이미지"
                />
                <strong className="tit_path">뉴스</strong>
              </div>
            </div>
          </section>
          <div className="main-content">
            <article className="content-article">
              <h3 role={"text"} className="tit_main tit_news">
                <em className="emph_tit">뉴스</em>
                <span className="txt_tit">
                  가장 빠른 카카오 새소식 업데이트
                </span>
              </h3>
              <div className="feature_card">
                <NewsCarousel />
              </div>
              <section className="section_social">
                <h4 id="titNews" className="tit_sub">
                  뉴스 아카이브
                </h4>
                <div className="wrap_tabs">
                  <ul role={"tablist"} className="list_tab">
                    <li
                      role={"presentation"}
                      className="on"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setTab(1);
                        RemoveOn();
                        list_tab[0].classList.add("on");
                      }}
                    >
                      <a id="tabNews1" className="link_tab">
                        전체
                      </a>
                    </li>
                    <li
                      role={"presentation"}
                      className=""
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setTab(2);
                        RemoveOn();
                        list_tab[1].classList.add("on");
                      }}
                    >
                      <a id="tabNews2" className="link_tab">
                        보도자료
                      </a>
                    </li>
                    <li
                      role={"presentation"}
                      className=""
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setTab(3);
                        RemoveOn();
                        list_tab[2].classList.add("on");
                      }}
                    >
                      <a id="tabNews3" className="link_tab">
                        카카오 나우
                      </a>
                    </li>
                    <li
                      role={"presentation"}
                      className=""
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setTab(4);
                        RemoveOn();
                        list_tab[3].classList.add("on");
                      }}
                    >
                      <a id="tabNews4" className="link_tab">
                        미디어행사
                      </a>
                    </li>
                    <li
                      role={"presentation"}
                      className=""
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setTab(5);
                        RemoveOn();
                        list_tab[4].classList.add("on");
                      }}
                    >
                      <a id="tabNews5" className="link_tab">
                        지속가능경영
                      </a>
                    </li>
                    <li
                      role={"presentation"}
                      className=""
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setTab(6);
                        RemoveOn();
                        list_tab[5].classList.add("on");
                      }}
                    >
                      <a id="tabNews6" className="link_tab">
                        서비스 복구 현황
                      </a>
                    </li>
                  </ul>
                </div>
                <TabContents tab={tab} />
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

export default News;
