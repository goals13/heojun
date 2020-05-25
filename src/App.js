import React, {Component} from 'react';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import { ResultProvider} from './store/context'
import './App.scss';

function App() {
  return (
    <ResultProvider>
      <BrowserRouter>
          <Header />
      </BrowserRouter>
    </ResultProvider>
  );
}

export default App;