import React from 'react';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';

import 'leaflet/dist/leaflet.css';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <>
      <Routes />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyles />
    </>
  );
}

export default App;
