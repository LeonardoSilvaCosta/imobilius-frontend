import { Recommendations } from "../Recommendations";
import "./styles.css";

export function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
        <Recommendations />
      </div>
    </div>
  );
}
