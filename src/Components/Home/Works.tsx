import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
import KarimField from '../Karimalden/KarimField';
import WorksForm from '../Works/WorksForm';
import { SelectedOptions } from '../Works/WorksConfige';
import { FaCircle } from "react-icons/fa";


const Works = () => {
    const {t} = useTranslation();
    const [filteredLinks, setFilteredLinks] = useState([
        {name: "",
        link: "",
        img: "",
        projectType_id: 1
        }
    ]);



    // 1 = landing page
    // 2 = ecommerce
    // 3 = dashboard 

    const ProjectsArray = [
        { name:"Qtrend", link: 'https://qtrendqa.com', img: "/Layout/KarimLogo.svg", projectType_id:1 },
        { name:"Bright Dent", link: 'https://bright-dent-website.vercel.app', img: "/Layout/KarimLogo.svg", projectType_id:1 },
        { name:"Elite Auction", link: 'https://malnokhba.qa', img: "/Layout/KarimLogo.svg", projectType_id:1 },
        { name:"Etaxi", link: 'https://etaxi-landingpage.vercel.app', img: "/Layout/KarimLogo.svg", projectType_id:1 },
        { name:"Medical", link: 'https://ahldubai-amin.vercel.app', img: "/Layout/KarimLogo.svg", projectType_id:1 },
        { name:"Nokhbeh Arabia", link: 'https://qtrendqa.com3', img: "/Layout/KarimLogo.svg", projectType_id:1 },
        { name:"Optimum", link: 'https://optimum-ihg.com', img: "/Layout/KarimLogo.svg", projectType_id:1 },
        { name:"SDNone", link: 'https://sdnone-mhmadkarimaldeen-gmailcom.vercel.app',linkName:'https://sdnone.vercel.app', img: "/Layout/KarimLogo.svg", projectType_id:1 },
        { name:"4Leaf_Shein", link: 'https://4-leaf-shein-landing-page.vercel.app/',linkName:'https://4leaf_shein.vercel.app', img: "/Layout/KarimLogo.svg", projectType_id:1 },

        { name:"KarmaCoin", link: 'https://karmaantiquecoin.com', img: "/Layout/KarimLogo.svg", projectType_id:2 },
        { name:"Qtrend", link: 'https://qtrendqa.com', img: "/Layout/KarimLogo.svg", projectType_id:2 },
        { name:"KarimEcommerce", link: 'https://karimalden-ecommerce.vercel.app/',linkName:"https://KarimEcommerce.com", img: "/Layout/KarimLogo.svg", projectType_id:2 },
      ];

    //   const Selected_Project_Type_ID = localStorage.getItem("SelcetedID")

    //   useEffect (()=>{
    //     // Get the selected project type ID from local storage
    //     // const selectedID = ;
    //     setSelectedProjectTypeID(Selected_Project_Type_ID);
    // }, []);

    // useEffect (()=>{
    //     if (selectedProjectTypeID) {
    //         // Filter the skills data based on the selected project type ID
    //         const filteredData = skillsData.filter(skill => skill.projectType_id === Number(selectedProjectTypeID));
    //         // Update the state with the filtered links
    //         setFilteredLinks(filteredData);
    //     }
    // }, [selectedProjectTypeID]);

  return (
    <div className='Works' id='works'>
        <h1>{t("Works")}</h1>
        <div className='select_works'>
            <div className='select_project'>
                <h3>{t("Select Project type:")}</h3>
                <WorksForm/>
            </div>
            
            
        </div>
        <div className='links'>
                <h3>{t("Projects")}</h3>
                <div className='links_container'>
                        {/* {filteredLinks.map((link:any, index:number) => {
                            // console.log(link);
                           return (
                            <div key={index}>
                                <Link to={link.link}>{link.link}</Link>
                                <img style={{background: "black"}} src={link.img} alt="KarimLogo" />
                            </div>
                        )
                      }
                    )} */}
                    
                    {
                        ProjectsArray.map((project:any,index:number)=>{
                            return(
                                <div className='oneLink' key={index}>
                                    <h4>Name: <span>{project?.name}</span></h4>
                                    <Link className='Link' to={project?.link}>Link: <span>{project?.linkName ? project?.linkName :project?.link}</span></Link>
                                    <p>Project Images:</p>
                                    <div className='images'>
                                        <img style={{background:"black"}} src={project.img}/>
                                        <img style={{background:"black"}} src={project.img}/>
                                        <img style={{background:"black"}} src={project.img}/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    </div>
  )
}

export default Works