import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const HomeAppliancesController = () => {
  const [dashboards, setDashboards] = useState([]);

  const addDashboard = () => {
    const newDashboard = { id: dashboards.length + 1, name: `Dashboard ${dashboards.length + 1}` };
    setDashboards([...dashboards, newDashboard]);
  };

  return (
    <div className="appliances-controller">
      <h1>Home Appliances Controller</h1>
      <button onClick={addDashboard} className="add-dashboard-btn">
        Add Dashboard
      </button>
      <div className="dashboard-list">
        {dashboards.map((dashboard) => (
          <Link key={dashboard.id} to={`/dashboard/${dashboard.id}`}>
            <div className="dashboard-card">{dashboard.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeAppliancesController;
