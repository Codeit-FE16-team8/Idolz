// 테스트용
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListPage from './components/ListPage';
import Header from './components/Header.jsx';
import Common from './Common.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          {/*<Route index element={<LandingPage />} /> */}
          <Route index element={<ListPage />} />
          <Route path="common" element={<Common />} />
          {/*<Route path="my" element={<MyPage />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
