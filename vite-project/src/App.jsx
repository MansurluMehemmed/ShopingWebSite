import "./App.css";
import { Header } from "./Companents/Headers/Header";
import { UserInfo } from "./Companents/UserInfo/UserInfo";
import { Main } from "./Companents/Main/Main";
import { Footer } from "./Companents/Footer/Footer";
import { FavoriList } from "./Companents/FavoriList/FavoriList";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Companents/Home/Home";
import { Login } from "./Companents/Login/Login";
import { Payment } from "./Companents/Payment/Payment";
import { Search } from "./Companents/Search/Search";
import { PayMentCard } from "./Companents/Payment/PayMentCard";
function App() {
  return (
    <div className="div-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Favorite" element={<FavoriList />} />
        <Route path="/register" element={<Login/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/payment/pay" element={<PayMentCard/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
