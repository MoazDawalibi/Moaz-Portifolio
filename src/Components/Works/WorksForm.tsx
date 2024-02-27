import React, { useEffect, useState } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from "yup";
import KarimField from '../Karimalden/KarimField';
import { getInitialValues } from './FormUtils';
import { SelectedOptions } from './WorksConfige';
import { LoadingButton } from '../Karimalden/LoadingButton';
import { useTranslation } from 'react-i18next';


const WorksForm = () => {
  const {t} = useTranslation();
  const [selectedOption, setSelectedOption] = useState();
  const [storedID, setStoredID ] = useState();


  const handleFormSubmit = (values:any) => {
    setSelectedOption(values?.selcet);
    // console.log(selectedOption);
    
    // localStorage.setItem("SelcetedID", values?.select);
    // console.log(values?.select,"ansn");
    // console.log(localStorage.getItem("SelcetedID"),"from storage");
    
  };


  useEffect(()=>{
    // setSelectedOption(Moaz)
    // const storedID = selectedOption 

  },[])

  return (
    <div className='WorksForm'>
        {
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={getInitialValues}
        >
          {({}) => (
            <Form>
              <KarimField  name='select' option={SelectedOptions || []} type='Select' placeholder='selcet' 
              onChange={(e)=>setSelectedOption(e)}
              />
                {/* <LoadingButton
                  type="submit"
                  color="primary"
                  // isLoading={}
                >
                  {t("Add")}
                </LoadingButton> */}
            </Form>
          )}
        </Formik>
        }
    </div>
  )
}

export default WorksForm