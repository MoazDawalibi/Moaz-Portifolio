import React, { useEffect, useState } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from "yup";
import KarimField from '../Karimalden/KarimField';
import { getInitialValues } from './FormUtils';
import { SelectedOptions } from './WorksConfige';
import { LoadingButton } from '../Karimalden/LoadingButton';
import { useTranslation } from 'react-i18next';


const WorksForm = ({globalProjectTypeId,setGlobalProjectTypeId,setIsLoading}:any) => {
  const {t} = useTranslation(); 
  const handleFormSubmit = (values:any) => {

  };

  return (
    <div className='WorksForm'>
        {
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={getInitialValues}
        >
          {({}) => (
            <Form>
              <KarimField  name='Select' option={SelectedOptions || []} type='Select' placeholder='Selcet' 
              onChange={(e)=>{return(
                setGlobalProjectTypeId(e)
              )}}
              />
            </Form>
          )}
        </Formik>
        }
    </div>
  )
}

export default WorksForm