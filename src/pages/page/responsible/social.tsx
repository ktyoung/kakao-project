import React, { useEffect, useState } from "react";
import ESGTabContents from "../../../components/esg/esg_tabContents";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import ArrIcon from "../../../components/svg/arr_ico";
import CommonHooks from "../../../hooks/common-hooks";

function Social() {
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
                <img src="/images/social/ico_social.webp" alt="아이콘 이미지" />
                <strong className="tit_path">소셜임팩트</strong>
              </div>
            </div>
          </section>
          <div className="main-content">
            <article className="content-article cont_social">
              <h3 role={"text"} className="tit_main tit_social">
                <em className="emph_tit">소셜임팩트</em>
                <span className="txt_tit">
                  카카오는 당신과 함께 더 나은 세상을 만듭니다.
                </span>
              </h3>
              <section className="section_social">
                <h4 className="screen_out tit_sub">소셜임펙트 아카이브</h4>
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
                        사회혁신
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
                        IT교육
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
                        파트너성장
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

export default Social;
