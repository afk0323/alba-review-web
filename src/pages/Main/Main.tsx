import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import UserJoin from '../UserJoin/UserJoin';
import UserInfo from '../UserInfo/UserInfo';
import Title from './Title/Title';

function Main() {
  return (
    <div className="Main">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Title />
              </>
            }
          />
          <Route path="/userjoin" element={<UserJoin />} />
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;
