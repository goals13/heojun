import React from 'react';
import Header from './components/header/Header';
import Content from './components/content/Content';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Header />
        {this.props.children}
    </BrowserRouter>
  );
}

export default App;
