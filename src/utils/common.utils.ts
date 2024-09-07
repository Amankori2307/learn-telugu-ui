import data from "@/assets/data/data";
import { IOldWord } from "@/interfaces/vocabulary.interfaces";

const commonUtils = {
  getAllDataAsArray: () => {
    const formattedData: Array<IOldWord> = [];
    Object.keys(data).forEach((key) => formattedData.push(...data[key]));
    return formattedData;
  },
};

export default commonUtils;
