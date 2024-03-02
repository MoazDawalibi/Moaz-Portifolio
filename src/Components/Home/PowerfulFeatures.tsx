import React from 'react';
import Visibale from '../../HOC/withVisibale';
import { useTranslation } from 'react-i18next';
import { FaReact, FaGithub, FaFigma, FaSearchengin, FaSass } from 'react-icons/fa';
import { SiTypescript, SiSolidity, SiDesignernews } from 'react-icons/si';
import { GrShareRounded } from "react-icons/gr";

const PowerfulFeatures = () => {
  const { t } = useTranslation();

  const skillsData = [
    { title: 'React', icon: <FaReact /> },
    { title: 'TypeScript', icon: <SiTypescript /> },
    { title: 'allUIFrameworks', icon: <FaSass /> },
    { title: 'solidPrinciples', icon: <SiSolidity /> },
    { title: 'GitHub', icon: <FaGithub /> },
    { title: 'SEO', icon: <FaSearchengin /> },
    { title: 'Figma', icon: <FaFigma /> },
    { title: 'Dp', name: "DP" },
  ];

  return (
    <div className="PowerfulFeatures" id='features'>
      <div className="in">
        <h1>{t('powerfulFeatures.title')}</h1>
        <Visibale className='Features'>
          {skillsData?.map((item: any, index: number) => (
            <div className="Feature" key={index}>
              {item?.icon ? item?.icon : <h2> {item?.name}</h2>}
              <h1 className='h1'>{t(`powerfulFeatures.skills.${item?.title.toLowerCase()}`)}</h1>
            </div>
          ))}
        </Visibale>
      </div>
    </div>
  );
};

export default PowerfulFeatures;
