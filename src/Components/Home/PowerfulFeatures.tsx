import React from 'react';
import Visibale from '../../HOC/withVisibale';
import { useTranslation } from 'react-i18next';
import { FaReact, FaGithub, FaFigma, FaSearchengin, FaSass,FaLaravel, FaPhp } from 'react-icons/fa';
import { SiTypescript, SiSolidity, SiDesignernews } from 'react-icons/si';
import { GrShareRounded } from "react-icons/gr";
import { AiOutlineConsoleSql } from "react-icons/ai";

const PowerfulFeatures = () => {
  const { t } = useTranslation();

  const skillsData = [
    { title: 'React', icon: <FaReact /> },
    { title: 'TypeScript', icon: <SiTypescript /> },
    { title: 'Laravel', icon: <FaLaravel /> },
    { title: 'php', icon: <FaPhp /> },
    
    { title: 'sql/mysql', icon: <AiOutlineConsoleSql /> },
    { title: 'allUIFrameworks', icon: <FaSass /> },
    { title: 'Figma', icon: <FaFigma /> },
    { title: 'GitHub', icon: <FaGithub /> },
    
    { title: 'solidPrinciples', icon: <SiSolidity /> },
    { title: 'SEO', icon: <FaSearchengin /> },
    { title: 'oop', name: "OOP" },
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
