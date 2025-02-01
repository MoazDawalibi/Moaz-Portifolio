interface SelectedOptionsProps {
    Project_type:string,
    id:number
}

// interface ProjectsArrayProps {
//     name:string,
//     link?:string,
//     linkName?:string,
//     img:string,
//     projectType_id:number
// }

export interface ProjectsArrayProps {
    title:string;
    description:string;
    feature1:string;
    feature2:string;
    feature3:string;
    projectType_id:any;
    img:any;
    link?:string;
    linkName?:string;
}
export const SelectedOptionsArray:SelectedOptionsProps[] = [
    {Project_type:"All",id:1},
    {Project_type:"Landing Page",id:2},
    {Project_type:"E-commerce",id:3},
    {Project_type:"Dashboard",id:4},

]

export const SelectedOptions = SelectedOptionsArray?.map( (e) =>  ({
    label:e?.Project_type ,
    value:e.id
  }))

// export const ProjectsArray:ProjectsArrayProps[] = [
//     { name:"Qtrend", link: 'https://qtrendqa.com', img: "/works/Qtrend.png",linkName:"Qtrend.com", projectType_id:2 },
//     { name:"Misbar", link: 'https://4-leaf-shein-landing-page.vercel.app/',linkName:'Misbar.com', img: "/works/Misbar.png", projectType_id:2 },
//     { name:"Bright Dent", link: 'https://bright-dent-website.vercel.app',linkName:"BrightDent.com", img: "/works/Bright.png", projectType_id:2 },
//     { name:"Elite Auction", link: 'https://malnokhba.qa', img: "/works/Nokhbeh.png",linkName:"ELiteAuction.com", projectType_id:2 },
//     { name:"Etaxi", link: 'https://etaxi-landingpage.vercel.app', img: "/works/Etaxi.png",linkName:"Etaxi.com", projectType_id:2 },
//     { name:"Optimum", link: 'https://optimum-ihg.com', img: "/works/Optimum.png",linkName:"Optimum.com", projectType_id:2 },
//     { name:"SDNone", link: 'https://sdnone-mhmadkarimaldeen-gmailcom.vercel.app',linkName:'sdnone.com', img: "/works/Sdnone.png", projectType_id:2 },
//     { name:"4Leaf_Shein", link: 'https://4-leaf-shein-landing-page.vercel.app/',linkName:'4leaf_shein.com', img: "/works/Fshein.png", projectType_id:2 },
    
    
//     { name:"KarmaCoin", link: 'https://karmaantiquecoin.com', linkName:"KarmaCoin.com",img: "/works/Karma.png", projectType_id:3 },
//     { name:"KarmaCoin V2", link: 'https://https://new-karma-coin.vercel.app/', linkName:"KarmaCoinV2.com",img: "/works/Karmav2.png", projectType_id:3 },
    
//     { name:"Qtrend", link: 'https://qtrendqa.com', img: "/works/Qtrend.png",linkName:"Qtrend.com", projectType_id:3 },
//     { name:"KareemEcommerce", link: 'https://karimalden-ecommerce.vercel.app/',linkName:"Kareem.com", img: "/works/Karim.png", projectType_id:3 },
//     { name:"Nokhbeh Arabia", link: 'https://NokhbehArabia.qa', img: "/works/NArabia.png",linkName:"NArabia.com", projectType_id:3 },
//     { name:"Dm", link: 'https://NokhbehArabia.qa', img: "/works/Dm.png",linkName:"Dm.com", projectType_id:3 },
//     { name:"Mns", link: 'https://NokhbehArabia.qa', img: "/works/Mns.png",linkName:"Mns.com", projectType_id:3 },
    
    
//     { name:"School System Dashboard", img: "/works/School.png", projectType_id:4 },
//     { name:"Elite Dashboard", img: "/works/NokhbehDash.png", projectType_id:4 },
//     { name:"Rayan Dashboard", img: "/works/RayanDash.png", projectType_id:4 },
//     { name:"Etaxi Dashboard", img: "/works/EtaxiDash.png", projectType_id:4 },
//     { name:"Qtrend Dashboard", img: "/works/QtrendDash.png", projectType_id:4 },
//     { name:"Dent Dashboard", img: "/works/BrightDash.png", projectType_id:4 },
//     { name:"Karma Dashboard", img: "/works/KarmaDash.png", projectType_id:4 },
//     { name:"SDNone Dashboard", img: "/works/SdnoneDash.png", projectType_id:4 },
// ];

// { name:"Medical", link: 'https://ahldubai-amin.vercel.app', img: "/works/KarimLogo.png",linkName:"ahldubai.com", projectType_id:2 },
// { name:"Nokhbeh Arabia", link: 'https://NokhbehArabia.com', img: "/works/KarimLogo.png",linkName:"NArabia.com", projectType_id:2 },
// { name:"Nokhbeh Dashboard", img: "/works/Dash.png", projectType_id:4 },
// { name:"Optimum Dashboard", img: "/works/Dash.png", projectType_id:4 },





