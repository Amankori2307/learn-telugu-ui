import commonUtils from "@/utils/common.utils";
import { useMemo } from "react";
import WordCard from "../word-card/word-card";

function WordCarousel() {
  const data = useMemo(() => commonUtils.getAllDataAsArray(), []);
  return (
    <div className="bg-gray-900 py-5">
      {data.map((word, index) => (
        <div key={index} className="px-2 py-3 md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <WordCard word={word} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default WordCarousel;
