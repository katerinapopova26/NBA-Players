import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Players from "./pages/Players";
import MyTeam from "./pages/MyTeam";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/players" element={<Players />} />
      <Route path="/myteam" element={<MyTeam />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
