import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";

//pages
import { Shop, Home, Featured, Blogs } from "./pages";

//components
import { Header, Footer } from "./components";

function App() {
  return (
    <div>
      <Header />
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
