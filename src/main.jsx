import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/styles.css';
import './styles/common.css';
import './styles/font.css';
import { CursorProvider } from './components/CursorContext.jsx';

createRoot(document.getElementById('root')).render(
  <CursorProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </CursorProvider>,
);
