import { Form, Select } from 'antd'
import React from 'react'
import useFormField from '../../../Hooks/useFormField';

const SelectField = ({ name, label, placeholder, isDisabled,option,isMulti,onChange, props}: any) => {

  const {  errorMsg, isError, t ,formik} = useFormField(name, props)
  const SelecthandleChange = (value: { value: string; label: React.ReactNode }) => {
     formik.setFieldValue(name, value)

  };
  return (
     <div className='KarimField'>
        {/* <label htmlFor={name} className="text"> */}
        {/* {t(`${label ?  label : name}`)} */}
        {/* </label> */}
        <Form.Item
          hasFeedback
          validateStatus={isError ? "error" : ""}
          help={isError ? errorMsg : ""}
        >
          <Select
          placeholder={t(`${placeholder ?placeholder  : name}`)}
            disabled={isDisabled}
            options={option}
            defaultValue={formik.values[name]}
            allowClear
            className='select_field'
            {...(isMulti && { mode: "multiple" })}
            onChange={onChange || SelecthandleChange}
            
          />
        </Form.Item>
      </div>
  )
}

export default SelectField


// ant-select ant-select-outlined ant-select-in-form-item ant-select-has-feedback select_field css-dev-only-do-not-override-1k979oh ant-select-single ant-select-allow-clear ant-select-show-arrow ant-select-open
// 