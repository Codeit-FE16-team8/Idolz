import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Common from './Common.jsx';
import './styles/styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Common />
    <App />
  </StrictMode>,
);
