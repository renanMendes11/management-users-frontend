import React from 'react';
import './App.css';
import Routes from './routes';
import Dashboard from './pages/Dashboard';
import { Card } from './styles';


function App() {
  return (
    <Card>
      <Routes>
        <Dashboard />
      </Routes>
    </Card>    
  );
}

export default App;
