import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Dokumentasi from "./pages/Dokumentasi";
import Member from "./pages/Member";
import Proker from "./pages/Proker";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/dokumentasi" element={<Dokumentasi />} />
          <Route exact path="/member" element={<Member />} />
          <Route exact path="/proker" element={<Proker />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
