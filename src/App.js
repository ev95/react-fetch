import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Comments from "./Pages/Comments/Comments";
import Header from "./Components/Header/Header";
import Albums from "./Pages/Albums/Albums";
import Photos from "./Pages/Photos/Photos";
import Posts from "./Pages/Posts/Posts";
import { store } from "./store/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
