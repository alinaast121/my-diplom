import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Links } from './Links';
import { Glav } from './Glav';
import { LK } from './LK';
import { LKPicture } from './LKPicture';
import { LoadPicture } from './LoadPicture';
import { Login } from './Login';
import { Sigin } from './Sigin';

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/" element={<Links />} />
        <Route path="/glavst" element={<Glav />} />
        <Route path="/lika:id" element={<LK />} />
        <Route path="/likapicture:id" element={<LKPicture />} />
        <Route path="/loadingpicture" element={<LoadPicture />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sigin" element={<Sigin />} />
      </Routes>
    );
  }
  
  return (
    <Routes>
      <Route path="/" element={<Links />} />
    </Routes>
  );
};