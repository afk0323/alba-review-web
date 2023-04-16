/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Title from './Title/Title';
import LocationButton from './LocationButton/LocationButton';
import UserJoin from '../UserJoin/UserJoin';
import UserInfo from '../UserInfo/UserInfo';
import Map from '../Map/Map';

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
                <LocationButton />
              </>
            }
          />
          <Route path="/userjoin" element={<UserJoin />} />
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/map" element={<Map />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;
