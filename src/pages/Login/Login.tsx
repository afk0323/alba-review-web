/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * 소셜 로그인
 */
import React, { useState } from 'react';
import NaverLogin from '../../components/NaverLogin/NaverLogin';
import './Login.scss';

interface NaverUser {
  id: string;
  nickname: string;
  email: string;
  gender: string;
  age: string;
  birthday: string;
  profileImage: string;
  name: string;
}

function Login() {
  const [userInfo, setUserInfo] = useState<NaverUser | null>(null);
  const handleLoginSuccess = (user: NaverUser) => {
    setUserInfo(user); // 성공적으로 access token을 받아왔을 때 실행할 로직
  };

  return (
    <div className="Login">
      <p className="phrase">알바생은 퇴사 후 리뷰를 남긴다..🔪</p>
      <NaverLogin onLoginSuccess={handleLoginSuccess} />
    </div>
  );
}

export default Login;
