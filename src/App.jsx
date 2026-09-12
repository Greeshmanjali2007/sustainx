import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import MaterialDetails from "./pages/MaterialDetails";
import PostMaterial from "./pages/PostMaterial";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/material-details" element={<MaterialDetails />} />
            <Route path="/post-material" element={<PostMaterial />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;