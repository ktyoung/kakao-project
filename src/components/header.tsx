import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import Culture from "../pages/page/kakao/kakaoCulture";

function Header() {
  function link_menu0() {
    document.querySelectorAll(".list_gnb > li")[2].classList.remove("on");
    document.querySelectorAll(".list_gnb > li")[3].classList.remove("on");
    document.querySelectorAll(".list_gnb > li")[0].classList.toggle("on");
  }

  function link_menu2() {
    document.querySelectorAll(".list_gnb > li")[0].classList.remove("on");
    document.querySelectorAll(".list_gnb > li")[3].classList.remove("on");
    document.querySelectorAll(".list_gnb > li")[2].classList.toggle("on");
  }

  function link_menu3() {
    document.querySelectorAll(".list_gnb > li")[0].classList.remove("on");
    document.querySelectorAll(".list_gnb > li")[2].classList.remove("on");
    document.querySelectorAll(".list_gnb > li")[3].classList.toggle("on");
  }

  return (
    <header className="doc-header head_type1" style={{ borderBottom: "none" }}>
      <div className="wrap_header">
        <h1 className="doc-title">
          <Link to="/">
            <img src="/images/logo.png" alt="로고" className="ico_logo" />
          </Link>
        </h1>
        <nav id="gnbContent" className="doc-gnb">
          <h2 className="screen_out">메인메뉴</h2>
          <ul className="list_gnb">
            <li>
              <a className="link_menu" onClick={link_menu0}>
                카카오
              </a>
              <ul className="list_sub">
                <li>
                  <Link to="/kakaoCulture">카카오 문화</Link>
                </li>
                <li>
                  <Link to="/subsidiaryCompany">공동체</Link>
                </li>
                <li>
                  <Link to="/history">히스토리</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/news" className="link_menu">
                뉴스
              </Link>
            </li>
            <li>
              <a className="link_menu" onClick={link_menu2}>
                기술과 서비스
              </a>
              <ul className="list_sub">
                <li>
                  <Link to="/tech">기술</Link>
                </li>
                <li>
                  <Link to="/service">서비스</Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="link_menu" onClick={link_menu3}>
                약속과 책임
              </a>
              <ul className="list_sub">
                <li>
                  <Link to="/esg">ESG</Link>
                </li>
                <li>
                  <Link to="/social">소셜임팩트</Link>
                </li>
                <li>
                  <a href="#">디지털 권리</a>
                </li>
                <li>
                  <a href="#">AI 윤리</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
