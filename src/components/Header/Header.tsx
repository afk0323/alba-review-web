/**
 * 로그인 전 : 로그인(클릭 시 회원가입[추가 정보 받기] or 로그인), 메뉴(홈으로, 로그인, 카카오톡 오픈채팅방, 의견 및 오류 제보, 사용설명서, 자주묻는 질문)
 * 로그인 후 : 닉네임(클릭 시 마이페이지로 이동), 메뉴(홈으로, 리뷰관리, 내정보변경, 로그아웃, 카카오톡 오픈채팅방, 의견 및 오류 제보, 사용설명서, 자주묻는 질문)
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <div className="Header">
      <nav>
        <ul>
          <li>
            <Link to="/login">
              <span className="phrase">🥷 로그인</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
