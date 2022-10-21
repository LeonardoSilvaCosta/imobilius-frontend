import { Header } from "./components/Header";
import { ManagementTable } from "./components/ManagementTable";
import { Sidebar } from "./components/Sidebar";

import './global.css';
import './styles.css';


export function App() {
  return (
    <div className="main-wrapper">
      <Header />
      <div className="main-container">
      <Sidebar />
      <ManagementTable />
      </div>
    </div>
  );
}
