type Props = {
  titlePart1: string;
  titlePart2: string;
};

const TitleFormat = ({ titlePart1, titlePart2 }: Props) => {
  return (
    <p className="uppercase font-playfair font-semibold text-4xl mb-5">
      {titlePart1}
      <span className="text-purple-500">{titlePart2}</span>
    </p>
  );
};

export default TitleFormat;
