import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../header/header.component';

import './app.component.css';
import '../../common/styles';

const App: React.FC = () => {
  return (
    <Router>
        <Header/>
    </Router>
  )
};

export default App;
