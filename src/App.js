import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Houses from "./Houses";
import House from "./House";
import Member from "./Member";
import gameOfThrones from "./gameOfThrones";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/houses" element={<Houses />} />
          <Route path="/houses/:id" element={<House />} />
          <Route path="/houses/:houseId/members/:memberId" element={<Member />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
