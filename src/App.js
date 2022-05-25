import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PlayersPage from "./pages/PlayersPage";
import MyTeam from "./pages/MyTeam";
import NotFound from "./pages/NotFound";

function App() {
  const [users, setUsers] = useState(false);
  const addUserHandler = (uName) => {
    setUsers(() => {
      return [{ name: uName, id: Math.random().toString() }];
    });
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<HomePage onAddUser={addUserHandler} />} />
      <Route path="/players" element={<PlayersPage userData={users} />} />
      <Route path="/myteam" element={<MyTeam />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
