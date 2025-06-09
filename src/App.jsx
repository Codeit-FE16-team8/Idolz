import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './components/List';
import ListPage from './components/ListPage.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Common from './Common.jsx';
import LandingPage from './pages/LandingPage.jsx';
import MyPage from './pages/MyPage.jsx';
import Login from './pages/LoginPage.jsx';
import LogUp from './pages/LogUpPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="landing" element={<LandingPage />} />
          <Route index element={<List />} />
          <Route path="common" element={<Common />} />
          <Route path="my" element={<MyPage />} />
          <Route path="login" element={<Login />} />
          <Route path="logUp" element={<LogUp />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
