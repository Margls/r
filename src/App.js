// import logo from './logo.svg';
import Header from "./Header/header.jsx";
import Main from "./Main/main.jsx";
import Sidebar from "./sidebar/sidebar.jsx";
import Message from "./Message/Message"
// import './App.css';
import './styles.css'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Routes,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
  <div className='App'>
   <Header />   
    <Sidebar />
    <Routes>
    <Route path="/Message" element={<Message/>}/> 
    <Route path="/Main" element={<Main/>}/>
  </Routes>
    
    
  </div>
  </Router>
  );
}

export default App;
