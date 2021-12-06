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
                <a href="https://t.me/BitCityZSocial" target="_blank">
                  <img alt="telegram" src="/assets/icons/socials/telegram.svg" className="mrr-24" />
                </a>
              </div>
              <div>
                <a href="https://twitter.com/BitCityZ_social" target="_blank">
                  <img alt="twitter" src="/assets/icons/socials/twitter.svg" className="mrr-24" />
                </a>
              </div>
              <div>
                <a href="https://medium.com/@bitcityz.social" target="_blank">
                  <img alt="medium" src="/assets/icons/socials/medium.svg" className="mrr-24" />
                </a>
              </div>
              <div>
                <a href="https://discord.gg/yFwuxBME " target="_blank">
                  <img alt="discord" src="/assets/icons/socials/discord.svg" className="mrr-24" />
                </a>
              </div>
              <div>
                <a href="https://www.youtube.com/channel/UCC1X5Hsg0YQYkDsp6K4SzDQ" target="_blank">
                  <img alt="youtube" src="/assets/icons/socials/youtube.svg" className="mrr-24" />
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/bitcityz/ " target="_blank">
                  <img alt="facebook" src="/assets/icons/socials/facebook.svg" className="mrr-24" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-3 mb-3">
            <span>Join our Telegram Official Global Group</span>
            <div className="d-flex align-items-center mt-3">
              <img alt="telegram" src="/assets/icons/socials/telegram.svg" width="36" height="36" />{' '}
              <a className="ms-3" href="https://t.me/BitCityZSocial" target="_blank">
                <img alt="telegram" src="/assets/imgs/bitcityz-global-group.png" />
              </a>
            </div>
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
