import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'

const redirectUrl = window.sessionStorage.getItem('redirect');

if (redirectUrl) {
  window.sessionStorage.removeItem('redirect');
  const redirect = new URL(redirectUrl);
  window.history.replaceState(
    null,
    '',
    `${redirect.pathname}${redirect.search}${redirect.hash}`,
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

