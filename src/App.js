import "./App.css";
import { Routes, Route } from "react-router-dom";


//Components
import Header from "./Components/Header";
import AllReviews from "./Components/AllReviews";
import SingleReview from "./Components/SingleReview";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<section><AllReviews /></section>}> </Route>
        <Route path="/review/" element={<section><SingleReview /></section>}></Route>
        <Route path="/review/:review_id" element={<section><SingleReview /></section>}></Route>
      </Routes>
    </div>
  );
}

export default App;
