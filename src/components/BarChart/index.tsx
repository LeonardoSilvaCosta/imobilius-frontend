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

import { faker } from "@faker-js/faker";

import "./styles.css";
import { City } from "../../types/types";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: true,
    title: false,
  },
};

interface BarChartProps {
  cities: City[];
}

export function BarChart({ cities }: BarChartProps) {
  const labels = ["Casa", "Apto.", "Residencial"];
  const data = {
    labels,
    datasets: [
      {
        label: "Venda",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 5000 })),
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: "Aluguel",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(53, 162, 235, 1)",
      },
    ],
  };

  return (
    <section className="bar-chart-container">
      <header>
        <h3>Média de preços por cidade</h3>
      </header>
      <main>
        <div className="bar-chart-header">
          <select>
            <option>selecione...</option>
            {cities.map((e: City) => (
              <option>{e.name}</option>
            ))}
          </select>
        </div>
        <div className="bar-chart">
          <Bar options={options} data={data} />
        </div>
      </main>
    </section>
  );
}
