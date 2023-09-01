import Content from "./components/Content";
import Navbar from "./components/Navbar";
import ReportAnalyzer from "./components/ReportAnalyzer";
import Review from "./components/Review";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Content></Content>
      <Review></Review>

      <Routes>
        <Route path="/report" element={<ReportAnalyzer></ReportAnalyzer>} />
      </Routes>
    </Router>
  );
}

export default App;
