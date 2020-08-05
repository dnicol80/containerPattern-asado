import React from "react";
import Counter from "./Counter";

const counterData = [
  {
    section: "Prueba",
    title: "Adultos",
    step: 1,
    unit: "personas"
  },
  {
    section: "",
    title: "Adultos",
    step: 100,
    unit: "grs"
  },
  {
    section: "",
    title: "Niños",
    step: 50,
    unit: "grs"
  },
  {
    section: "",
    title: "Niños",
    step: 1,
    unit: "personas"
  }
];

export default class AsadoContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>AsadoContainer</h1>
        <Counter />
      </div>
    );
  }
}
