import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import './styles.scss';

const useHashRouter = import.meta.env.PROD && import.meta.env.BASE_URL !== '/';
const Router = useHashRouter ? HashRouter : BrowserRouter;
const routerProps = useHashRouter ? {} : { basename: import.meta.env.BASE_URL };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router {...routerProps}>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
