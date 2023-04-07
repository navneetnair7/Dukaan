import { Routes, Route } from 'react-router-dom'
import SellerLogin from './Pages/SellerLogin'
import SellerSignup from './Pages/SellerSignup'
import UserLogin from './Pages/UserLogin'
import UserSignup from './Pages/UserSignup'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import SingleProductDetails from './Pages/SingleProductDetails'

function App() {
  return (
    <div className='bg-white'>
      <Navbar />
      <Routes>
        <Route path = "/" element = <Home /> />
        <Route path='/userlogin' element = <UserLogin /> exact />
        <Route path='/product' element = <SingleProductDetails /> exact />
        <Route path='/usersignup' element = <UserSignup /> exact />
        <Route path='/sellerlogin' element = <SellerLogin /> exact />
        <Route path='/sellersignup' element = <SellerSignup /> exact />
      </Routes>
    </div>
  );
}

export default App;
