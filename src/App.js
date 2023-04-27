import React from 'react';
import './App.css';
import Navigation from './Navigation';
import LoginForm from './LoginForm';

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <LoginForm />
    </div>
  );
};

export default App;

