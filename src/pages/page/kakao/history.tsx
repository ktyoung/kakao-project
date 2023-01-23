import React from "react";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import Carousel from "../../../components/kakao/history_carousel";
import ArrIcon from "../../../components/svg/arr_ico";

function History() {
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
                  src="/images/subsidiary/ico_subsidiary.webp"
                  alt="아이콘 이미지"
                />
                <strong className="tit_path">공동체</strong>
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
              <div className="feature_card feature_mo"></div>
              <section className="section_history"></section>
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
