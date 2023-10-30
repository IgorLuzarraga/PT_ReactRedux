import YoyoImage from "../../components/YoyoImage";

type Props = {
  isAboveLarge: boolean;
};

const LandingImgFlipped = ({ isAboveLarge }: Props) => {
  return (
    <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center">
      {isAboveLarge ? (
        <div
          className="hover:filter hover:grayscale transition duration-1000 
                        z-10 h-72 w-72"
        >
          <YoyoImage image="webProject.png" />
        </div>
      ) : (
        <img
          alt="profile"
          className="z-10 h-52 w-52 rounded-full object-cover"
          src="webProject.png"
        />
      )}
    </div>
  );
};

export default LandingImgFlipped;
