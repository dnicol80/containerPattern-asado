import React from "react";

const CalculadoraAsado = ({
  title,
  step,
  vinicial,
  unidad,
  name,
  onChange
}) => {
  return (
    <div>
      <label>
        {title}
        <input
          name={name}
          type="number"
          step={step}
          value={vinicial}
          onChange={onChange}
        />
        {unidad}
      </label>
    </div>
  );
};

export default CalculadoraAsado;
