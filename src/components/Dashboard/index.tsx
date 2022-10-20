import { Sidebar } from "../Sidebar";

import "./styles.css";

export function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
      <Sidebar />
      </div>
    </div>
  )
}