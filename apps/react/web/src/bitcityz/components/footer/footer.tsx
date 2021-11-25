import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="subscriber">
      <div className="footer_inner container d-flex justify-content-between flex-wrap">
        <div className="card card-left">
          <div id="footerHSForm"></div>
          <div className="icon-social">
            <div className="mt-3 mb-3">
              <span className="sub-title">Follow us on our channels</span>
            </div>
            <div className="d-flex list-icon-social">
              <div>
                <a href="https://twitter.com/BitCity_Z" target="_blank">
                  <img alt="twitter" src="assets/img/launch/twitter_black.png" className="mrr-24" />
                </a>
              </div>
              <div>
                <a href="https://t.me/BitCityZSocial" target="_blank">
                  <img alt="telegram" src="assets/img/launch/telegram_black.png" className="mrr-24" />
                </a>
              </div>
              <div>
                <a href="https://medium.com/@bitcityz.social" target="_blank">
                  <img alt="medium" src="assets/img/launch/ie_black.png" className="mrr-24" />
                </a>
              </div>
              <div>
                <a href="https://medium.com/@bitcityz.social" target="_blank">
                  <img alt="medium" src="assets/img/launch/medium_icon.png" className="mrr-24" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-3 mb-3">
            <span>Copyright © BitcityZ 2021</span>
          </div>
        </div>
        <div className="card-right">
          <img alt="subscribe" src="assets/imgs/phone.png" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
