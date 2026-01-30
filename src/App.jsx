import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import "./App.css";
import HomeMain from "./pages/HomeMain.jsx";

const App = () => {
  return (
      <BrowserRouter>
        <Home />
        <Routes>
          <Route exact path="/" element={<HomeMain />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
