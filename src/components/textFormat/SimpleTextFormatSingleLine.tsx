import { getTextFirstLine } from "../../utilities/utils";

type Props = {
  text: string;
};

const SimpleTextFormatSingleLine = ({ text }: Props) => {
  return (
    <div className="text-lg md:text-xl ml-6">{getTextFirstLine(text)}</div>
  );
};

export default SimpleTextFormatSingleLine;
