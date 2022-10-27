import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { faker } from '@faker-js/faker';

import "./styles.css";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: false,
    title: false,
  },
};

export function BarChart() {
  const labels = ["Casa", "Apto.", "Residencial"];
  const data = {
    labels,
    datasets: [
      {
      data: labels.map(() => faker.datatype.number({ min: 0, max: 5000})),
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    },
    {
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000})),
      backgroundColor: 'rgba(53, 162, 235, 0.5)'
    }
    ]
  }

  return (
    <section className="bar-chart-container">
      <header>
        <h3>Média de preços por cidade</h3>
      </header>
      <main>
        <div className="bar-chart-header">
            <select>
              <option>selecione uma cidade...</option>
              <option>Ipê</option>
              <option>Ipiranga</option>
            </select>
          <div className="bar-chart-radio-group">
            <div>
              <input type="radio" name="category" checked value="Venda" />
              <label>Venda</label>
            </div>
            <div>
              <input type="radio" name="category" value="Aluguel" />
              <label>Aluguel</label>
            </div>
          </div>
          <div className="bar-chart">
            <Bar options={options} data={data}  />
          </div>
        </div>
      </main>
    </section>
  );
}
