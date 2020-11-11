import react from "react";
import "./Dashboard.css"

export default function dashboard() {
  return (
    <div className="dashboard-main">
      <h1 className="dashboard-title">Welcome to Shining Quest</h1>
      <h2 className="dashboard-subtitle">Choose your character:</h2>
      <div className="dashboard-characters">
        <div className="dashboard-character">
          <h3>Thief</h3>
        </div>
        <div className="dashboard-character">
          <h3>Warrior</h3>
        </div>
        <div className="dashboard-character">
          <h3>Wizard</h3>
        </div>
      </div>
    </div>
  );
}
