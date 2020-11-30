import react from "react";
import "./Dashboard.css";

export default function dashboard() {
  return (
    <div className="dashboard-main">
      <h1 className="dashboard-title">Welcome to Shining Quest</h1>
      <h2 className="dashboard-subtitle">Choose your character:</h2>
      <div className="dashboard-characters">
        <div className="dashboard-character" style={{backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/en/b/be/Aladdin_Disney_pose.png")'}}>
          <h3 className="character-type">Thief</h3>
        </div>
        <div className="dashboard-character">
          <h3 className="character-type">Warrior</h3>
        </div>
        <div className="dashboard-character">
          <h3 className="character-type">Wizard</h3>
        </div>
      </div>
    </div>
  );
}
