import React from "react";
import ArrowIcon from "./svg/arrow_ico";
import OutlickIcon from "./svg/outlink_ico";
import PlusIcon from "./svg/plus_ico";
import data from "./../data.json";

function Footer() {
  return (
    <footer className="doc-footer">
      <div className="inner_footer">
        <section className="section_service">
          <h2 className="screen_out">하단 메뉴</h2>
          <div className="warp_service">
            <strong className="tit_service">
              <a href="#">
                <span role={"text"}>카카오</span>
              </a>
            </strong>
            <ul role={"list"} className="list_service">
              <li role={"listitem"}>
                <a href="#">
                  <span role={"text"}>카카오 문화</span>
                </a>
              </li>
              <li role={"listitem"}>
                <a href="#">
                  <span role={"text"}>공동체</span>
                </a>
              </li>
              <li role={"listitem"}>
                <a href="#">
                  <span role={"text"}>히스토리</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="warp_service wrap_news">
            <strong className="tit_service">
              <a href="#">
                <span role={"text"}>뉴스</span>
              </a>
            </strong>
          </div>
          <div className="warp_service">
            <strong className="tit_service">
              <a href="#">
                <span role={"text"}>기술과 서비스</span>
              </a>
            </strong>
            <ul role={"list"} className="list_service">
              <li role={"listitem"}>
                <a href="#">
                  <span role={"text"}>기술</span>
                </a>
              </li>
              <li role={"listitem"}>
                <a href="#">
                  <span role={"text"}>서비스</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="warp_service">
            <strong className="tit_service">
              <a href="#">
                <span role={"text"}>약속과 책임</span>
              </a>
            </strong>
            <ul role={"list"} className="list_service">
              <li role={"listitem"}>
                <a href="#">
                  <span role={"text"}>ESG</span>
                </a>
              </li>
              <li role={"listitem"}>
                <a href="#">
                  <span role={"text"}>소셜임팩트</span>
                </a>
              </li>
              <li role={"listitem"}>
                <a href="#">
                  <span role={"text"}>디지털 권리</span>
                </a>
              </li>
              <li role={"listitem"}>
                <a href="#">
                  <span role={"text"}>AI 윤리</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="warp_service">
            <strong className="tit_service">
              <a href="#">
                <span role={"text"}>투자정보</span>
              </a>
            </strong>
            <ul role={"list"} className="list_service">
              <li role={"listitem"}>
                <a href="#">
                  <span role={"text"}>기업지배구조</span>
                </a>
              </li>
              <li role={"listitem"}>
                <a href="#">
                  <span role={"text"}>주가정보</span>
                </a>
              </li>
              <li role={"listitem"}>
                <a href="#">
                  <span role={"text"}>IR행사</span>
                </a>
              </li>
              <li role={"listitem"}>
                <a href="#">
                  <span role={"text"}>공시정보</span>
                </a>
              </li>
              <li role={"listitem"}>
                <a href="#">
                  <span role={"text"}>공고</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="group_service">
            <div className="warp_service">
              <strong className="tit_service">
                <a href="#">
                  <span role={"text"}>고객센터</span>
                </a>
              </strong>
              <ul role={"list"} className="list_service">
                <li role={"listitem"}>
                  <a href="#">
                    <span role={"text"}>카카오 고객센터</span>
                    <OutlickIcon className={"ico_outlink"} />
                  </a>
                </li>
                <li role={"listitem"}>
                  <a href="#">
                    <span role={"text"}>Daum 고객센터</span>
                    <OutlickIcon className={"ico_outlink"} />
                  </a>
                </li>
              </ul>
            </div>
            <strong className="tit_service">
              <a href="#">
                <span role={"text"}>인재영입</span>
                <OutlickIcon className={"ico_outlink"} />
              </a>
            </strong>
            <strong className="tit_service">
              <a href="#">
                <span role={"text"}>카카오계정</span>
                <OutlickIcon className={"ico_outlink"} />
              </a>
            </strong>
          </div>
        </section>
        <section className="section_relation">
          <h2 className="screen_out">서비스 이용정보</h2>
          <div className="group_info">
            <div className="wrap_info">
              <a href="#" className="link_info">
                이용약관
                <ArrowIcon className={"ico_arrow"} />
              </a>
            </div>
            <div className="wrap_info">
              <a href="#" className="link_info link_emph">
                위치기반서비스이용약관
                <ArrowIcon className={"ico_arrow"} />
              </a>
            </div>
            <div className="wrap_info">
              <a href="#" className="link_info link_emph">
                개인정보처리방침
                <ArrowIcon className={"ico_arrow"} />
              </a>
            </div>
            <div className="wrap_info">
              <a href="#" className="link_info">
                운영정책
              </a>
            </div>
            <div className="wrap_info">
              <a href="#" className="link_info">
                청소년보호정책
                <ArrowIcon className={"ico_arrow"} />
              </a>
            </div>
            <div className="wrap_info">
              <a href="#" className="link_info">
                브랜드보호정책
              </a>
            </div>
            <div className="wrap_info">
              <a href="#" className="link_info">
                권리침해신고안내
              </a>
            </div>
            <div className="wrap_info">
              <a href="#" className="link_info">
                공지사항
                <ArrowIcon className={"ico_arrow"} />
              </a>
            </div>
            <div className="wrap_info">
              <a href="#" className="link_info">
                사이버윤리실
              </a>
            </div>
            <div className="wrap_info">
              <a href="#" className="link_info">
                Contact Us
              </a>
            </div>
          </div>
          <div className="wrap_relation">
            <strong className="tit_relation">
              <a href="#">
                관련사이트
                <PlusIcon className={"ico_plus"} />
              </a>
            </strong>
          </div>
          <small className="txt_copyright">
            &copy; <a href="#">Kakao Corp.</a>&nbsp;All rights reserved.
          </small>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
