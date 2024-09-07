import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IOldWord } from "@/interfaces/vocabulary.interfaces";

interface IWordCardProps {
  word: IOldWord;
}

function WordCard(props: IWordCardProps) {
  const { word } = props;
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>
          {word.word} ({word.meaning})
        </CardTitle>
        <CardDescription>{word.pronunciation}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          {word.examples.map((example, index) => (
            <li className="text-xs" key={index}>
              {example}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default WordCard;
