import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Login from "./pages/Login";
import Users from "./pages/Users";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/EmployWise-react/" element={<Login />} />
        <Route path="/EmployWise-react/users" element={<Users />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
