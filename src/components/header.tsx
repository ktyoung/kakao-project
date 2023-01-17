import React, { useEffect, useState } from "react";

function Header() {
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
            </li>
            <li className="list_gnb_item">
              <a href="#">뉴스</a>
            </li>
            <li className="list_gnb_item">
              <a href="#">기술과 서비스</a>
            </li>
            <li className="list_gnb_item">
              <a href="#">약속과 책임</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
