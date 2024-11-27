import React from "react";
import "./KarimField.scss";
import SelectField from "./View/SelectField";

export interface KarimFieldProps {
  name: string;
  type?: "text" | "Select" | "DataRange" | "Date" | "Time" | "File" | "number" | "Checkbox" | "password";
  placeholder?: string;
  label?: string;
  className?: string;
  option?: any[];
  isMulti?: boolean;
  isDisabled?: boolean;
  picker?: "data" | "week" | "month" | "quarter" | "year";
  Format?: "YYYY/MM/DD" | "MM/DD" | "YYYY/MM";
  onChange?: (value: any) => void;
  Group?: boolean
  dir?:'ltr' | "rtl"
}

const KarimField = (props: KarimFieldProps) => {
  switch (props?.type) {
    case 'Select':
      return <SelectField {...props} />;
    default:
      return <SelectField {...props} />;
  }
};

KarimField.defaultProps = {
  type: "text",
  className: 'default-class',
  option: [],
  isMulti: false,
  isDisabled: false,
  picker: "date",
  Format: "YYYY/MM/DD",
  onChange: undefined,
  Group:false,
  dir : "ltr",

};

export default KarimField;
