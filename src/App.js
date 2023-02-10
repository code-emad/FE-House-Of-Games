import "./App.css";
import { Routes, Route } from "react-router-dom";
import {UserProvider} from './Components/UserContext'


//Components
import Header from "./Components/Header";
import AllReviews from "./Components/AllReviews";
import SingleReview from "./Components/SingleReview";
import Votes from "./Components/Votes";
import Nav from "./Components/Nav";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <UserProvider>
      <Header className="title"/>
      <Nav />
      <Routes>
      <Route path="/" element={<Home />}> </Route>
        <Route path="/reviews" element={<AllReviews />}> </Route>
        <Route path="/reviews/review/:review_id" element={<SingleReview />}></Route>
        <Route path="/test" element={<Votes/>}></Route>
      </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
