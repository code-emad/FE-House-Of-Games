import "./App.css";
import { Routes, Route } from "react-router-dom";


//Components
import Header from "./Components/Header";
import AllReviews from "./Components/AllReviews";
import SingleReview from "./Components/SingleReview";
import Votes from "./Components/Votes";

function App() {
  return (
    <div className="App">
      <Header className="title"/>
      <Routes>
        <Route path="/" element={<AllReviews />}> </Route>
        <Route path="/review/:review_id" element={<SingleReview />}></Route>
        <Route path="/test" element={<Votes/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
