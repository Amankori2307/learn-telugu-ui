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
    <Card className="w-[350px] bg-gray-800 text-white">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-white">
          {word.word} ({word.meaning})
        </CardTitle>
        <CardDescription className="text-gray-400">
          {word.pronunciation}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          {word.examples.map((example, index) => (
            <li className="text-xs text-gray-300" key={index}>
              {example}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default WordCard;
