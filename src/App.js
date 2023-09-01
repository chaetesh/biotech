import AboutUs from "./components/AboutUs";
import Content from "./components/Content";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Register from "./components/Register";
import ReportAnalyzer from "./components/ReportAnalyzer";
import Review from "./components/Review";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar></Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Content></Content>
              <Review></Review>
            </>
          }
        />
        <Route path="/report" element={<ReportAnalyzer></ReportAnalyzer>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/posts" element={<Posts></Posts>} />
        <Route path="/about" element={<AboutUs></AboutUs>} />
        <Route path="/faq" element={<Faq></Faq>} />
      </Routes>

      <Footer></Footer>
    </Router>
  );
}

export default App;
