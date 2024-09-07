import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IOldWord } from "@/interfaces/vocabulary.interfaces";

interface IWordListProps {
  wordList: Array<IOldWord>;
}

function WordList(props: IWordListProps) {
  const { wordList } = props;
  return (
    <Accordion type="multiple" className="w-full">
      {wordList.map((word, index) => (
        <AccordionItem key={index} value={word.word + word.pronunciation}>
          <AccordionTrigger>
            {word.word} ({word.pronunciation})
          </AccordionTrigger>
          <AccordionContent>
            <b>Meaning:</b> {word.meaning} <br />
            <br />
            <b>Examples:</b> <br />
            <ul>
              {word.examples.map((example, index) => (
                <li key={index}>{example}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default WordList;
