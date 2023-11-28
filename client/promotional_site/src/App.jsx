import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PromotionalSite from "./pages/PromotionalSite";
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import GlobalProvider from "./context/GlobalProvider.jsx";
import AuthProvider from './context/AuthProvider.jsx'
import TextProvider from "./context/TextProvider.jsx";
import Favorites from './pages/Favorites.jsx'
import PromotionalSite2 from "./pages/PromotionalSite2.jsx";
function App() {
  return (
    <AuthProvider>
      <TextProvider>
        <GlobalProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/promotional-site" element={<PromotionalSite />} />
              <Route path="/promotional-site2" element={<PromotionalSite2 />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
            </Routes>
          </BrowserRouter>
        </GlobalProvider>
      </TextProvider>
    </AuthProvider>
  );
}

export default App;
