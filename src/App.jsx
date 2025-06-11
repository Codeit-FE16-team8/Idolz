import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './components/List';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import LandingPage from './pages/LandingPage.jsx';
import MyPage from './pages/MyPage.jsx';

import Login from './pages/LoginPage.jsx';
import LogUp from './pages/LogUpPage.jsx';

import ListPage from './components/ListPage.jsx';

import Setting from './settings/Setting.jsx';
import Account from './settings/Account.jsx';
import Notifications from './settings/Notifications.jsx';
import ChangeCursor from './settings/ChangeCursor.jsx';

import CustomerCenter from './policies/CustomerCenter.jsx';
import UsePolicy from './policies/UsePolicy.jsx';
import PaidPolicy from './policies/PaidPolicy.jsx';
import PrivacyPolicy from './policies/PrivacyPolicy.jsx';
import ServicePolicy from './policies/ServicePolicy.jsx';
import YouthProtectionPolicy from './policies/YouthProtectionPolicy.jsx';
import CookiePolicy from './policies/CookiePolicy.jsx';
import { useLocation } from 'react-router-dom';

import Common from './Common.jsx';
function AppLayout() {
  const location = useLocation();

  // LandingPage에서는 Header/Footer 안 보이게
  const isLanding = location.pathname === '/';

  return (
    <>
      {!isLanding && <Header />}
      <div className="container">
        <Routes>
          <Route path="common" element={<Common />} />
          <Route index element={<LandingPage />} />
          <Route path="list" element={<List />} />
          <Route path="listTest" element={<ListPage />} />
          <Route path="mypage" element={<MyPage />} />

          <Route path="login" element={<Login />} />
          <Route path="logUp" element={<LogUp />} />

          {/* 설정 페이지 */}
          <Route path="settings" element={<Setting />} />
          <Route path="account" element={<Account />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="cursor" element={<ChangeCursor />} />

          {/* footer 연결 페이지 */}
          <Route path="customer_center" element={<CustomerCenter />} />
          <Route path="usepolicy" element={<UsePolicy />} />
          <Route path="paid" element={<PaidPolicy />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="service" element={<ServicePolicy />} />
          <Route path="youth-protection" element={<YouthProtectionPolicy />} />
          <Route path="cookie" element={<CookiePolicy />} />
        </Routes>
      </div>
      {!isLanding && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
