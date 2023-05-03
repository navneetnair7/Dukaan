import { Routes, Route } from 'react-router-dom'
import SellerLogin from './Pages/SellerLogin'
import SellerSignup from './Pages/SellerSignup'
import UserLogin from './Pages/UserLogin'
import UserSignup from './Pages/UserSignup'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import SingleProductDetails from './Pages/SingleProductDetails'
import Cart from './Pages/Cart'
import ProductGridView from './Pages/ProductGridView'
import Maps from './Components/Maps'
import UserProfile from './Pages/UserProfile'
import { SellerProfilePage } from './Pages/SellerProfilePage'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='bg-white'>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element = <Home /> exact/>
        <Route path='/userlogin' element = <UserLogin /> exact />
        <Route path='/product/:name' element = <SingleProductDetails /> exact />
        <Route path='/usersignup' element = <UserSignup /> exact />
        <Route path='/sellerlogin' element = <SellerLogin /> exact />
        <Route path='/sellersignup' element = <SellerSignup /> exact />
        <Route path='/cart/:name' element = <Cart /> exact/>
        <Route path='/category/:name' element=<ProductGridView /> exact />
        <Route path='/maps/:name' element=<Maps /> exact />
        <Route path='/seller/:id' element=<SellerProfilePage /> exact />
        <Route path='/user/:name' element=<UserProfile /> exact />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;