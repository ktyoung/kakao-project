import React, { useEffect } from "react";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import ArrIcon from "../../../components/svg/arr_ico";
import CommonHooks from "../../../hooks/common-hooks";
import culture from "../../../data/culture.json";
import InfoSection from "../../../components/culture/infoSection";

function Culture() {
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
                <img src="/images/ico_culture.webp" alt="아이콘 이미지" />
                <strong className="tit_path">문화</strong>
              </div>
            </div>
          </section>
          <div className="main-content">
            <article className="content-article cont_culture">
              <h3 role={"text"} className="tit_main tit_culture">
                <em className="emph_tit">문화</em>
                <span className="txt_tit">더 나은 세상을 만드는 카카오</span>
              </h3>
              <section className="section_culture">
                <div className="header_tit">
                  <video
                    src="/video/vod_culture_top_210531.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="vod_culture"
                  ></video>
                  <h4 className="tit_culture">
                    <span className="txt_tit">존재이유</span>
                    <span>
                      기술과 사람이 만드는 <br /> 더 나은 세상
                    </span>
                  </h4>
                </div>
                <strong className="tit_section">카카오스럽나요?</strong>
                <p className="desc_section">
                  카카오 크루는 종종 이렇게 묻곤 합니다. <br />
                  우리의 관점, 행동하는 방법, 지향하는 목표까지 카카오스러움은
                  이미 우리 안에 스며들어 있습니다. 우리가 더 나은 세상을 만들기
                  위해 고민하면서 자연스럽게 체득한 태도이자 본질이기
                  때문입니다. 앞으로도 우리는 카카오스러움에서 고민을 시작하고,
                  답을 찾을 것입니다.
                </p>
                <InfoSection
                  video_title="vod_culture1.mp4"
                  tit_info={culture.tit_info[0]}
                  txt_info={culture.txt_info[0]}
                  desc_info={culture.desc_info[0]}
                  txt_tag1={culture.txt_tag[0]}
                  txt_tag2={culture.txt_tag[1]}
                />
                <InfoSection
                  video_title="vod_culture2.mp4"
                  tit_info={culture.tit_info[1]}
                  txt_info={culture.txt_info[1]}
                  desc_info={culture.desc_info[1]}
                  txt_tag1={culture.txt_tag[2]}
                  txt_tag2={culture.txt_tag[3]}
                />
                <InfoSection
                  video_title="vod_culture3.mp4"
                  tit_info={culture.tit_info[2]}
                  txt_info={culture.txt_info[2]}
                  desc_info={culture.desc_info[2]}
                  txt_tag1={culture.txt_tag[4]}
                  txt_tag2={culture.txt_tag[5]}
                />
                <InfoSection
                  video_title="vod_culture4.mp4"
                  tit_info={culture.tit_info[3]}
                  txt_info={culture.txt_info[3]}
                  desc_info={culture.desc_info[3]}
                  txt_tag1={culture.txt_tag[6]}
                  txt_tag2={culture.txt_tag[7]}
                />
                <InfoSection
                  video_title="vod_culture5.mp4"
                  tit_info={culture.tit_info[4]}
                  txt_info={culture.txt_info[4]}
                  desc_info={culture.desc_info[4]}
                  txt_tag1={culture.txt_tag[8]}
                  txt_tag2={culture.txt_tag[9]}
                />
                {/* <div className="info_section">
                  <div className="inner_section">
                    <div className="wrap_img">
                      <video
                        src="/video/vod_culture1.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="vod_culture"
                      ></video>
                    </div>
                    <div className="wrap_cont">
                      <strong className="tit_info" id="text1_2">
                        가보지 않은 길을 <br /> 두려워 하지 않습니다.
                      </strong>
                      <span className="txt_info">Willing to Venture</span>
                      <div className="info_cont">
                        <p className="desc_info">
                          "가보지 않은 길은 위험하잖아?"
                          <br />
                          배는 정박해 있을 때 가장 안전하지만 그것은 배의 존재
                          이유가 아닙니다. 가보지 않은 길은 실패의 위험이
                          따르지만 우리는 개선보다 혁신의 길을 가는
                          사람들입니다. 문제 자체를 다시 정의하고 새로운 해답을
                          찾는 것에 집중합니다. 도전이 두렵기만 하다면 카카오를
                          떠날 때입니다.{" "}
                        </p>
                        <div className="wrap_tag">
                          <span className="txt_tag">#개선아닌혁신</span>
                          <span className="txt_tag">#도전은거침없이</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="info_section"></div>
                <div className="info_section"></div>
                <div className="info_section"></div>
                <div className="info_section"></div> */}
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

export default Culture;
