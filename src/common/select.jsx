import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const Options = [
  { value: "+", label: "+" },
  { value: "-", label: "-" },
];

const spacing = {
  padding: "0 10px",
};
const selectStyle = {
  padding: "12px 10px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  width: "100px",
};
function SelectComponent(props) {
  const { control, watch } = useFormContext();
  const { index } = props;
  const name = `list.${index}.selectType`;
  const isDisabled = watch(`list.${index}`)?.isDisabled;
  return (
    <div style={spacing}>
      <Controller
        name={name}
        render={({ field }) => (
          <select {...field} disabled={isDisabled} style={selectStyle}>
            {Options.map((option, i) => {
              const { value: val, label } = option;
              return (
                <option key={i} value={val}>
                  {label}
                </option>
              );
            })}
          </select>
        )}
        control={control}
      />
    </div>
  );
}

export default SelectComponent;
