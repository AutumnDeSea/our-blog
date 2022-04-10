import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderBar from '@components/headerBar/header';
// import Routes from '@routes/index'
const App = () => {
  return (
    <Router>
      <HeaderBar></HeaderBar>
    </Router>
  );
};
export default App;
