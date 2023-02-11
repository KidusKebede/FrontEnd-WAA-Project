
import logo from './logo.svg';
import './App.css';
import Properties from './container/Properties';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import axios  from 'axios';

function App() {
const navigate=useNavigate()
  // axios.interceptors.request.use(
  //   config => {
  //     const token = localStorage.getItem("aceess")//access token variable
  //     if (token) {
  //       config.headers['Authorization'] = 'Bearer ' + token
  //     }
  //     // config.headers['Content-Type'] = 'application/json';
  //     return config
  //   },
  //   error => {
  //     Promise.reject(error)
  //   }
  // )

  // axios.interceptors.response.use(
  //   response => {
  //     return response
  //   },
  //   function (error) {
  //     const originalRequest = error.config
  
  //     if (
  //       error.response.status === 401 &&
  //       originalRequest.url === 'http://127.0.0.1:3000/v1/auth/token'
  //     ) {
  //       navigate('/login')
  //       return Promise.reject(error)
  //     }
  
   
  //     return Promise.reject(error)
  //   }
  // )
  return (
  //  <Properties/>
  <div className="App">
  {/* <BrowserRouter> */}
  <h1 id="header"> G3 Property Managment Portal </h1>
    <Dashboard />
  {/* </BrowserRouter> */}
</div>

  );
}

export default App;
