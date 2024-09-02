import data from "@/assets/data/data";
import { IWord } from "@/interfaces/vocabulary.interfaces";

const commonUtils = {
  getAllDataAsArray: () => {
    const formattedData: Array<IWord> = [];
    Object.keys(data).forEach((key) => formattedData.push(...data[key]));
    return formattedData;
  },
};

export default commonUtils;
