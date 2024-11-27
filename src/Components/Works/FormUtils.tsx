import * as Yup from "yup";


interface ObjectToEdit  {
    project_type?:string,
    id?:number 
  
  }

interface InitialValues extends ObjectToEdit {
    project_type?:string,
    id?:number
  }


export const getInitialValues = (objectToEdit: ObjectToEdit | null = null): InitialValues => {

    return {
      project_type:objectToEdit?.project_type ,
      id:objectToEdit?.id,

    }
  };
  
export const getValidationSchema = (editMode: boolean = false) => {
    return Yup.object().shape({
      // name:Yup.string().required('required'),
    });
  };
  