import React from 'react';
import SelectComponent from '../common/select';
import InputComponent from '../common/input';
import { useFormContext, useFieldArray} from "react-hook-form";

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '10px 0 10px 0'
};

const deleteBtn = {
  backgroundColor: 'red',
  padding: '10px 15px',
  color:'#fff',
  margin:'0 10px'

};

function FieldList(props) {
  const { getValues } = useFormContext();
  const { list } = getValues();
  const {index, remove, update} = props;
  const curIndexData = list[index] || {};

  const onClickDisabled = () => {
    update(index, {...curIndexData, isDisabled: !curIndexData?.isDisabled})
  };

  const onClickDelete = () => remove(index);

  return (
    <div style={divStyle}>
        <SelectComponent index = {index} />
        <InputComponent index = {index} />
        <button style={deleteBtn} onClick={onClickDelete}>Delete</button>
      <button onClick={onClickDisabled}  style={{
          backgroundColor: curIndexData.isDisabled ? "blue" : "grey",
          color:'#fff',
        }}>{curIndexData.isDisabled ? 'Enable' : 'Disable'}</button>
    </div>
  )
}

export default FieldList