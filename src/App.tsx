
import Home  from "./components/pages/home";
import CoursesPage  from "./components/pages/courses";
import NewsPages  from "./components/pages/news";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />         {/* Default route */}
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/news" element={<NewsPages />} />
      </Routes>
    </Router>
  );
}

export default App;
