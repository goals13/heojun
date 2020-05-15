import React, {Component} from 'react';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
        <Header />
    </BrowserRouter>
  );
}

export default App;