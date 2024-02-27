interface SelectedOptionsProps {
    Project_type:string,
    id:number
}

export const SelectedOptionsArray:SelectedOptionsProps[] = [
    {Project_type:"Ecommerce",id:1},
    {Project_type:"Taxi Web",id:2},
    {Project_type:"Landing Page",id:3},
]

export const SelectedOptions = SelectedOptionsArray?.map( (e) =>  ({
    label:e?.Project_type ,
    value:e.id
  }))