import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Common from './Common.jsx';
import Header from './components/Header.jsx';
import './styles/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './components/List.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Header />
      {/* <Common /> */}
      <Routes>
        <Route path="/list" element={<List />}></Route>
        <Route path="/" element={<App />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>,
);
