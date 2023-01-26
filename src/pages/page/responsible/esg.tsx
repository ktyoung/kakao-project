import React, { useEffect, useState } from "react";
import ESGTabContents from "../../../components/esg/esg_tabContents";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import ArrIcon from "../../../components/svg/arr_ico";
import CommonHooks from "../../../hooks/common-hooks";

function ESG() {
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
                <img src="/images/esg/ico_esg.webp" alt="아이콘 이미지" />
                <strong className="tit_path">ESG</strong>
              </div>
            </div>
          </section>
          <div className="main-content">
            <article className="content-article cont_esg">
              <h3 role={"text"} className="tit_main tit_esg">
                <em className="emph_tit">ESG</em>
                <span className="txt_tit">
                  더 나은 세상을 만들기 위한 카카오의 약속과 책임
                </span>
              </h3>
              <section className="section_esg">
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
                        소개
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
                        환경
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
                        사회
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
                        거버넌스
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
                        보고서&amp;규정
                      </a>
                    </li>
                  </ul>
                </div>
                <ESGTabContents tab={tab} />
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

export default ESG;
