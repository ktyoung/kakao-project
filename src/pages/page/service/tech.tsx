import React, { useEffect, useState } from "react";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import ArrIcon from "../../../components/svg/arr_ico";
import CommonHooks from "../../../hooks/common-hooks";
import TechTabContents from "../../../components/tech/tech_tabContents";

function Tech() {
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
                  src={process.env.PUBLIC_URL + "/images/tech/ico_tech.webp"}
                  alt="아이콘 이미지"
                />
                <strong className="tit_path">기술</strong>
              </div>
            </div>
          </section>
          <div className="main-content">
            <article className="content-article cont_tech">
              <h3 role={"text"} className="tit_main tit_tech">
                <em className="emph_tit">기술</em>
                <span className="txt_tit">
                  당신의 오늘을 변화시키는 카카오 기술
                </span>
              </h3>
              <section className="section_tech">
                <h4 id="titTech" className="tit_sub screen_out">
                  기술 아카이브
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
                        카카오테크
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
                        기술 플랫폼
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
                        기술 서비스
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
                        기술 콘텐츠
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
                        기술 이벤트
                      </a>
                    </li>
                    <li
                      role={"presentation"}
                      className=""
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setTab(7);
                        RemoveOn();
                        list_tab[6].classList.add("on");
                      }}
                    >
                      <a id="tabNews7" className="link_tab">
                        if(kakao)
                      </a>
                    </li>
                  </ul>
                </div>
                <TechTabContents tab={tab} />
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

export default Tech;
