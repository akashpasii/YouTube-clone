import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./pages/Header.jsx";
import Login from "./pages/Login.jsx";
import "./App.css";
import MainPage from "./pages/MainPage.jsx";
import VideoPage from "./pages/VideoPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header /><MainPage /></>}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/videoPage" element={<><Header/><VideoPage /></>} />
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
