import React from "react";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import ListSubsidiary from "../../../components/kakao/subsidiary_listSubsidiary";
import ArrIcon from "../../../components/svg/arr_ico";
import CommonHooks from "../../../hooks/common-hooks";
import subsidiary from "../../../data/subsidiary.json";

function Subsidiary() {
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
                    process.env.PUBLIC_URL +
                    "/images/subsidiary/ico_subsidiary.webp"
                  }
                  alt="아이콘 이미지"
                />
                <strong className="tit_path">공동체</strong>
              </div>
            </div>
          </section>
          <div className="main-content">
            <article className="content-article cont_culture">
              <h3 role={"text"} className="tit_main tit_subsidiary">
                <em className="emph_tit">공동체</em>
                <span className="txt_tit">카카오가 만든 더 나은 세상</span>
              </h3>
              <section className="section_subsidiary">
                <h4 className="screen_out">공동체 목록</h4>
                <ul className="list_subsidiary">
                  <ListSubsidiary
                    tit_item={subsidiary.tit_item[0]}
                    txt_item={subsidiary.txt_item[0]}
                    desc_item={subsidiary.desc_item[0]}
                  />
                  <ListSubsidiary
                    tit_item={subsidiary.tit_item[1]}
                    txt_item={subsidiary.txt_item[1]}
                    desc_item={subsidiary.desc_item[1]}
                    outlink_url={"https://www.kakaogamescorp.com"}
                    logo_name={"kakaogames.png"}
                  />
                  <ListSubsidiary
                    tit_item={subsidiary.tit_item[2]}
                    txt_item={subsidiary.txt_item[2]}
                    desc_item={subsidiary.desc_item[2]}
                    outlink_url={"https://www.kakaomobility.com"}
                    logo_name={"kakaomobility.png"}
                  />
                  <ListSubsidiary
                    tit_item={subsidiary.tit_item[3]}
                    txt_item={subsidiary.txt_item[3]}
                    desc_item={subsidiary.desc_item[3]}
                    outlink_url={"https://www.kakaobank.com"}
                    logo_name={"kakaobank.png"}
                  />
                  <ListSubsidiary
                    tit_item={subsidiary.tit_item[4]}
                    txt_item={subsidiary.txt_item[4]}
                    desc_item={subsidiary.desc_item[4]}
                    outlink_url={"https://www.kakao.vc/"}
                    logo_name={"kakaoventures.png"}
                  />
                  <ListSubsidiary
                    tit_item={subsidiary.tit_item[5]}
                    txt_item={subsidiary.txt_item[5]}
                    desc_item={subsidiary.desc_item[5]}
                    outlink_url={"https://www.kakaobrain.com/"}
                    logo_name={"kakaobrain.png"}
                  />
                  <ListSubsidiary
                    tit_item={subsidiary.tit_item[6]}
                    txt_item={subsidiary.txt_item[6]}
                    desc_item={subsidiary.desc_item[6]}
                    outlink_url={"https://www.kakaoenterprise.com"}
                    logo_name={"kakaoenterprise.png"}
                  />
                  <ListSubsidiary
                    tit_item={subsidiary.tit_item[7]}
                    txt_item={subsidiary.txt_item[7]}
                    desc_item={subsidiary.desc_item[7]}
                    outlink_url={"https://kakaoent.com"}
                    logo_name={"kakaoentertainment.png"}
                  />
                  <ListSubsidiary
                    tit_item={subsidiary.tit_item[8]}
                    txt_item={subsidiary.txt_item[8]}
                    desc_item={subsidiary.desc_item[8]}
                    outlink_url={"http://kakaoinvestment.com/"}
                    logo_name={"kakaoinvestment.png"}
                  />
                  <ListSubsidiary
                    tit_item={subsidiary.tit_item[9]}
                    txt_item={subsidiary.txt_item[9]}
                    desc_item={subsidiary.desc_item[9]}
                    outlink_url={"https://www.kakaopiccoma.com/"}
                    logo_name={"kakaopiccoma.png"}
                  />
                  <ListSubsidiary
                    tit_item={subsidiary.tit_item[10]}
                    txt_item={subsidiary.txt_item[10]}
                    desc_item={subsidiary.desc_item[10]}
                    outlink_url={"https://www.kakaopay.com"}
                    logo_name={"kakaopay.png"}
                  />
                  <ListSubsidiary
                    tit_item={subsidiary.tit_item[11]}
                    txt_item={subsidiary.txt_item[11]}
                    desc_item={subsidiary.desc_item[11]}
                    outlink_url={"https://www.groundx.xyz/"}
                    logo_name={"groundx.png"}
                  />
                  <ListSubsidiary
                    tit_item={subsidiary.tit_item[12]}
                    txt_item={subsidiary.txt_item[12]}
                    desc_item={subsidiary.desc_item[12]}
                    outlink_url={"https://kakaostyle.com"}
                    logo_name={"kakaostyle.png"}
                  />
                  <ListSubsidiary
                    tit_item={subsidiary.tit_item[13]}
                    txt_item={subsidiary.txt_item[13]}
                    desc_item={subsidiary.desc_item[13]}
                  />
                </ul>
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

export default Subsidiary;
