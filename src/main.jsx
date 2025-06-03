import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Common from './Common.jsx';
import Header from './components/Header.jsx';
import MyPage from './pages/MyPage.jsx';
import './styles/styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyPage />
  </StrictMode>,
);
