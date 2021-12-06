import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, LaunchPool } from '../scenes';
import { Footer, Header } from '../components';
// import { getAppEnv } from '../utils';
// alert(
//   getAppEnv()
// )

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/launchpool" element={<LaunchPool />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default App;
