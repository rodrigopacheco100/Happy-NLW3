import React from 'react';
import Routes from './routes';

import 'leaflet/dist/leaflet.css';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <>
      <Routes />
      <GlobalStyles />
    </>
  );
}

export default App;
