import React from 'react';
import { Button } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="subscriber">
      <div className="footer_inner container d-flex">
        <div className="card card-left">
          <h3 className="title">Subscribe to our newsletter for development news!</h3>
          <form className="hs-form stacked hs-form-private d-flex">
            <div className="input mr-2">
              <input className="form-control" type="email" name="email" placeholder="Insert your email" />
            </div>
            <div className="actions">
              <Button variant="primary">Subscribe</Button>
            </div>
          </form>
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
          <img alt="subscribe" src="assets/img/launch/phone.png" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
