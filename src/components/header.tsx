import React, { useEffect, useState } from "react";

function Header() {
  let gnb_item = document.querySelectorAll(".list_gnb_item");
  useEffect(() => {
    for (let i = 0; i < gnb_item.length; i++) {
      gnb_item[i].addEventListener("click", function (e) {
        let click_menu = e.target as HTMLElement;
        console.log(click_menu.parentElement);
      });
    }
  }, []);

  return (
    <header className="doc-header head_type1" style={{ borderBottom: "none" }}>
      <div className="wrap_header">
        <h1 className="doc-title">
          <a href="#">
            <img src="/images/logo.png" alt="로고" className="ico_logo" />
          </a>
        </h1>
        <nav id="gnbContent" className="doc-gnb">
          <h2 className="screen_out">메인메뉴</h2>
          <ul className="list_gnb">
            <li className="list_gnb_item">
              <a href="#">카카오</a>
              <ul className="list_sub">
                <li>
                  <a href="#">카카오 문화</a>
                </li>
                <li>
                  <a href="#">공동체</a>
                </li>
                <li>
                  <a href="#">히스토리</a>
                </li>
              </ul>
            </li>
            <li className="list_gnb_item">
              <a href="#">뉴스</a>
            </li>
            <li className="list_gnb_item">
              <a href="#">기술과 서비스</a>
              <ul className="list_sub">
                <li>
                  <a href="#">기술</a>
                </li>
                <li>
                  <a href="#">서비스</a>
                </li>
              </ul>
            </li>
            <li className="list_gnb_item">
              <a href="#">약속과 책임</a>
              <ul className="list_sub">
                <li>
                  <a href="#">ESG</a>
                </li>
                <li>
                  <a href="#">소셜임팩트</a>
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
