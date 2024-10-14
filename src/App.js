import { Routes, Route } from "react-router-dom";

import Comments from "./Pages/Comments/Comments";
import Header from "./Components/Header/Header";
import Albums from "./Pages/Albums/Albums";
import Photos from "./Pages/Photos/Photos";
import Posts from "./Pages/Posts/Posts";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/todos" element={<></>} />
        <Route path="/users" element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
