import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, LaunchPool } from '../scenes';
import { Footer, Header } from '../components';
import { connectBinanceWallet, connectMetaMaskWallet, getWeb3Instance } from '../utils';

const Test = () => {
  const onConnect1 = async () => {
    const connectResult = await connectMetaMaskWallet();
    console.log('connectResult', connectResult);
    console.log('metamask account', window.account);
  };

  const onConnect2 = async () => {
    const connectResult = await connectBinanceWallet();
    console.log('connectResult', connectResult);
    console.log('binace account', window.account);
  };

  return (
    <React.Fragment>
      <button onClick={onConnect1}>connect Metamask</button>
      <button onClick={onConnect2}>connect Binace</button>
    </React.Fragment>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/launchpool" element={<LaunchPool />} />
          <Route path="/test" element={<Test />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default App;
