import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import AddANewBlog from "./pages/add-blog/AddANewBlog";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/add-blog" element={<AddANewBlog />} />
      </Routes>
    </div>
  );
}

export default App;
