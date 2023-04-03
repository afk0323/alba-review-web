/**
 * 로그인 전 : 로그인(클릭 시 회원가입[추가 정보 받기] or 로그인), 메뉴(홈으로, 로그인, 카카오톡 오픈채팅방, 의견 및 오류 제보, 사용설명서, 자주묻는 질문)
 * 로그인 후 : 닉네임(클릭 시 마이페이지로 이동), 메뉴(홈으로, 리뷰관리, 내정보변경, 로그아웃, 카카오톡 오픈채팅방, 의견 및 오류 제보, 사용설명서, 자주묻는 질문)
 */
import React, { useState } from 'react';
import LoginModal from './LoginModal/LoginModal';
import LoginButton from './LoginButton/LoginButton';
import './Header.scss';

function Header() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div className="Header">
      <div className="login-modal">
        <button onClick={handleClick}>로그인</button>
        <LoginModal visible={showModal} onClose={() => setShowModal(false)}>
          <p className="icon">🥷</p>
          <p className="ment">나의 후기를 모두에게 알리고 싶다면</p>
          <LoginButton platform={'Naver 로그인'} backgroundColor={'#02c73c'} />
          <LoginButton platform={'KaKao 로그인'} backgroundColor={'#fae100'} />
          <LoginButton platform={'Google 로그인'} backgroundColor={'#000000'} />
        </LoginModal>
      </div>
    </div>
  );
}

export default Header;
