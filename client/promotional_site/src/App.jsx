import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PromotionalSite from "./pages/PromotionalSite";
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import GlobalProvider from "./context/GlobalProvider.jsx";
import AuthProvider from './context/AuthProvider.jsx'
function App() {
  return (
    <AuthProvider>
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promotional-site" element={<PromotionalSite />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
    </AuthProvider>
  );
}

export default App;
