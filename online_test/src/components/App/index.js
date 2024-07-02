import "../../App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../Login";
import Navbar from "../Navigation";
import Dashbaord from "../Dashboard";

function App() {
  const getLoginPage = () => {
    return <Login />;
  };
  const getDashboard = () => {
    return <Dashbaord />;
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={getLoginPage()} />
          <Route path="/dashboard" element={getDashboard()} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