export const ProjectsArray:ProjectsArrayProps[] = [
    {
        title: "Qtrend",
        description: "A platform for trend analysis and market insights.",
        feature1: "Real-time data visualization",
        feature2: "User-friendly interface for market tracking",
        feature3: "Customizable alerts and notifications",
        img: "/works/Qtrend.png",
        projectType_id: 2,
        link:"https://qtrend.vercel.app/"
      },
      {
        title: "Misbar",
        description: "Landing page for showcasing creative projects.",
        feature1: "Sleek and modern design",
        feature2: "Mobile-friendly responsiveness",
        feature3: "Integrated social media links",
        img: "/works/Misbar.png",
        projectType_id: 2,
        link:"https://misbar-landingpage.vercel.app/"
      },
      {
        title: "Bright Dent",
        description: "Website for a dental clinic offering advanced services.",
        feature1: "Appointment booking system",
        feature2: "Detailed service descriptions",
        feature3: "Interactive location map",
        img: "/works/Bright.png",
        projectType_id: 2,
        link:"https://bright-dent-website.vercel.app/"
      },
      {
        title: "Try Talabee",
        description: "An e-commerce platform for ordering food online from a restaurant.",
        feature1: "Seamless online food ordering",
        feature2: "Secure payment integration",
        feature3: "Real-time order tracking",
        img: "/works/talabee.png",
        projectType_id: 3,
        link: "https://talabee.vercel.app/"
      }, 
      {
        title: "AhlDubai",
        description: "A professional medical landing page providing healthcare services and patient care solutions.",
        feature1: "Detailed healthcare service descriptions",
        feature2: "Informative blog and health tips",
        feature3: "Contact and location details for easy access",
        img: "/works/aheldubai.png",
        projectType_id: 2,
        link: "https://medical-landing-page-iota.vercel.app/"
      },      
      {
        title: "Reco",
        description: "A Gloabal organization dedicated to raising awareness and reducing environmental pollution.",
        feature1: "Informative content on environmental impact",
        feature2: "Engaging visuals and eco-friendly tips",
        feature3: "Call-to-action for community participation",
        img: "/works/reco.png",
        projectType_id: 2,
        link: "https://recoproject.org/"
      },           
      {
        title: "Etaxi",
        description: "Landing page for a taxi service provider.",
        feature1: "Service area overview",
        feature2: "Contactless booking features",
        feature3: "Promotional offers display",
        img: "/works/Etaxi.png",
        projectType_id: 2,
        link:"https://taxi-app-landing-page.vercel.app/"
      },
      {
        title: "Zaker",
        description: 'AI-powered study companion for Baccalaureate prep.',
        feature1: "AI-driven study recommendations",
        feature2: "Interactive quizzes and progress tracking",
        feature3: "Comprehensive subject resources and summaries",
        img: "/works/zaker.png",
        projectType_id: 2,
        link: "https://zaker.vercel.app/"
      },      
      {
        title: "4Leaf",
        description: "Landing page for a fashion brand collaboration.",
        feature1: "Showcasing brand collections",
        feature2: "Embedded promotional videos",
        feature3: "Integrated feedback form",
        img: "/works/Fshein.png",
        projectType_id: 2,
        link:"https://4-leaf.vercel.app/"
      },
      {
        title: "Reco V2",
        description: "Interactive page promoting eco-friendly practices.",
        feature1: "Educational resources on environmental sustainability",
        feature2: "Interactive tools for carbon footprint reduction",
        feature3: "Community-driven initiatives for a greener future",
        img: "/works/recov2.png",
        projectType_id: 2,
        link: "https://reco-website.vercel.app/"
      },
      {
        title: "KarmaCoin V2",
        description: "Updated platform for advanced crypto trading.",
        feature1: "Improved trading algorithms",
        feature2: "New dashboard design",
        feature3: "Support for multiple cryptocurrencies",
        img: "/works/Karmav2.png",
        projectType_id: 3,
        link:"https://new-karma-coin.vercel.app/"
      },   
      {
        title: "SDNone",
        description: "Portfolio website for showcasing professional projects.",
        feature1: "Portfolio categorization",
        feature2: "High-quality image gallery",
        feature3: "Contact form integration",
        img: "/works/Sdnone.png",
        projectType_id: 2,
        link:"https://sdnone.vercel.app/"
      },
      {
        title: "Elite Auction",
        description: "An auction platform for premium items.",
        feature1: "Real-time bidding system",
        feature2: "Secure payment integration",
        feature3: "User management and analytics",
        img: "/works/Nokhbeh.png",
        projectType_id: 2,
        // link:"https://moaz.vercel.app/"
      },
      {
        title: "Optimum",
        description: "Corporate website for an industrial group.",
        feature1: "Comprehensive service showcase",
        feature2: "Corporate blog and updates",
        feature3: "Team and career sections",
        img: "/works/Optimum.png",
        projectType_id: 2,
        // link:"https://moaz.vercel.app/"
      },   
      {
        title: "KarmaCoin",
        description: "Cryptocurrency platform for coin transactions.",
        feature1: "Real-time market rates",
        feature2: "Secure wallet integration",
        feature3: "Transaction history tracking",
        img: "/works/Karma.png",
        projectType_id: 3,
        // link:"https://moaz.vercel.app/"
      },
      {
        title: "KareemEcommerce",
        description: "E-commerce platform for a wide range of products.",
        feature1: "Customizable shopping cart",
        feature2: "Secure payment gateway",
        feature3: "Order tracking and notifications",
        img: "/works/Karim.png",
        projectType_id: 3,
        link:"https://ecommerce-structure-six.vercel.app/"
      },
      {
        title: "Dm",
        description: "Business platform for project collaboration.",
        feature1: "Team management tools",
        feature2: "Integrated chat feature",
        feature3: "Document sharing and version control",
        img: "/works/Dm.png",
        projectType_id: 3,
        link:"https://dm-f9z6.vercel.app/"
      },
      {
        title: "Mns",
        description: "Landing page for a tech startup.",
        feature1: "Startup showcase",
        feature2: "Investor pitch section",
        feature3: "News and updates blog",
        img: "/works/Mns.png",
        projectType_id: 3,
        link:"https://mns-ecommerce.vercel.app/"
      },
      {
        title: "Nokhbeh Arabia",
        description: "A regional business website for networking.",
        feature1: "Dynamic user profiles",
        feature2: "Discussion forums",
        feature3: "Event calendar and updates",
        img: "/works/NArabia.png",
        projectType_id: 3,
        // link:"https://moaz.vercel.app/"
      },
      {
        title: "School System Dashboard",
        description: "Comprehensive dashboard for managing school operations.",
        feature1: "Attendance and grading systems",
        feature2: "Interactive class schedules",
        feature3: "Admin and teacher portals",
        img: "/works/School.png",
        projectType_id: 4,
        // link:"https://moaz.vercel.app/"
      },
      {
        title: "Zaker Dashboard",
        description: "Admin dashboard for managing study content and tracking user progress.",
        feature1: "Content management for study materials",
        feature2: "User performance analytics and insights",
        feature3: "Integration with AI-driven study recommendations",
        img: "/works/zaker_dashboard.png",
        projectType_id: 4,
      }, 
      {
        title: "Elite Dashboard",
        description: "Dashboard for managing auction events.",
        feature1: "Event scheduling tools",
        feature2: "Bidder analytics",
        feature3: "Secure data handling",
        img: "/works/NokhbehDash.png",
        projectType_id: 4,
        // link:"https://moaz.vercel.app/"
      },
      {
        title: "Rayan Dashboard",
        description: "Tailored dashboard for retail business management.",
        feature1: "Sales tracking and analytics",
        feature2: "Inventory management",
        feature3: "Staff performance monitoring",
        img: "/works/RayanDash.png",
        projectType_id: 4,
        // link:"https://moaz.vercel.app/"
      },
      {
        title: "Etaxi Dashboard",
        description: "Admin dashboard for managing taxi operations.",
        feature1: "Driver assignment and tracking",
        feature2: "Ride analytics",
        feature3: "Complaint and feedback management",
        img: "/works/EtaxiDash.png",
        projectType_id: 4,
        // link:"https://moaz.vercel.app/"
      },
      {
        title: "Qtrend Dashboard",
        description: "Dashboard for monitoring market trends.",
        feature1: "Customizable analytics",
        feature2: "Data export options",
        feature3: "User-defined alerts",
        img: "/works/QtrendDash.png",
        projectType_id: 4,
        // link:"https://moaz.vercel.app/"
      },
      {
        title: "Dent Dashboard",
        description: "Dashboard for dental clinic operations.",
        feature1: "Patient management system",
        feature2: "Billing and payments integration",
        feature3: "Service scheduling",
        img: "/works/BrightDash.png",
        projectType_id: 4,
        // link:"https://moaz.vercel.app/"
      },
      {
        title: "Karma Dashboard",
        description: "Cryptocurrency management dashboard.",
        feature1: "User portfolio tracking",
        feature2: "Real-time market analytics",
        feature3: "Trading tools",
        img: "/works/KarmaDash.png",
        projectType_id: 4,
        // link:"https://moaz.vercel.app/"
      },
      {
        title: "SDNone Dashboard",
        description: "Portfolio management dashboard.",
        feature1: "Project categorization",
        feature2: "Custom reporting tools",
        feature3: "Data import/export features",
        img: "/works/SdnoneDash.png",
        projectType_id: 4,
        // link:"https://moaz.vercel.app/"
      },
];