import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Message from './components/Message';
import ListMessage from './components/ListMessage';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <Content /> 
      <Message />
      <ListMessage />
    </div>
  );
}

export default App;
