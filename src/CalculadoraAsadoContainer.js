import React from "react";
import CalculadoraAsado from "./CalculadoraAsado";
// import { configData } from "./ConfigData";
import VisorResultado from "./VisorResultado";

export default class AsadoContainer extends React.Component {
  state = {
    porcionAdultos: 500,
    porcionNinos: 250,
    cantidadAdultos: 0,
    cantidadNinos: 0,
    resultado: 0
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, this.calculate);
  };

  calculate = () => {
    const {
      porcionAdultos,
      porcionNinos,
      cantidadAdultos,
      cantidadNinos
    } = this.state;

    this.setState({
      resultado: porcionAdultos * cantidadAdultos + porcionNinos * cantidadNinos
    });
  };

  render() {
    return (
      <div>
        <CalculadoraAsado
          name={"porcionAdultos"}
          title={"Configuracion adultos"}
          step={100}
          vinicial={this.state.porcionAdultos}
          unidad={"gramos"}
          onChange={this.onChange}
        />
        <CalculadoraAsado
          name={"porcionNinos"}
          title={"Configuracion niños"}
          step={50}
          vinicial={this.state.porcionNinos}
          unidad={"gramos"}
          onChange={this.onChange}
        />
        <CalculadoraAsado
          name={"cantidadAdultos"}
          title={"Cantidad adultos"}
          step={1}
          vinicial={this.state.cantidadAdultos}
          unidad={"personas"}
          onChange={this.onChange}
        />
        <CalculadoraAsado
          name={"cantidadNinos"}
          title={"Cantidad niños"}
          step={1}
          vinicial={this.state.cantidadNinos}
          unidad={"personas"}
          onChange={this.onChange}
        />
        <VisorResultado resultado={this.state.resultado} unidad="gramos" />
      </div>
    );
  }
}
