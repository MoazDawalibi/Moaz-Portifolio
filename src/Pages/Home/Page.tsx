import { lazy, useState } from 'react';

const Works = lazy(() => import('../../Components/Home/Works'));
const HeroSection = lazy(() => import('../../Components/Home/HeroSection'));
const PowerfulFeatures = lazy(() => import('../../Components/Home/PowerfulFeatures'));
const AboutUs = lazy(() => import('../../Components/Home/AboutUs'));
const OurHow = lazy(() => import('../../Components/Home/LookingFor'));
const Questions = lazy(() => import('../../Components/Home/Questions'));
const Contact = lazy(() => import('../../Components/Home/Contact'));


const Page = () => {
   const [globalProjectTypeId , setGlobalProjectTypeId] = useState(1);
  return (
    <div className='Home_Page'>
      <HeroSection/>
      <Works globalProjectTypeId={globalProjectTypeId} setGlobalProjectTypeId={setGlobalProjectTypeId}/>
      <PowerfulFeatures/>
      <AboutUs/>
      {/* <OurHow/> */}
      <Questions/>
      <Contact/>
    </div>
  )
}

export default Page