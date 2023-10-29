import YoyoImage from "../../components/YoyoImage";

type Props = {
  isAboveLarge: boolean;
};

const LandingImg = ({ isAboveLarge }: Props) => {
  return (
    <div className="z-10 mt-16 md:mt-32 flex justify-center">
      {isAboveLarge ? (
        <div
          className="hover:filter hover:grayscale transition duration-1000 
                        z-10"
        >
          <YoyoImage image="webProject.png" />
        </div>
      ) : (
        <img
          alt="profile image"
          className="hover:filter hover:grayscale transition duration-1000 
                    z-10 h-44 w-44 rounded-full object-cover"
          src="webProject.png"
        />
      )}
    </div>
  );
};

export default LandingImg;
