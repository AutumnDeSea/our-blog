import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderBar from '@components/headerBar/header';
import '../index.css';
// import Routes from '@routes/index'
const App = () => {
  return (
    <Router>
      <HeaderBar></HeaderBar>
      <div className='text-red-900'>3r343</div>
    </Router>
  );
};
export default App;
