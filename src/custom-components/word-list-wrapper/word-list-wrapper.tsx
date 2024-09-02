import data from "@/assets/data/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import WordList from "../word-list/word-list";

function WordListWrapper() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Question Words</AccordionTrigger>
        <AccordionContent className="ml-5">
          <WordList wordList={data.questionWords} />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Pronoun Words</AccordionTrigger>
        <AccordionContent className="ml-5">
          <WordList wordList={data.pronounWords} />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Prepositions Words</AccordionTrigger>
        <AccordionContent className="ml-5">
          <WordList wordList={data.prepositionWords} />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>Verb Words</AccordionTrigger>
        <AccordionContent className="ml-5">
          <WordList wordList={data.verbWords} />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger>Adjective Words</AccordionTrigger>
        <AccordionContent className="ml-5">
          <WordList wordList={data.adjectiveWords} />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6">
        <AccordionTrigger>Conjuction Words</AccordionTrigger>
        <AccordionContent className="ml-5">
          <WordList wordList={data.conjunctionWords} />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-7">
        <AccordionTrigger>Telugu Words</AccordionTrigger>
        <AccordionContent className="ml-5">
          <WordList wordList={data.teluguWords} />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-8">
        <AccordionTrigger>Telugu phrases</AccordionTrigger>
        <AccordionContent className="ml-5">
          <WordList wordList={data.teluguPhrases} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default WordListWrapper;
