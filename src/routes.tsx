/* eslint-disable max-lines-per-function */
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from 'src/pages/home';
import Examples from 'src/pages/_examples';
import ChangeLog from 'src/pages/_core/changelog';

const AppRoutes = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/examples' element={<Examples />} />
        <Route path='/changelog' element={<ChangeLog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
