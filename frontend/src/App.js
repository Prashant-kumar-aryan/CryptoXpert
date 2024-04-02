import "./App.css";
import Header from "./component/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import CoinDetails from "./component/CoinDetails.jsx";
import Contact from "./component/Contact";
import Coins from "./component/Coins";
import Exchanges from "./component/Exchanges";
import Footer from "./component/Footer.jsx";
import Whatsapp from "./component/Whatsapp.jsx";
import Chat from "./component/Chat/Chat.jsx";
import Ai from "./component/gemini/Ai.jsx";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import AiIcon from "./component/AiIcon.jsx";
import { Navigate } from "react-router-dom";
function App() {
  const user = localStorage.getItem("token");
  console.log(user);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/coins"
          element={user ? <Coins /> : <Navigate to="/login" />}
        />
        <Route
          path="/coins/:id"
          element={user ? <CoinDetails /> : <Navigate to="/login" />}
        />
        <Route
          path="/exchanges"
          element={user ? <Exchanges /> : <Navigate to="/login" />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/chat"
          element={user ? <Chat /> : <Navigate to="/login" />}
        />
        <Route path="/ai" element={user ? <Ai /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
      <Whatsapp />
      <AiIcon />
    </Router>
  );
}

export default App;
