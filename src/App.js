import "./App.css";
import Header from "./Components/Header";
import AllReviews from "./Components/AllReviews";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<section><Header /><AllReviews /></section>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
