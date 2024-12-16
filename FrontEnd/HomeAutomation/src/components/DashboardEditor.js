import React, { useState } from "react";
import Draggable from "react-draggable";
import ToggleSwitch from "../widgets/ToggleSwitch";
import GaugeMeter from "../widgets/GaugeMeter";
import "../styles/styles.css";

const DashboardEditor = () => {
  const [widgets, setWidgets] = useState([]);

  const addToggle = () => {
    setWidgets([...widgets, { type: "toggle", id: widgets.length + 1 }]);
  };

  const addGauge = () => {
    setWidgets([...widgets, { type: "gauge", id: widgets.length + 1 }]);
  };

  return (
    <div className="dashboard-editor">
      <h2>Dashboard Editor</h2>
      <div className="widget-buttons">
        <button onClick={addToggle}>Add Toggle</button>
        <button onClick={addGauge}>Add Gauge</button>
      </div>
      <div className="dashboard-grid">
        {widgets.map((widget) => (
          <Draggable key={widget.id}>
            <div className="widget">
              {widget.type === "toggle" && <ToggleSwitch />}
              {widget.type === "gauge" && <GaugeMeter />}
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default DashboardEditor;
