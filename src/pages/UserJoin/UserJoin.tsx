/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './UserJoin.scss';

function UserJoin() {
  const [nickname, setNickname] = useState('');
  const [isNicknameDuplicated, setIsNicknameDuplicated] = useState(false);
  const [birthday, setBirthday] = useState(new Date());
  const [gender, setGender] = useState('');
  const navigate = useNavigate();

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleCheckDuplicate = () => {
    // 중복확인 버튼을 눌렀을 때 중복된 닉네임이 있는지 체크하는 로직
    // 중복된 닉네임이 있다면 setIsNicknameDuplicated(true) 호출
  };

  const handleBirthdayChange = (date: Date) => {
    // 생년월일을 선택할 때마다 호출되는 콜백 함수
    setBirthday(date);
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  const handleStart = () => {
    // 시작하기 버튼을 눌렀을 때 호출되는 함수
    // 입력된 정보를 서버로 전송하고 다음 페이지로 이동하는 로직
    navigate('/userinfo');
  };

  return (
    <div className="Main-userjoin">
      <div className="joinform">
        <p className="join">회원가입 💬</p>
        {/* 닉네임 */}
        <div className="nickname">
          <label htmlFor="nickname-input">닉네임</label>
          <input id="nickname-input" type="text" value={nickname} onChange={handleNicknameChange} />
          <button onClick={handleCheckDuplicate}>중복확인</button>
          {isNicknameDuplicated && <p>이미 사용중인 닉네임입니다.</p>}
        </div>
        <div className="choice">
          {/* 생년월일 */}
          <div className="birthday">
            <label>생년월일</label>
            <DatePicker selected={birthday} onChange={handleBirthdayChange} />
          </div>
          {/* 성별 */}
          <div className="gender">
            <label>성별</label>
            <div>
              <label className="sex">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={handleGenderChange}
                />
                <span className="radio-label">남성</span>
              </label>
              <label className="sex">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={handleGenderChange}
                />
                <span className="radio-label">여성</span>
              </label>
            </div>
          </div>
        </div>
        {/* 시작하기 */}
        <div className="start">
          <button onClick={handleStart}>시작하기</button>
        </div>
      </div>
    </div>
  );
}

export default UserJoin;
