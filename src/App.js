import React from "react";
import "./css/main.css";
import StartData from "./components/StartData";
import OutputData from "./components/OutputData";

class App extends React.Component {
  input = {
    mr: 100,
    ms: 50,
    sigmaR: 20,
    sigmaS: 10,
    lambda1: 0.001,
    lambda2: 0.002,
  };

  render() {
    return (
      <div className="app">
        <StartData input={this.input} />
        <OutputData input={this.input} />
      </div>
    );
  }
}

export default App;
