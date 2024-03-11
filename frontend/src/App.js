import "./App.css";
import Header from "./component/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import CoinDetails from "./component/CoinDetails.jsx";
import Contact from "./component/Contact";
import Coins from "./component/Coins";
import Exchanges from "./component/Exchanges";
<<<<<<< HEAD
import Footer from "./component/Footer.jsx";
import Whatsapp from "./component/Whatsapp.jsx";
import Chat from "./component/Chat/Chat.jsx";
import Ai from "./component/gemini/Ai.jsx";
=======
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
>>>>>>> f980ec7a824ce2a400c9ccce89eea50d45c655c7
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
<<<<<<< HEAD
        <Route path="/chat" element={<Chat />} />
        <Route path="/ai" element={<Ai />} />
=======
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
>>>>>>> f980ec7a824ce2a400c9ccce89eea50d45c655c7
      </Routes>
      <Footer />
      <Whatsapp />
    </Router>
  );
}

export default App;
