import './App.css';
import {Routes, Route } from 'react-router-dom'
import Seller_Login from './Pages/Seller_Login'
import Seller_Signup from './Pages/Seller_Signup'
import User_Login from './Pages/User_Login'
import User_Signup from './Pages/User_Signup'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path = '/' element = <Home /> exact />
        <Route path='/userlogin' element = <User_Login /> exact />
        <Route path='/usersignup' element = <User_Signup /> exact />
        <Route path='/sellerlogin' element = <Seller_Login /> exact />
        <Route path='/sellersignup' element = <Seller_Signup /> exact />
      </Routes>
    </div>
  );
}

export default App;
