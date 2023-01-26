import DigitalItemCard from "../../../components/digital/digital_fullItemCard";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import ArrIcon from "../../../components/svg/arr_ico";
import CommonHooks from "../../../hooks/common-hooks";
import digital from "../../../data/digital.json";

function Digital() {
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
                  src={
                    process.env.PUBLIC_URL + "/images/digital/ico_digital.webp"
                  }
                  alt="아이콘 이미지"
                />
                <strong className="tit_path">디지털 권리</strong>
              </div>
            </div>
          </section>
          <div className="main-content">
            <article className="content-article cont_digital">
              <h3 role={"text"} className="tit_main tit_digital">
                <em className="emph_tit">디지털 권리</em>
                <span className="txt_tit">
                  카카오는 이용자의 디지털 권리를 최우선으로 존중합니다.
                </span>
              </h3>
              <section className="section_responsible">
                <h4 className="screen_out">디지털 권리 목록</h4>
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
  for (let i = 0; i < 4; i++) {
    arr.push(
      <DigitalItemCard
        bg_url={digital.bg_url[i]}
        href={digital.href[i]}
        tit_responsible={digital.tit_responsible[i]}
        txt_responsible={digital.txt_responsible[i]}
        key={i}
      />
    );
  }
  return arr;
}

export default Digital;
