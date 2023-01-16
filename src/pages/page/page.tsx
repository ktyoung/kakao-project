import React, { CSSProperties } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";

function Page() {
  const display_none: CSSProperties = {
    display: "none",
  };

  return (
    <>
      <Header />
      <section id="mainContent" className="inner-main">
        <h2 className="screen_out">홈 본문</h2>
        <section className="content-feature" style={display_none}>
          <h3 className="screen_out">현재 페이지 위치</h3>
          <div className="wrap_tit">
            <img src="/images/date/date-png/1.png" alt="오늘 날짜 이미지" />
            <strong className="tit_path">오늘의 카카오</strong>
          </div>
        </section>
        <div className="main-content">
          <article className="content-article">
            <h3 role={"text"} className="tit_main tit_home tit_date1">
              <em className="emph_tit">오늘의 카카오</em>
              <span className="txt_tit">1월 1일 월요일 소식입니다</span>
            </h3>
            <div className="cont_home">
              <div className="section_home">
                <div className="wrap_item">
                  <div
                    sticky-offset="{top: 181}"
                    sticky-side="top"
                    className="inner_item"
                  >
                    <div className="item_card">
                      <span className="wrap_cont">
                        <span role={"text"} className="info_cate">
                          <img
                            src="/images/e524ab44018300001.webp"
                            alt=""
                            width={"36"}
                            height={"36"}
                            className="ico_cate"
                          />
                          <span className="txt_cate">보도자료</span>
                          <span className="txt_date">
                            <span className="screen_out">발행일</span>
                            2023.01.12
                          </span>
                        </span>
                        <span className="item_text">
                          <strong className="tit_card">
                            카카오엔터, 1조 2천억원 글로벌 투자 유치... 카카오
                            역대 최대 규모
                          </strong>
                          <div className="wrap_thumb">
                            <img
                              src="/images/a88ca33b018500001.webp"
                              alt="썸네일 이미지"
                              className="thumb_img"
                            />
                          </div>
                        </span>
                        <span role={"text"} className="info_card">
                          <span className="txt_keyword">
                            #카카오엔터테인먼트
                          </span>
                          <span className="txt_keyword">#글로벌투자유치</span>
                          <span className="txt_keyword">#비욘드코리아</span>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="wrap_item"></div>
              </div>
              <div className="wrap_culture">
                <strong className="tit_culture tit_pc">
                  기술과 사람으로 더 나은 세상을 만듭니다.
                </strong>
                <a href="#" className="link_culture">
                  카카오문화 바로가기
                  <img
                    src="/images/svg/svg-9.svg"
                    alt="링크 화살표 이미지"
                    className="ico_arr"
                  />
                </a>
                <img
                  src="/images/bg_home_culture_210325.png"
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
                    <a href="#" className="link_channel">
                      카카오 채널 바로가기
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link_youtube">
                      유튜브 바로가기
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link_insta">
                      인스타그램 바로가기
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link_facebook">
                      페이스북 바로가기
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link_linkedin">
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
                    <div className="item_card">
                      <span className="wrap_cont">
                        <span role={"text"} className="info_cate">
                          <img
                            src="/images/e524ab44018300001.webp"
                            alt=""
                            width={"36"}
                            height={"36"}
                            className="ico_cate"
                          />
                          <span className="txt_cate">카카오 나우</span>
                        </span>
                        <span className="item_text">
                          <strong className="tit_card">
                            끊김 없는 일상을 위하여 <br />전 국민에게 전하는
                            카카오 마음
                          </strong>
                          <div className="wrap_thumb">
                            <img
                              src="/images/7fd2fc59018500001.webp"
                              alt="썸네일 이미지"
                              className="thumb_img"
                            />
                          </div>
                        </span>
                        <span role={"text"} className="info_card">
                          <span className="txt_keyword">#메이커스</span>
                          <span className="txt_keyword">#이모티콘</span>
                          <span className="txt_keyword">#카카오</span>
                          <span className="txt_keyword">#쿠폰팩</span>
                          <span className="txt_keyword">#톡서랍</span>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="wrap_item"></div>
              </div>
              <div className="wrap_etc">
                <div className="item_etc">
                  <a href="" className="link_etc link_service">
                    <strong className="tit_item">
                      사람과 기술로 일상을 돕는 카카오 서비스
                    </strong>
                    <span className="txt_item">
                      서비스 바로가기
                      <img
                        src="/images/svg/svg-9.svg"
                        alt="링크 화살표 이미지"
                        className="ico_arr"
                      />
                    </span>
                  </a>
                </div>
                <div className="item_etc">
                  <a href="" className="link_etc link_recruit">
                    <strong className="tit_item">
                      세상만사에 관심이 많다면, 당신은 이미 카카오 크루
                    </strong>
                    <span className="txt_item">
                      인재영입 바로가기
                      <img
                        src="/images/svg/svg-9.svg"
                        alt="링크 화살표 이미지"
                        className="ico_arr"
                      />
                    </span>
                  </a>
                </div>
              </div>
              <a href="#" className="link_top">
                <img src="/images/svg/svg-9.svg" alt="맨 위로 이동" />
              </a>
            </div>
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Page;
