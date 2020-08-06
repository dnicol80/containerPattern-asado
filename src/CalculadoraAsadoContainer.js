import React from "react";
import Counter from "./Counter";
import { configData } from "./ConfigData";

export default class AsadoContainer extends React.Component {
  state = {
    porcionAdultos: 0,
    porcionNinos: 0,
    cantidadAdultos: 0,
    cantidadNinos: 0
  };

  render() {
    return (
      <div>
        <h1>AsadoContainer</h1>
        <Counter />
      </div>
    );
  }
}
