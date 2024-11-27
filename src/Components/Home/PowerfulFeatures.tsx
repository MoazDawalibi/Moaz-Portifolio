import React from 'react';
import Visibale from '../../HOC/withVisibale';
import { useTranslation } from 'react-i18next';
import { FaReact, FaGithub, FaFigma, FaSearchengin, FaSass,FaLaravel, FaPhp,FaVuejs  } from 'react-icons/fa';
import { SiTypescript, SiSolidity, SiDesignernews } from 'react-icons/si';
import { GrShareRounded } from "react-icons/gr";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiNextdotjs } from "react-icons/si";

const PowerfulFeatures = () => {
  const { t } = useTranslation();

  const skillsData = [
    { title: 'React', icon: <FaReact /> },
    { title: 'TypeScript', icon: <SiTypescript /> },
    { title: 'Laravel', icon: <FaLaravel /> },
    { title: 'next', icon: <SiNextdotjs /> },
    
    { title: 'vue', icon: <FaVuejs /> },
    { title: 'sql/mysql', icon: <AiOutlineConsoleSql /> },
    { title: 'Dp', name: "DP" },
    { title: 'solidPrinciples', icon: <SiSolidity /> },
    // { title: 'GitHub', icon: <FaGithub /> },
    
    { title: 'SEO', icon: <FaSearchengin /> },
    { title: 'oop', name: "OOP" },
    { title: 'allUIFrameworks', icon: <FaSass /> },
    { title: 'Figma', icon: <FaFigma /> },
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
