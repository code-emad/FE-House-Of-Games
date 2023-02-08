import "./App.css";
import { Routes, Route } from "react-router-dom";


//Components
import Header from "./Components/Header";
import AllReviews from "./Components/AllReviews";
import SingleReview from "./Components/SingleReview";
import Comments from "./Components/Comments";

function App() {
  return (
    <div className="App">
      <Header className="title"/>
      <Routes>
        <Route path="/" element={<section><AllReviews /></section>}> </Route>
        <Route path="/review/:review_id" element={<section><SingleReview /></section>}></Route>
        <Route path="/test" element={<Comments/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
