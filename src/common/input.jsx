import React from 'react'
import { useFormContext, Controller } from "react-hook-form";
const inputStyle = {
  padding: '12px 10px',
  border:'1px solid #ccc',
  borderRadius:'8px'
};

function InputComponent(props) {
  const { control, watch } = useFormContext();
  const {index} = props;
  const isDisabled = watch(`list.${index}`)?.isDisabled;
  return (
    <div>
       <Controller
        name={`list.${index}.inputNumber`}
        control={control}
        render={({ field }) => {
          const onChangeInput = (e) => {
            const numberRegex = /^(0|[1-9]\d*)$/;
            const targetValue = e.target.value;
            if(!targetValue) { field.onChange('0')}
            if(numberRegex.test(targetValue)) { field.onChange(targetValue); }
          }
        return <input type='text' value={field.value} onChange={onChangeInput} disabled={isDisabled} style={inputStyle} />
      }}
      />
    </div>
  )
}

export default InputComponent