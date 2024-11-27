import React from 'react'
import { useTranslation } from 'react-i18next';
import { GoDotFill } from "react-icons/go";

interface WorkCard {
    title:string;
    description:string;
    feature1:string;
    feature2:string;
    feature3:string;
    projectType_id?:any;
    img:any;
}

const WorkCard = ({
    title,
    description,
    feature1,
    feature2,
    feature3,
    projectType_id,
    img}:WorkCard) => {
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

            <div>
              <img src={img} alt={title} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default WorkCard