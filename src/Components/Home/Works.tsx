// import React, { useEffect, useState } from 'react'
// import { useTranslation } from 'react-i18next'
// import { Link } from 'react-router-dom';
// import WorksForm from '../Works/WorksForm';
// import { ProjectsArray } from '../Works/WorksConfige';
// import WorkCard from '../Works/WorkCard';


// const Works = ({globalProjectTypeId,setGlobalProjectTypeId}:any) => {
//     const {t} = useTranslation();
//     const [filteredLinks, setFilteredLinks] = useState([
//         {title: "",
//         // link: "",
//         img: "",
//         projectType_id: 1,}]);


//     useEffect (()=>{
//         if (globalProjectTypeId === 1) {
//             const AllData = ProjectsArray.filter(skill => skill.projectType_id === 1 || 2 || 3 || 4);
//             setFilteredLinks(AllData);
//         } else {
//             const filteredData = ProjectsArray.filter(skill => skill.projectType_id === Number(globalProjectTypeId));
//             setFilteredLinks(filteredData);
//         }
//     }, [globalProjectTypeId]);

//   return (
//     <div className='Works' id='works'>
//         <h1>{t("Some Works")}</h1>
//         <div className='select_works'>
//             <div className='select_project'>
//                 <h3>{t("Select Project type")}:</h3>
//                 <WorksForm globalProjectTypeId={globalProjectTypeId} setGlobalProjectTypeId={setGlobalProjectTypeId} />
//             </div>
            
            
//         </div>
//         <div className='links'>
//                 <h3>{t("Projects")}</h3>
//                 <div className='links_container'>
//                     {filteredLinks.map((project:any, index:number) => {
//                         return (
//                             // <div className='oneLink' key={index}>
//                             //     <p>{t("Project Images")}:</p>
//                             //     <div className='images'>
//                             //         <img style={{background:"black"}} src={project.img}/>
//                             //         <img className='second' style={{background:"black"}} src={project.img}/>
//                             //         <img className='third' style={{background:"black"}} src={project.img}/>
//                             //     </div>
//                             //     <h4>{t("Name")}: <span>{project?.name}</span></h4>
//                             //     {/* {project?.link && <Link className='Link' to={project?.link}>{t("Link")}: <span>{project?.linkName ? project?.linkName :project?.link}</span></Link> } */}
//                             // </div>
//                             <WorkCard
//                                 key={project?.projectType_id}
//                                 img={project?.img}
//                                 title={project?.title}
//                                 description={project?.description}
//                                 feature1={project?.feature1}
//                                 feature2={project?.feature2}
//                                 feature3={project?.feature3}
//                                 projectType_id={project?.projectType_id}
//                           />
//                         )}
//                     )}
//                 </div>
//             </div>
//     </div>
//   )
// }

// export default Works





import React, { useEffect, useState } from 'react';
import { Pagination } from 'antd';
import { useTranslation } from 'react-i18next';
import WorksForm from '../Works/WorksForm';
import WorkCard from '../Works/WorkCard';
import { ProjectsArray, ProjectsArrayProps } from '../Works/WorksConfige';

const Works = ({ globalProjectTypeId, setGlobalProjectTypeId }: any) => {
    const { t } = useTranslation();
    const [filteredLinks, setFilteredLinks] = useState<ProjectsArrayProps[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(3); // Default page size

    useEffect(() => {
        // Filter the data based on project type
        const filteredData =
            globalProjectTypeId === 1
                ? ProjectsArray.filter(
                      (skill) =>
                          skill.projectType_id === 1 ||
                          skill.projectType_id === 2 ||
                          skill.projectType_id === 3 ||
                          skill.projectType_id === 4
                  )
                : ProjectsArray.filter((skill) => skill.projectType_id === Number(globalProjectTypeId));

        setFilteredLinks(filteredData);

        // Reset the page to 1 whenever filters change
        setCurrentPage(1);
    }, [globalProjectTypeId]);

    // Calculate paginated data
    const totalPages = Math.ceil(filteredLinks.length / pageSize);
    const adjustedCurrentPage = Math.min(currentPage, totalPages || 1); // Ensure current page is within valid range
    const paginatedLinks = filteredLinks.slice(
        (adjustedCurrentPage - 1) * pageSize,
        adjustedCurrentPage * pageSize
    );

    return (
        <div className="Works" id="works">
            <h1>{t('Some Works')}</h1>
            <div className="select_works">
                <div className="select_project">
                    <h3>{t('Select Project type')}:</h3>
                    <WorksForm
                        globalProjectTypeId={globalProjectTypeId}
                        setGlobalProjectTypeId={setGlobalProjectTypeId}
                    />
                </div>
            </div>
            <div className="links">
                <h3>{t('Projects')}</h3>
                <div className="links_container">
                    {paginatedLinks.map((project: ProjectsArrayProps) => (
                        <WorkCard
                            key={`${project.projectType_id}-${project.title}`} // Unique key
                            img={project.img}
                            title={project.title}
                            description={project.description}
                            feature1={project.feature1}
                            feature2={project.feature2}
                            feature3={project.feature3}
                            projectType_id={project.projectType_id}
                        />
                    ))}
                </div>
                <Pagination
                    current={adjustedCurrentPage}
                    pageSize={pageSize}
                    total={filteredLinks.length}
                    onChange={(page, size) => {
                        setCurrentPage(page);
                        setPageSize(size);
                    }}
                    showSizeChanger
                />
            </div>
        </div>
    );
};

export default Works;
