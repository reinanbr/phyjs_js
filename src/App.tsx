import React from 'react';
import logo from './logo.svg';
import './App.css';
import BouncingBall from './BouncingBall';



const App: React.FC = () => {
  return (
    <div>
      <h1>Simulador de Bola Pingando</h1>
      <BouncingBall />
    </div>
  );
};



export default App;
