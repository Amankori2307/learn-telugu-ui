import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import commonUtils from "@/utils/common.utils";
import { useMemo } from "react";
import WordCard from "../word-card/word-card";

function WordCarousel() {
  const data = useMemo(() => commonUtils.getAllDataAsArray(), []);
  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent className="-ml-1">
        {data.map((word, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <WordCard word={word} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
}

export default WordCarousel;
