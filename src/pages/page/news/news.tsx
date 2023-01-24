import React, { useState } from "react";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import NewsCarousel from "../../../components/news/news_carousel";
import NewsItemCard from "../../../components/news/news_itemCard";
import ArrIcon from "../../../components/svg/arr_ico";
import CommonHooks from "../../../hooks/common-hooks";
import news from "../../../data/news.json";
import PagenationIcon from "../../../components/svg/pagenation_ico";

function News() {
  let [page, setPage] = useState(1);
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
                <img src="/images/news/ico_news.webp" alt="아이콘 이미지" />
                <strong className="tit_path">뉴스</strong>
              </div>
            </div>
          </section>
          <div className="main-content">
            <article className="content-article cont_culture">
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
                    <li role={"presentation"} className="on">
                      <a id="tabNews1" className="link_tab">
                        전체
                      </a>
                    </li>
                    <li role={"presentation"} className="">
                      <a id="tabNews2" className="link_tab">
                        보도자료
                      </a>
                    </li>
                    <li role={"presentation"} className="">
                      <a id="tabNews3" className="link_tab">
                        카카오 나우
                      </a>
                    </li>
                    <li role={"presentation"} className="">
                      <a id="tabNews4" className="link_tab">
                        미디어행사
                      </a>
                    </li>
                    <li role={"presentation"} className="">
                      <a id="tabNews5" className="link_tab">
                        지속가능경영
                      </a>
                    </li>
                    <li role={"presentation"} className="">
                      <a id="tabNews6" className="link_tab">
                        서비스 복구 현황
                      </a>
                    </li>
                  </ul>
                </div>
                <ul id="tabNewsContent1" className="list_card list_card_type2">
                  <NewsItemCard
                    txt_cate={news.txt_cate[0]}
                    txt_date={"2023.01.17"}
                    tit_card={news.tit_card[0]}
                    img_name={"news_thumb_2.webp"}
                    txt_keyword1={"#추모프로필"}
                    txt_keyword2={"#카카오톡"}
                    txt_keyword3={"#프로필"}
                  />
                  <NewsItemCard
                    txt_cate={news.txt_cate[4]}
                    tit_card={news.tit_card[1]}
                    img_name={"news_thumb_3.webp"}
                    txt_keyword1={"#1015협의체"}
                    txt_keyword2={"#이모티콘"}
                    txt_keyword3={"#카카오"}
                    txt_keyword4={"#쿠폰팩"}
                  />
                  <NewsItemCard
                    txt_cate={news.txt_cate[0]}
                    txt_date={"2023.01.17"}
                    tit_card={news.tit_card[2]}
                    img_name={"news_thumb_4.webp"}
                    txt_keyword1={"#카카오엔터테인먼트"}
                    txt_keyword2={"#글로벌투자유치"}
                  />
                  <NewsItemCard
                    txt_cate={news.txt_cate[0]}
                    txt_date={"2023.01.17"}
                    tit_card={news.tit_card[3]}
                    img_name={"news_thumb_5.webp"}
                    txt_keyword1={"#디지털접근성"}
                    txt_keyword2={"#신규업데이트"}
                    txt_keyword3={"#예약메시지"}
                  />
                  <NewsItemCard
                    txt_cate={news.txt_cate[0]}
                    txt_date={"2023.01.17"}
                    tit_card={news.tit_card[4]}
                    img_name={"news_thumb_6.webp"}
                    txt_keyword1={"#카카오톡 쇼핑하기"}
                    txt_keyword2={"#카카오쇼핑라이브"}
                    txt_keyword3={"#설날"}
                  />
                  <NewsItemCard
                    txt_cate={news.txt_cate[4]}
                    tit_card={news.tit_card[5]}
                    img_name={"news_thumb_7.webp"}
                    txt_keyword1={"#1015협의체"}
                    txt_keyword2={"#이모티콘"}
                    txt_keyword3={"#카카오"}
                    txt_keyword4={"#쿠폰팩"}
                  />
                  <NewsItemCard
                    txt_cate={news.txt_cate[1]}
                    tit_card={news.tit_card[6]}
                    img_name={"news_thumb_1.webp"}
                    txt_keyword1={"#메이커스"}
                    txt_keyword2={"#이모티콘"}
                    txt_keyword3={"#카카오"}
                    txt_keyword4={"#쿠폰팩"}
                    txt_keyword5={"#톡서랍"}
                  />
                  <NewsItemCard
                    txt_cate={news.txt_cate[0]}
                    txt_date={"2023.01.17"}
                    tit_card={news.tit_card[7]}
                    img_name={"news_thumb_9.webp"}
                    txt_keyword1={"#쇼핑하기"}
                    txt_keyword2={"#카카오톡 쇼핑하기"}
                    txt_keyword3={"#화훼농가"}
                  />
                  <NewsItemCard
                    txt_cate={news.txt_cate[0]}
                    txt_date={"2023.01.17"}
                    tit_card={news.tit_card[8]}
                    img_name={"news_thumb_10.webp"}
                    txt_keyword1={"#카카오메이커스"}
                    txt_keyword2={"#제가버치"}
                    txt_keyword3={"#배상면주가"}
                  />
                  <NewsItemCard
                    txt_cate={news.txt_cate[4]}
                    tit_card={news.tit_card[9]}
                    img_name={"news_thumb_11.webp"}
                    txt_keyword1={"#카카오"}
                  />
                  <NewsItemCard
                    txt_cate={news.txt_cate[0]}
                    txt_date={"2023.01.17"}
                    tit_card={news.tit_card[10]}
                    img_name={"news_thumb_12.webp"}
                    txt_keyword1={"#1015협의체"}
                    txt_keyword2={"#지원방안발표"}
                    txt_keyword3={"#카카오피해지원"}
                  />
                  <NewsItemCard
                    txt_cate={news.txt_cate[0]}
                    txt_date={"2023.01.17"}
                    tit_card={news.tit_card[11]}
                    img_name={"news_thumb_13.webp"}
                    txt_keyword1={"#우리동네단골시장"}
                    txt_keyword2={"#소신상인"}
                    txt_keyword3={"#ESG경영"}
                  />
                </ul>
                <div className="paging_comm">
                  <div className="group_paging">
                    <button className="btn_page btn_prev" disabled={true}>
                      <span className="screen_out">이전 페이지</span>
                      <PagenationIcon className={"ico_pagenation"} />
                    </button>
                    <a className="link_page on">1</a>
                    <button className="btn_page btn_next" disabled={true}>
                      <span className="screen_out">다음 페이지</span>
                      <PagenationIcon className={"ico_pagenation"} />
                    </button>
                  </div>
                  <div className="group_go">
                    <label htmlFor="targetPage" className="screen_out">
                      대상 페이지
                    </label>
                    <input type="tel" id="targetPage" defaultValue={page} />
                    <span className="txt_total">of 1</span>
                    <button
                      type="button"
                      className="btn_go"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      GO
                    </button>
                  </div>
                </div>
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
