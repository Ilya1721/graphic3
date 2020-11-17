import React from "react";
import PropTypes from "prop-types";

class StartData extends React.Component {
  render() {
    const { mr, ms, sigmaR, sigmaS, lambda1, lambda2 } = this.props.input;
    return (
      <div className="start-data">
        <h3>Вхідні дані</h3>
        <table>
          <thead>
            <tr>
              <th colSpan={4}>1-й розрахунковий випадок</th>
              <th colSpan={2}>2-й розрахунковий випадок</th>
            </tr>
            <tr>
              <th colSpan={2}>навантаження</th>
              <th colSpan={2}>опір руйнуванню</th>
              <th>навантаження</th>
              <th>опір руйнуванню</th>
            </tr>
            <tr>
              <th>
                m<sub>R</sub>
              </th>
              <th>
                σ<sub>R</sub>
              </th>
              <th>
                m<sub>S</sub>
              </th>
              <th>
                σ<sub>S</sub>
              </th>
              <th>
                γ<sub>1</sub>
              </th>
              <th>
                γ<sub>2</sub>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{mr}</td>
              <td>{sigmaR}</td>
              <td>{ms}</td>
              <td>{sigmaS}</td>
              <td>{lambda1}</td>
              <td>{lambda2}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default StartData;
