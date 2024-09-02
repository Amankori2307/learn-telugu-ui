import { Route, Routes } from "react-router-dom";
import "./App.css";
import WordListWrapper from "./custom-components/word-list-wrapper/word-list-wrapper";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<WordListWrapper />} />
        <Route path="/all words" element={<WordListWrapper />} />
        <Route path="/word-list" element={<WordListWrapper />} />
      </Routes>
    </div>
  );
}

export default App;
