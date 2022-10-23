import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { LoginPage } from "./components/LoginPage";
import { ManagementTable } from "./components/ManagementTable";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./styles.css";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <>
              <Header />
              <div className="main-container">
                <Sidebar />
                <Dashboard />
              </div>
            </>
          }
        />
        <Route
          path="/users"
          element={
            <>
              <Header />
              <div className="main-container">
                <Sidebar />
                <ManagementTable />
              </div>
            </>
          }
        />
        <Route
          path="/real-state"
          element={
            <>
              <Header />
              <div className="main-container">
                <Sidebar />
                <ManagementTable />
              </div>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
