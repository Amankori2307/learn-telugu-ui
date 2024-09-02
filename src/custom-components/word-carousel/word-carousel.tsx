import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import commonUtils from "@/utils/common.utils";
import { useMemo } from "react";

function WordCarousel() {
  const data = useMemo(() => commonUtils.getAllDataAsArray(), []);
  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent className="-ml-1">
        {data.map((word, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{word.word}</span>
                  <span className="text-xl">({word.pronunciation}): </span>
                  <span className="text-2xl font-semibold">
                    {word.meaning}
                  </span>{" "}
                  <br />
                  <br />
                </CardContent>
              </Card>
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
