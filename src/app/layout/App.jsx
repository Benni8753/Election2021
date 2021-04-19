import React, { useState } from "react";
import ElectionDashboard from "../../features/electionDashboard/ElectionDashBoard";
import NavBar from "../../features/nav/NavBar";
import "./stylesheet.css";

export default function App() {
  const [selectedPartyFromAppJSX, setSelectedParty] = useState(null);
  const [editFormOpenFromApp, setEditFormOpenFromApp] = useState(false);

  function selectPartyFromAppJSX(aParty) {
    setSelectedParty(aParty);
    setEditFormOpenFromApp(true);
  }

  return (
    <div>
      <NavBar />
      <ElectionDashboard
        selectPartyFromAppJSX={selectPartyFromAppJSX}
        selectedPartyFromAppJSX={selectedPartyFromAppJSX}
        editFormOpenFromApp={editFormOpenFromApp}
        setEditFormOpenFromApp={setEditFormOpenFromApp}
      />
    </div>
  );
}
