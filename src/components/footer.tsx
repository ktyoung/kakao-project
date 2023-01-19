import React, { useEffect } from "react";
import ArrowIcon from "./svg/arrow_ico";
import OutlickIcon from "./svg/outlink_ico";
import PlusIcon from "./svg/plus_ico";
import data from "./../data.json";
import ArrIcon from "./svg/arr_ico";

function Footer() {
  function wrap_info0() {
    document.querySelectorAll(".wrap_info")[1].classList.remove("info_open");
    document.querySelectorAll(".wrap_info")[2].classList.remove("info_open");
    document.querySelectorAll(".wrap_info")[4].classList.remove("info_open");
    document.querySelectorAll(".wrap_info")[7].classList.remove("info_open");
    document.querySelectorAll(".wrap_info")[0].classList.toggle("info_open");
  }

  function wrap_info1() {
    document.querySelectorAll(".wrap_info")[0].classList.remove("info_open");
    document.querySelectorAll(".wrap_info")[2].classList.remove("info_open");
    document.querySelectorAll(".wrap_info")[4].classList.remove("info_open");
    document.querySelectorAll(".wrap_info")[7].classList.remove("info_open");
    document.querySelectorAll(".wrap_info")[1].classList.toggle("info_open");
  }

  function wrap_info2() {
    document.querySelectorAll(".wrap_info")[0].classList.remove("info_open");
    document.querySelectorAll(".wrap_info")[1].classList.remove("info_open");
    document.querySelectorAll(".wrap_info")[4].classList.remove("info_open");
    document.querySelectorAll(".wrap_info")[7].classList.remove("info_open");
    document.querySelectorAll(".wrap_info")[2].classList.toggle("info_open");
  }

  function wrap_info4() {
    document.querySelectorAll(".wrap_info")[0].classList.remove("info_open");
    document.querySelectorAll(".wrap_info")[1].classList.remove("info_open");
    document.querySelectorAll(".wrap_info")[2].classList.remove("info_open");
    document.querySelectorAll(".wrap_info")[7].classList.remove("info_open");
    document.querySelectorAll(".wrap_info")[4].classList.toggle("info_open");
  }

  function wrap_info7() {
    document.querySelectorAll(".wrap_info")[0].classList.remove("info_open");
    document.querySelectorAll(".wrap_info")[1].classList.remove("info_open");
    document.querySelectorAll(".wrap_info")[2].classList.remove("info_open");
    document.querySelectorAll(".wrap_info")[4].classList.remove("info_open");
    document.querySelectorAll(".wrap_info")[7].classList.toggle("info_open");
  }

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
              <a href="https://www.kakaocorp.com/ir/main" target={"_blank"}>
                <span role={"text"}>투자정보</span>
              </a>
            </strong>
            <ul role={"list"} className="list_service">
              <li role={"listitem"}>
                <a
                  href="https://www.kakaocorp.com/ir/managementInformation/shareholderComposition"
                  target={"_blank"}
                >
                  <span role={"text"}>기업지배구조</span>
                </a>
              </li>
              <li role={"listitem"}>
                <a
                  href="https://www.kakaocorp.com/ir/stockInformation"
                  target={"_blank"}
                >
                  <span role={"text"}>주가정보</span>
                </a>
              </li>
              <li role={"listitem"}>
                <a
                  href="https://www.kakaocorp.com/ir/financialInformation/consolidatedFinancialStatements"
                  target={"_blank"}
                >
                  <span role={"text"}>재무정보</span>
                </a>
              </li>
              <li role={"listitem"}>
                <a
                  href="https://www.kakaocorp.com/ir/referenceRoom/earningsAnnouncement"
                  target={"_blank"}
                >
                  <span role={"text"}>IR행사</span>
                </a>
              </li>
              <li role={"listitem"}>
                <a
                  href="https://www.kakaocorp.com/ir/disclosureInformation"
                  target={"_blank"}
                >
                  <span role={"text"}>공시정보</span>
                </a>
              </li>
              <li role={"listitem"}>
                <a
                  href="https://www.kakaocorp.com/ir/noticeList"
                  target={"_blank"}
                >
                  <span role={"text"}>공고</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="group_service">
            <div className="warp_service">
              <strong className="tit_service">
                <a href="https://cs.kakao.com/" target={"_blank"}>
                  <span role={"text"}>고객센터</span>
                </a>
              </strong>
              <ul role={"list"} className="list_service">
                <li role={"listitem"}>
                  <a href="https://cs.kakao.com/" target={"_blank"}>
                    <span role={"text"}>카카오 고객센터</span>
                    <OutlickIcon className={"ico_outlink"} />
                  </a>
                </li>
                <li role={"listitem"}>
                  <a href="https://cs.daum.net/" target={"_blank"}>
                    <span role={"text"}>Daum 고객센터</span>
                    <OutlickIcon className={"ico_outlink"} />
                  </a>
                </li>
              </ul>
            </div>
            <strong className="tit_service">
              <a href="https://careers.kakao.com/index" target={"_blank"}>
                <span role={"text"}>인재영입</span>
                <OutlickIcon className={"ico_outlink"} />
              </a>
            </strong>
            <strong className="tit_service">
              <a href="https://accounts.kakao.com" target={"_blank"}>
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
              <a onClick={wrap_info0} role={"button"} className="link_info">
                이용약관
                <ArrowIcon className={"ico_arrow"} />
              </a>
              <ul className="list_subinfo">
                <li>
                  <a
                    href="https://www.kakao.com/policy/terms?type=a&amp;amp;lang=ko"
                    target="_blank"
                    data-v-15aff456
                  >
                    <span role={"text"}>
                      카카오계정 서비스
                      <span className="screen_out">사이트 바로가기</span>
                      <OutlickIcon className={"ico_outlink"} />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.kakao.com/policy/terms?type=ts&amp;lang=ko"
                    target="_blank"
                    data-v-15aff456
                  >
                    <span role={"text"}>
                      카카오 서비스
                      <span className="screen_out">사이트 바로가기</span>
                      <OutlickIcon className={"ico_outlink"} />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="http://policy.daum.net/info/info"
                    target="_blank"
                    data-v-15aff456
                  >
                    <span role={"text"}>
                      Daum 서비스
                      <span className="screen_out">사이트 바로가기</span>
                      <OutlickIcon className={"ico_outlink"} />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="wrap_info">
              <a
                onClick={wrap_info1}
                role={"button"}
                className="link_info link_emph"
              >
                위치기반서비스이용약관
                <ArrowIcon className={"ico_arrow"} />
              </a>
              <ul className="list_subinfo">
                <li>
                  <a
                    href="https://www.kakao.com/policy/location?lang=ko"
                    target="_blank"
                    data-v-15aff456
                  >
                    <span role={"text"}>
                      카카오 서비스
                      <span className="screen_out">사이트 바로가기</span>
                      <OutlickIcon className={"ico_outlink"} />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="http://policy.daum.net/mobile_info/mobile_info"
                    target="_blank"
                    data-v-15aff456
                  >
                    <span role={"text"}>
                      Daum 서비스
                      <span className="screen_out">사이트 바로가기</span>
                      <OutlickIcon className={"ico_outlink"} />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="wrap_info">
              <a
                onClick={wrap_info2}
                role={"button"}
                className="link_info link_emph"
              >
                개인정보처리방침
                <ArrowIcon className={"ico_arrow"} />
              </a>
              <ul className="list_subinfo">
                <li>
                  <a
                    href="https://www.kakaocorp.com/policy/privacyPolicy/corporateSitePrivacyPolicy"
                    target="_blank"
                    data-v-15aff456
                  >
                    <span role={"text"}>
                      기업사이트
                      <span className="screen_out">사이트 바로가기</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.kakao.com/policy/privacy?lang=ko"
                    target="_blank"
                    data-v-15aff456
                  >
                    <span role={"text"}>
                      카카오 서비스
                      <span className="screen_out">사이트 바로가기</span>
                      <OutlickIcon className={"ico_outlink"} />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="wrap_info">
              <a
                href="https://www.kakao.com/policy/oppolicy?lang=ko"
                target={"_blank"}
                onClick={(e) => e.preventDefault}
                role={"button"}
                className="link_info"
              >
                운영정책
              </a>
            </div>
            <div className="wrap_info">
              <a onClick={wrap_info4} role={"button"} className="link_info">
                청소년보호정책
                <ArrowIcon className={"ico_arrow"} />
              </a>
              <ul className="list_subinfo">
                <li>
                  <a
                    href="https://www.kakao.com/policy/safeguard?lang=ko"
                    target="_blank"
                    data-v-15aff456
                  >
                    <span role={"text"}>
                      카카오 서비스
                      <span className="screen_out">사이트 바로가기</span>
                      <OutlickIcon className={"ico_outlink"} />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="http://policy.daum.net/youthpolicy/youthpolicy"
                    target="_blank"
                    data-v-15aff456
                  >
                    <span role={"text"}>
                      Daum 서비스
                      <span className="screen_out">사이트 바로가기</span>
                      <OutlickIcon className={"ico_outlink"} />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="wrap_info">
              <a
                href="https://kakao.com/policy/brand/trademark?lang=ko"
                target={"_blank"}
                onClick={(e) => e.preventDefault}
                role={"button"}
                className="link_info"
              >
                브랜드보호정책
              </a>
            </div>
            <div className="wrap_info">
              <a
                href="https://www.kakao.com/policy/right?lang=ko"
                target={"_blank"}
                onClick={(e) => e.preventDefault}
                role={"button"}
                className="link_info"
              >
                권리침해신고안내
              </a>
            </div>
            <div className="wrap_info">
              <a onClick={wrap_info7} role={"button"} className="link_info">
                공지사항
                <ArrowIcon className={"ico_arrow"} />
              </a>
              <ul className="list_subinfo">
                <li>
                  <a
                    href="https://www.kakaocorp.com/policy/notice/kakaocorp/list"
                    target="_blank"
                    data-v-15aff456
                  >
                    <span role={"text"}>
                      투자정보 공지
                      <span className="screen_out">사이트 바로가기</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.kakao.com/notices?lang=ko"
                    target="_blank"
                    data-v-15aff456
                  >
                    <span role={"text"}>
                      카카오 서비스
                      <span className="screen_out">사이트 바로가기</span>
                      <OutlickIcon className={"ico_outlink"} />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://m.daum.net/channel/new/notice"
                    target="_blank"
                    data-v-15aff456
                  >
                    <span role={"text"}>
                      Daum 서비스
                      <span className="screen_out">사이트 바로가기</span>
                      <OutlickIcon className={"ico_outlink"} />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="wrap_info">
              <a
                href="https://www.kakaocorp.com/policy/cyberEthics/info"
                target={"_blank"}
                onClick={(e) => e.preventDefault}
                role={"button"}
                className="link_info"
              >
                사이버윤리실
              </a>
            </div>
            <div className="wrap_info">
              <a
                href="https://www.kakaocorp.com/ir/wayToCome"
                target={"_blank"}
                onClick={(e) => e.preventDefault}
                role={"button"}
                className="link_info"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="wrap_relation">
            <strong
              className="tit_relation"
              onClick={() => {
                document
                  .querySelectorAll(".wrap_relation")[0]
                  .classList.toggle("info_open");
              }}
            >
              <a onClick={(e) => e.preventDefault} role={"button"}>
                관련사이트
                <PlusIcon className={"ico_plus"} />
              </a>
              <ul className="list_subinfo">
                <li>
                  <a href="https://kakao.ai/" target={"_blank"} data-v-15aff456>
                    <span role={"text"}>
                      카카오 AI
                      <span className="screen_out">사이트 바로가기</span>
                      <OutlickIcon className={"ico_outlink"} />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://privacy.kakao.com/main?lang=ko"
                    target="_blank"
                    data-v-15aff456
                  >
                    <span role={"text"}>
                      카카오 프라이버시
                      <span className="screen_out">사이트 바로가기</span>
                      <OutlickIcon className={"ico_outlink"} />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://developers.kakao.com/"
                    target={"_blank"}
                    data-v-15aff456
                  >
                    <span role={"text"}>
                      카카오 디벨로퍼스
                      <span className="screen_out">사이트 바로가기</span>
                      <OutlickIcon className={"ico_outlink"} />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.daum.net/"
                    target={"_blank"}
                    data-v-15aff456
                  >
                    <span role={"text"}>
                      다음 포털 사이트
                      <span className="screen_out">사이트 바로가기</span>
                      <OutlickIcon className={"ico_outlink"} />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://winwin.kakao.com/index"
                    target={"_blank"}
                    data-v-15aff456
                  >
                    <span role={"text"}>
                      동반 성장 사이트
                      <span className="screen_out">사이트 바로가기</span>
                      <OutlickIcon className={"ico_outlink"} />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://jeju.kakao.com/"
                    target={"_blank"}
                    data-v-15aff456
                  >
                    <span role={"text"}>
                      제주 with kakao
                      <span className="screen_out">사이트 바로가기</span>
                      <OutlickIcon className={"ico_outlink"} />
                    </span>
                  </a>
                </li>
              </ul>
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
