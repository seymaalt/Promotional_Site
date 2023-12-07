import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PromotionalSite from "./pages/PromotionalSite";
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import GlobalProvider from "./context/GlobalProvider.jsx";
import AuthProvider from './context/AuthProvider.jsx'
import TextProvider from "./context/TextProvider.jsx";
import Favorites from './pages/Favorites.jsx'
import Profile from "./pages/Profile.jsx";
import PromotionalSite2 from "./pages/PromotionalSite2.jsx";
import ChooseTemplate from "./pages/ChooseTemplate.jsx";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword.jsx";
import ResetPassword from "./components/ForgotPassword/ResetPassword.jsx"
import EmailVerified from "./EmailVerified/EmailVerified.jsx";
function App() {
  return (
    <AuthProvider>
      <TextProvider>
        <GlobalProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/promotional-site" element={<PromotionalSite />} />
              <Route path="/promotional-site2" element={<PromotionalSite2 />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/ChooseTemplate" element={<ChooseTemplate />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/ForgotPassword" element={<ForgotPassword />} />
              <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
              <Route path="/verify-email/:emailToken" element={<EmailVerified />} />
            </Routes>
          </BrowserRouter>
        </GlobalProvider>
      </TextProvider>
    </AuthProvider>
  );
}

export default App;
