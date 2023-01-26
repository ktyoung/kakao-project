import DigitalItemCard from "../../../components/digital/digital_fullItemCard";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import ArrIcon from "../../../components/svg/arr_ico";
import CommonHooks from "../../../hooks/common-hooks";
import ethics from "../../../data/ethics.json";

function Ethics() {
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
                <img src="/images/ethics/ico_ethics.webp" alt="아이콘 이미지" />
                <strong className="tit_path">AI 윤리</strong>
              </div>
            </div>
          </section>
          <div className="main-content">
            <article className="content-article cont_ethics">
              <h3 role={"text"} className="tit_main tit_ethics">
                <em className="emph_tit">AI 윤리</em>
                <span className="txt_tit">
                  기술과 사람이 함께 만드는 건강한 디지털 문화를 고민합니다.
                </span>
              </h3>
              <section className="section_responsible">
                <h4 className="screen_out">AI 윤리 목록</h4>
                <div className="feature_card">
                  <ul className="list_card list_card_type2">
                    {FullItemCard()}
                  </ul>
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

function FullItemCard() {
  var arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(
      <DigitalItemCard
        bg_url={ethics.bg_url[i]}
        href={ethics.href[i]}
        tit_responsible={ethics.tit_responsible[i]}
        txt_responsible={ethics.txt_responsible[i]}
        key={i}
      />
    );
  }
  return arr;
}

export default Ethics;
