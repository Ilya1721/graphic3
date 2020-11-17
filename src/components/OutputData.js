import React from "react";

class OutputData extends React.Component {
  output = {};

  laplas = (x) => {
    return (
      (1 / Math.sqrt(2 * Math.PI)) * Math.pow(Math.E, -(Math.pow(x, 2) / 2))
    );
  };

  calculate = (input) => {
    const { mr, ms, sigmaR, sigmaS, lambda1, lambda2 } = input;
    const laplas = this.laplas;
    const vs = sigmaS / ms;
    const vr = sigmaR / mr;
    const n = mr / ms;
    const u = -(
      (n - 1) /
      Math.sqrt(Math.pow(n, 2) * Math.pow(vr, 2) + Math.pow(vs, 2))
    );
    const P1 = 0.5 - laplas(u);
    const P2 = 1 / (1 + lambda2 / lambda1);
    return {
      P1,
      P2,
    };
  };

  render() {
    const input = this.props.input;
    const changedInput = {
      ...input,
      mr: input.mr * 2,
      lambda1: input.lambda1 / 2,
    };
    const first = this.calculate(input);
    const second = this.calculate(changedInput);
    return (
      <div className="output-data">
        <h3>Вихідні дані</h3>
        <table>
          <thead>
            <tr>
              <th colSpan={2}>Розрахунок № 1</th>
              <th colSpan={2}>Розрахунок № 2</th>
            </tr>
            <tr>
              <th>Імовірність безвідмовної роботи при нормальному розподілі</th>
              <th>
                Імовірність безвідмовної роботи при експоненціальному розподілі
              </th>
              <th>Імовірність безвідмовної роботи при нормальному розподілі</th>
              <th>
                Імовірність безвідмовної роботи при експоненціальному розподілі
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{first.P1.toFixed(4)}</td>
              <td>{first.P2.toFixed(4)}</td>
              <td>{second.P1.toFixed(4)}</td>
              <td>{second.P2.toFixed(4)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default OutputData;
