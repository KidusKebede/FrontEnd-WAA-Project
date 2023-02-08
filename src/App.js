import logo from './logo.svg';
import './App.css';
import Properties from './container/Properties';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';

function App() {
  return (
  //  <Properties/>
  <div className="App">
  <BrowserRouter>
    <h1> G3 Property Managment Portal </h1>
    <Dashboard />
  </BrowserRouter>
</div>
  );
}

export default App;
