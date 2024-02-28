interface SelectedOptionsProps {
    Project_type:string,
    id:number
}

interface ProjectsArrayProps {
    name:string,
    link?:string,
    linkName?:string,
    img:string,
    projectType_id:number
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

export const ProjectsArray:ProjectsArrayProps[] = [
    { name:"Qtrend", link: 'https://qtrendqa.com', img: "/Layout/KarimLogo.svg",linkName:"Qtrend.com", projectType_id:2 },
    { name:"Bright Dent", link: 'https://bright-dent-website.vercel.app',linkName:"BrightDent.com", img: "/Layout/KarimLogo.svg", projectType_id:2 },
    { name:"Elite Auction", link: 'https://malnokhba.qa', img: "/Layout/KarimLogo.svg",linkName:"ELiteAuction.com", projectType_id:2 },
    { name:"Etaxi", link: 'https://etaxi-landingpage.vercel.app', img: "/Layout/KarimLogo.svg",linkName:"Etaxi.com", projectType_id:2 },
    { name:"Medical", link: 'https://ahldubai-amin.vercel.app', img: "/Layout/KarimLogo.svg",linkName:"ahldubai.com", projectType_id:2 },
    { name:"Nokhbeh Arabia", link: 'https://NokhbehArabia.com', img: "/Layout/KarimLogo.svg",linkName:"NArabia.com", projectType_id:2 },
    { name:"Optimum", link: 'https://optimum-ihg.com', img: "/Layout/KarimLogo.svg",linkName:"Optimum.com", projectType_id:2 },
    { name:"SDNone", link: 'https://sdnone-mhmadkarimaldeen-gmailcom.vercel.app',linkName:'sdnone.com', img: "/Layout/KarimLogo.svg", projectType_id:2 },
    { name:"4Leaf_Shein", link: 'https://4-leaf-shein-landing-page.vercel.app/',linkName:'4leaf_shein.com', img: "/Layout/KarimLogo.svg", projectType_id:2 },

    { name:"KarmaCoin", link: 'https://karmaantiquecoin.com', linkName:"KarmaCoin.com",img: "/Layout/KarimLogo.svg", projectType_id:3 },
    { name:"Qtrend", link: 'https://qtrendqa.com', img: "/Layout/KarimLogo.svg",linkName:"Qtrend.com", projectType_id:3 },
    { name:"KareemEcommerce", link: 'https://karimalden-ecommerce.vercel.app/',linkName:"Kareem.com", img: "/Layout/KarimLogo.svg", projectType_id:3 },

    { name:"Elite Dashboard", img: "/Layout/KarimLogo.svg", projectType_id:4 },
    { name:"Rayan Dashboard", img: "/Layout/KarimLogo.svg", projectType_id:4 },
    { name:"Etaxi Dashboard", img: "/Layout/KarimLogo.svg", projectType_id:4 },
    { name:"Qtrend Dashboard", img: "/Layout/KarimLogo.svg", projectType_id:4 },
    { name:"Dent Dashboard", img: "/Layout/KarimLogo.svg", projectType_id:4 },
    { name:"Optimum Dashboard", img: "/Layout/KarimLogo.svg", projectType_id:4 },
    { name:"Karma Dashboard", img: "/Layout/KarimLogo.svg", projectType_id:4 },
    { name:"SDNone Dashboard", img: "/Layout/KarimLogo.svg", projectType_id:4 },
    { name:"Nokhbeh Dashboard", img: "/Layout/KarimLogo.svg", projectType_id:4 },

  ];
