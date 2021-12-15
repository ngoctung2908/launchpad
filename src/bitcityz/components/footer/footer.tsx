import React from 'react'
import telegramSvg from '../../assets/icons/socials/telegram.svg'
import twitterSvg from '../../assets/icons/socials/twitter.svg'
import mediumSvg from '../../assets/icons/socials/medium.svg'
import discordSvg from '../../assets/icons/socials/discord.svg'
import youtubeSvg from '../../assets/icons/socials/youtube.svg'
import facebookSvg from '../../assets/icons/socials/facebook.svg'
import bitcityzGlobalGroupPng from '../../assets/imgs/bitcityz-global-group.png'
import phonePng from '../../assets/imgs/phone.png'

const Footer: React.FC = () => {
  return (
    <footer className="subscriber">
      <div className="footer_inner container d-flex justify-content-between flex-wrap">
        <div className="card card-left">
          <div id="footerHSForm" />
          <div className="icon-social">
            <div className="mt-3 mb-3">
              <span className="sub-title">Follow us on our channels</span>
            </div>
            <div className="d-flex list-icon-social">
              <div>
                <a href="https://t.me/BitCityZSocial" target="_blank" rel="noreferrer">
                  <img alt="telegram" src={telegramSvg} className="mrr-24" />
                </a>
              </div>
              <div>
                <a href="https://twitter.com/BitCityZ_social" target="_blank" rel="noreferrer">
                  <img alt="twitter" src={twitterSvg} className="mrr-24" />
                </a>
              </div>
              <div>
                <a href="https://medium.com/@bitcityz.social" target="_blank" rel="noreferrer">
                  <img alt="medium" src={mediumSvg} className="mrr-24" />
                </a>
              </div>
              <div>
                <a href="https://discord.gg/yFwuxBME " target="_blank" rel="noreferrer">
                  <img alt="discord" src={discordSvg} className="mrr-24" />
                </a>
              </div>
              <div>
                <a href="https://www.youtube.com/channel/UCC1X5Hsg0YQYkDsp6K4SzDQ" target="_blank" rel="noreferrer">
                  <img alt="youtube" src={youtubeSvg} className="mrr-24" />
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/bitcityz/ " target="_blank" rel="noreferrer">
                  <img alt="facebook" src={facebookSvg} className="mrr-24" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-3 mb-3">
            <span>Join our Telegram Official Global Group</span>
            <div className="d-flex align-items-center mt-3">
              <img alt="telegram" src={telegramSvg} width="36" height="36" />{' '}
              <a className="ms-3" href="https://t.me/BitCityZSocial" target="_blank" rel="noreferrer">
                <img alt="telegram" src={bitcityzGlobalGroupPng} />
              </a>
            </div>
          </div>
        </div>
        <div className="card-right">
          <img alt="subscribe" src={phonePng} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
