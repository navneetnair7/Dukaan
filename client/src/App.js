import { Routes, Route } from "react-router-dom";
import SellerLogin from "./Pages/SellerLogin";
import SellerSignup from "./Pages/SellerSignup";
import UserLogin from "./Pages/UserLogin";
import UserSignup from "./Pages/UserSignup";
import Home from "./Pages/Home";
import SingleProductDetails from "./Pages/SingleProductDetails";
import Cart from "./Pages/Cart";
import ProductGridView from "./Pages/ProductGridView";
import Maps from "./Components/Maps";
import UserProfile from "./Pages/UserProfile";
import { SellerProfilePage } from "./Pages/SellerProfilePage";
import { ClerkProvider } from "@clerk/clerk-react";
import { Toaster } from "react-hot-toast";

if (!"pk_test_bGVhcm5pbmcta29kaWFrLTQzLmNsZXJrLmFjY291bnRzLmRldiQ") {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey =
  "pk_test_bGVhcm5pbmcta29kaWFrLTQzLmNsZXJrLmFjY291bnRzLmRldiQ";

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <div className="bg-white">
        <Toaster position="bottom-center" />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element=<Home /> exact />
          <Route path="/userlogin" element=<UserLogin /> exact />
          <Route path="/product/:name" element=<SingleProductDetails /> exact />
          <Route path="/usersignup" element=<UserSignup /> exact />
          <Route path="/sellerlogin" element=<SellerLogin /> exact />
          <Route path="/sellersignup" element=<SellerSignup /> exact />
          <Route path="/cart" element=<Cart /> exact />
          <Route path="/category/:name" element=<ProductGridView /> exact />
          <Route path="/maps" element=<Maps /> exact />
          <Route path="/seller/:id" element=<SellerProfilePage /> exact />
          <Route path="/user" element=<UserProfile /> exact />
        </Routes>
        {/* <Footer /> */}
      </div>
    </ClerkProvider>
  );
}

export default App;
