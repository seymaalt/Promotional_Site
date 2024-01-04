import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeV2 from "../src/pages/HomeV2"
import PromotionalSite from "./pages/PromotionalSite";
import PublishTemplate1 from "./pages/PublishTemplate1.jsx";
import PublishTemplate2 from "./pages/PublishTemplate2.jsx";
import PublishTemplate3 from './pages/PublishTemplate3.jsx';
import GlobalProvider from "./context/GlobalProvider.jsx";
import PublishProvider from "./context/PublishProvider.jsx";
import Template2Provider from "./context/Template2Provider.jsx";
import AuthProvider from './context/AuthProvider.jsx'
import TextProvider from "./context/TextProvider.jsx";
import Template3Provider from "./context/Template3Provider.jsx";
import Template1Provider from "./context/Template1Provider.jsx";
import Favorites from './pages/Favorites.jsx'
import Profile from "./pages/Profile.jsx";
import ProfileV2 from "./components/HomeV2/ProfileV2.jsx";
import PromotionalSite2 from "./pages/PromotionalSite2.jsx";
import PromotionalSite3 from "./pages/PromotionalSite3.jsx";
import ChooseTemplate from "./pages/ChooseTemplate.jsx";
import ChooseTemplateV2 from "./pages/ChooseTemplateV2.jsx";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword.jsx";
import ResetPassword from "./components/ForgotPassword/ResetPassword.jsx";
import LoginPage from './pages/LoginV2.jsx';
import EmailVerified from "./EmailVerified/EmailVerified.jsx";
import RegisterPage from './pages/RegisterV2.jsx';
import LoginV2 from './components/LoginV2/Login.jsx';
import RegisterV2 from './components/RegisterV2/Register.jsx';
1
function App() {
  return (
    <AuthProvider>
      <TextProvider>
        <GlobalProvider>
          <Template3Provider>
            <Template2Provider>
              <Template1Provider>
                <PublishProvider>
                  <BrowserRouter>
                    <Routes>
                      <Route path="/" element={<HomeV2 />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/profile2" element={<ProfileV2 />} />
                      <Route path="/promotional-site1" element={<PromotionalSite />} />
                      <Route path="/publish-site" element={<PublishTemplate1 />} />
                      <Route path="/promotional-site2" element={<PromotionalSite2 />} />
                      <Route path="/promotional-site3" element={<PromotionalSite3 />} />
                      <Route path="/favorites" element={<Favorites />} />
                      <Route path="/ChooseTemplate" element={<ChooseTemplate />} />
                      <Route path="/ChooseTemplate2" element={<ChooseTemplateV2 />} />
                      <Route path="/Login" element={<LoginV2 />} />
                      <Route path="/LoginPage" element={<LoginPage />} />
                      <Route path="/RegisterPage" element={<RegisterPage />} />
                      <Route path="/Register" element={<RegisterV2 />} />
                      <Route path="/ForgotPassword" element={<ForgotPassword />} />
                      <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
                      <Route path="/user/verify-email/:emailToken" element={<EmailVerified />} />
                      <Route path="/1/:publishToken" element={<PublishTemplate1 />} />
                      <Route path="/2/:publishToken" element={<PublishTemplate2 />} />
                      <Route path="/3/:publishToken" element={<PublishTemplate3 />} />
                    </Routes>
                  </BrowserRouter>
                </PublishProvider>
              </Template1Provider>
            </Template2Provider>
          </Template3Provider>
        </GlobalProvider>
      </TextProvider>
    </AuthProvider>
  );
}

export default App;
