import React from "react";
import './App.css';
import Header from './components/Header/Header';
import ParentHeader from "./components/ParentHeader/ParentHeader";

function App() {
  return (
    <div className="App">
      <ParentHeader></ParentHeader>
      <Header></Header>
      
    </div>
  );
}

export default App;
