import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import "./styles.css";

Chart.register(ArcElement, Tooltip, Legend);

export const salesData = {
  labels: ["vendidos", "à venda"],
  datasets: [
    {
      label: "# of real state",
      data: [0.69 * 100, 0.41 * 100],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const rentData = {
  labels: ["alugados", "para alugar"],
  datasets: [
    {
      label: "# of real state",
      data: [0.75 * 100, 0.25 * 100],
      backgroundColor: [
        "rgba(75, 192, 192, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(75, 192, 192, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export function DonutChart() {
  return (
    <section className="donut-chart-container">
      <header>
        <h3>Disponibilidade dos imóveis por cidade</h3>
      </header>
      <main>
        <div className="donut-chart-header">
          <select>
            <option>selecione...</option>
            <option>Ipê</option>
            <option>Ipiranga</option>
          </select>
        </div>
        <div className="donut-chart-main">
          <div className="donut-chart-group">
            <Doughnut className="donut-chart" data={salesData} />
          </div>
          <div className="donut-chart-group">
            <Doughnut className="donut-chart" data={rentData} />
          </div>
        </div>
      </main>
    </section>
  );
}
