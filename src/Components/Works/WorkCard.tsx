import React from 'react'
import { useTranslation } from 'react-i18next';
import { GoDotFill } from "react-icons/go";
import { Link } from 'react-router-dom';

interface WorkCard {
    title:string;
    description:string;
    feature1:any;
    feature2:any;
    feature3:any;
    projectType_id?:any;
    img:any;
    linkName?:any;
    link?:any
}

const WorkCard = ({
    title,
    description,
    feature1,
    feature2,
    feature3,
    projectType_id,
    img,
    linkName,
    link}:WorkCard) => {
      const {t} = useTranslation();
  return (
    <div key={projectType_id} className='new_work_card'>
        <h2>{t(title)}</h2>
        <p>{t(description)}</p>
        <div className='features_container'>
          <h4>{t("Key Features")} :</h4>
          <div>
            <div>
              <span><GoDotFill/> <p>{t(feature1)}</p></span>
              <span><GoDotFill/> <p>{t(feature2)}</p></span>
              <span><GoDotFill/> <p>{t(feature3)}</p></span>
            </div>
            {link &&
              <div>
                <h4>{t("Link")} :</h4>
                <p>
                  <Link className='Link' to={link}>{t("View")}: {title}</Link>
                </p>
              </div>
             }
            <div>
              <img src={img} alt={title} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default WorkCard