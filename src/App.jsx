import 'bootstrap/dist/css/bootstrap.min.css';

import AppRoutes from './routes/AppRoutes'
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

import './App.css'


import React from 'react';


function App() {
  return (
    <>
      <Navigation />
      <div className='app'>
        <AppRoutes />
      </div>
      <Footer />
      
    </>
   
  );
}

export default App;
