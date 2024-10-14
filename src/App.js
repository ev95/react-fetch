import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Posts from "./Pages/Posts/Posts";
import "./App.css";
import Comments from "./Pages/Comments/Comments";
import Albums from "./Pages/Albums/Albums";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/photos" element={<></>} />
        <Route path="/todos" element={<></>} />
        <Route path="/users" element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
