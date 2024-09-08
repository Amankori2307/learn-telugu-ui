import { Route, Routes } from "react-router-dom";
import "./App.css";
import WordCarousel from "./custom-components/word-carousel/word-carousel";
import WordListWrapper from "./custom-components/word-list-wrapper/word-list-wrapper";

function App() {
  return (
    <Routes>
      <Route path="/word-carousel" element={<WordCarousel />} />
      <Route path="/word-list" element={<WordListWrapper />} />
      <Route path="/" element={<WordCarousel />} />
    </Routes>
  );
}

export default App;
