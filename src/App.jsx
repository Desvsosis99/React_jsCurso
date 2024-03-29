import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Lo mejor de lo mejor en nuestro E-Commerce!" />
    </div>
  );
}

export default App;