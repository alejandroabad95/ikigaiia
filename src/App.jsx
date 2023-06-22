import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './routes/AppRoutes'
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

import React from 'react';


function App() {
  return (
    <>
      <Navigation/>
      <AppRoutes />
      <Footer/>
    </>
   
  );
}

export default App;
