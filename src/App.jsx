import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import "./App.css";
import HomeMain from "./pages/HomeMain.jsx";
import VideoPage from "./pages/VideoPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Home /><HomeMain /></>}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/videoPage" element={<><Home/><VideoPage /></>} />
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
