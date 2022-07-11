import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterApp from './components/CounterApp.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>
);
