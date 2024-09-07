import { Route, Routes } from "react-router-dom";
import "./App.css";
import WordCarousel from "./custom-components/word-carousel/word-carousel";
import WordListWrapper from "./custom-components/word-list-wrapper/word-list-wrapper";

function App() {
  return (
    // <div className="app">
    <Routes>
      <Route path="/" element={<WordCarousel />} />
      <Route path="/word-carousel" element={<WordCarousel />} />
      <Route path="/word-list" element={<WordListWrapper />} />
    </Routes>
    // </div >
  );
}

export default App;
