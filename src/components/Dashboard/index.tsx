import { BarChart } from "../BarChart";
import { DonutChart } from "../DonutChart";
import { Recommendations } from "../Recommendations";
import "./styles.css";

export function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
        <Recommendations />
        <div className="charts-container">
          <BarChart />
          <DonutChart />
        </div>
      </div>
    </div>
  );
}
