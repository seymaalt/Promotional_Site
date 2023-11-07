import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PromotionalSite from './pages/PromotionalSite';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/promotional-site" element={<PromotionalSite />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
