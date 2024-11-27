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
    { name:"Qtrend", link: 'https://qtrendqa.com', img: "/works/Qtrend.png",linkName:"Qtrend.com", projectType_id:2 },
    { name:"Misbar", link: 'https://4-leaf-shein-landing-page.vercel.app/',linkName:'Misbar.com', img: "/works/Misbar.png", projectType_id:2 },
    { name:"Bright Dent", link: 'https://bright-dent-website.vercel.app',linkName:"BrightDent.com", img: "/works/Bright.png", projectType_id:2 },
    { name:"Elite Auction", link: 'https://malnokhba.qa', img: "/works/Nokhbeh.png",linkName:"ELiteAuction.com", projectType_id:2 },
    { name:"Etaxi", link: 'https://etaxi-landingpage.vercel.app', img: "/works/Etaxi.png",linkName:"Etaxi.com", projectType_id:2 },
    // { name:"Medical", link: 'https://ahldubai-amin.vercel.app', img: "/works/KarimLogo.png",linkName:"ahldubai.com", projectType_id:2 },
    // { name:"Nokhbeh Arabia", link: 'https://NokhbehArabia.com', img: "/works/KarimLogo.png",linkName:"NArabia.com", projectType_id:2 },
    { name:"Optimum", link: 'https://optimum-ihg.com', img: "/works/Optimum.png",linkName:"Optimum.com", projectType_id:2 },
    { name:"SDNone", link: 'https://sdnone-mhmadkarimaldeen-gmailcom.vercel.app',linkName:'sdnone.com', img: "/works/Sdnone.png", projectType_id:2 },
    { name:"4Leaf_Shein", link: 'https://4-leaf-shein-landing-page.vercel.app/',linkName:'4leaf_shein.com', img: "/works/Fshein.png", projectType_id:2 },


    { name:"KarmaCoin", link: 'https://karmaantiquecoin.com', linkName:"KarmaCoin.com",img: "/works/Karma.png", projectType_id:3 },
    { name:"KarmaCoin V2", link: 'https://https://new-karma-coin.vercel.app/', linkName:"KarmaCoinV2.com",img: "/works/Karmav2.png", projectType_id:3 },

    { name:"Qtrend", link: 'https://qtrendqa.com', img: "/works/Qtrend.png",linkName:"Qtrend.com", projectType_id:3 },
    { name:"KareemEcommerce", link: 'https://karimalden-ecommerce.vercel.app/',linkName:"Kareem.com", img: "/works/Karim.png", projectType_id:3 },
    { name:"Nokhbeh Arabia", link: 'https://NokhbehArabia.qa', img: "/works/NArabia.png",linkName:"NArabia.com", projectType_id:3 },
    { name:"Dm", link: 'https://NokhbehArabia.qa', img: "/works/Dm.png",linkName:"Dm.com", projectType_id:3 },
    { name:"Mns", link: 'https://NokhbehArabia.qa', img: "/works/Mns.png",linkName:"Mns.com", projectType_id:3 },


    { name:"School System Dashboard", img: "/works/School.png", projectType_id:4 },
    { name:"Elite Dashboard", img: "/works/NokhbehDash.png", projectType_id:4 },
    { name:"Rayan Dashboard", img: "/works/RayanDash.png", projectType_id:4 },
    { name:"Etaxi Dashboard", img: "/works/EtaxiDash.png", projectType_id:4 },
    { name:"Qtrend Dashboard", img: "/works/QtrendDash.png", projectType_id:4 },
    { name:"Dent Dashboard", img: "/works/BrightDash.png", projectType_id:4 },
    // { name:"Optimum Dashboard", img: "/works/Dash.png", projectType_id:4 },
    { name:"Karma Dashboard", img: "/works/KarmaDash.png", projectType_id:4 },
    { name:"SDNone Dashboard", img: "/works/SdnoneDash.png", projectType_id:4 },
    // { name:"Nokhbeh Dashboard", img: "/works/Dash.png", projectType_id:4 },

  ];
