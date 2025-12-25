import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Team from "./pages/Team";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/team" element={<Team />} />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget" element={<ForgetPassword />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Home" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
