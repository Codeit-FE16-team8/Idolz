import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './components/List';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Common from './Common.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          {/*<Route index element={<LandingPage />} /> */}
          <Route index element={<List />} />
          <Route path="common" element={<Common />} />
          {/*<Route path="my" element={<MyPage />} /> */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
