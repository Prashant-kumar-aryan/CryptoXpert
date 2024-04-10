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
import AccessDeniedPage from "./pages/AccessDeniedPage.jsx";
function App() {
  const user = localStorage.getItem("token");
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/coins"
          element={user ? <Coins /> : <AccessDeniedPage />}
        />
        <Route
          path="/coins/:id"
          element={user ? <CoinDetails /> : <AccessDeniedPage />}
        />
        <Route
          path="/exchanges"
          element={user ? <Exchanges /> : <AccessDeniedPage />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/chat" element={user ? <Chat /> : <AccessDeniedPage />} />
        <Route path="/ai" element={user ? <Ai /> : <AccessDeniedPage />} />
        <Route path="/login" element={!user && <Login />} />
        <Route path="/signup" element={!user && <Signup />} />
      </Routes>
      <Footer />
      <Whatsapp />
      <AiIcon />
    </Router>
  );
}

export default App;
