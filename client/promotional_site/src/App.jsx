import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PromotionalSite from "./pages/PromotionalSite";
import GlobalProvider from "./context/GlobalProvider.jsx";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promotional-site" element={<PromotionalSite />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
