import { Button, Divider } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='Footer'>
      <div>
        <div>
          <h1>{t('Moaz Dawalibi')}</h1>
          <p>{t('footer.description')}</p>
        </div>
        <div className='ContactFooter'>
          <h1>{t('footer.contact.title')}</h1>
          <h2>{t('footer.contact.phone')}</h2>
          <h3>{t('moaazaldwalibi@gmail.com')}</h3>
        </div>
      </div>
      <Divider />
      <span>
        <div>
          {t('footer.rightsReserved')}
        </div>
        <div className='footer_privacy'>
          <span>
            {t('footer.privacyPolicy')}
          </span>
          <span>
            {t('footer.cookiePolicy')}
          </span>
        </div>
      </span>
    </div>
  );
}

export default Footer;
