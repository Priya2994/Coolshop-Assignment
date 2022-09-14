import React from "react";
import FieldList from "../components/fieldList";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import { evaluate } from 'mathjs';

const addBtn = {
  backgroundColor: "green",
  padding: "10px 15px",
  color: "#fff",
  margin: "20px 10px",
  width: "100px",
};

const resultpad = {
  padding: '10px'
}

const alignDiv = {
  display:'flex',
  alignItems:'center',
  justifyContent:'space-between'
}

const formDefaultValues = {
  list: [{ selectType: "+", inputNumber: "10", isDisabled: false }],
};

function Home() {
  const methods = useForm({ defaultValues: formDefaultValues });
  const { control, getValues } = methods;
  const { remove, fields, append, update } = useFieldArray({
    control,
    name: "list",
  });

  const addField = () => {
    append({ selectType: "+", inputNumber: "10", isDisabled: false });
  };

  const getResult = () => {
    const { list } = getValues();
    const result = list.reduce((prev, cur) =>{
      if(!!cur?.isDisabled) return 0;
      return prev + `${cur?.selectType}${cur?.inputNumber}`
    },0);
    return result ? evaluate(result) : 0;
  }
  
  return (
    <div>
      <FormProvider {...methods}>
        <h2  style={resultpad}>Simple React Calculator</h2>
        <div style={alignDiv}>
        <button type="button" style={addBtn} onClick={addField}>
          Add
        </button>
        
        <p style={{fontWeight:'bold'}}>Result is <span style={{color:'green'}}>{getResult()}</span></p>
        </div>

        {fields.map((field, index) => (
          <FieldList key={field.id} index={index} remove={remove} update={update} />
        ))}

      </FormProvider>
    </div>
  );
}

export default Home;
