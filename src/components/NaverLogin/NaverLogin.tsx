/* eslint-disable @typescript-eslint/no-use-before-define */
/**
 * 나중에 더 자세히 설정
 */
import React, { useEffect } from 'react';

declare global {
  interface Window {
    naver: any;
  }
}

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

interface NaverLoginProps {
  onLoginSuccess: (user: NaverUser) => void;
}

const NaverLogin: React.FC<NaverLoginProps> = ({ onLoginSuccess }) => {
  useEffect(() => {
    initNaverLogin();
  }, []);

  const initNaverLogin = () => {
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: 'ogy1mDGaPwWL14LQCW9B',
      callbackUrl: 'http://localhost:3000/userjoin',
      isPopup: false,
      callbackHandle: true,
      loginButton: {
        color: 'green',
        type: 3,
        height: 40,
      },
    });
    naverLogin.init();
    window.addEventListener('load', () => {
      naverLogin.getLoginStatus((status: boolean) => {
        if (status) {
          const profile = naverLogin.getProfileData();
          const user: NaverUser = {
            id: profile.id,
            nickname: profile.nickname,
            email: profile.email,
            gender: profile.gender,
            age: profile.age,
            birthday: profile.birthday,
            profileImage: profile.profile_image,
            name: profile.name,
          };
          onLoginSuccess(user);
        }
      });
    });
  };

  return <div id="naverIdLogin" />;
};

export default NaverLogin;
