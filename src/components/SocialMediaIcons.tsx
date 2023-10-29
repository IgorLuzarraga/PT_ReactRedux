import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { RiCellphoneFill } from "react-icons/ri";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/igor-luzarraga/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin size={38} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/IgorLuzarraga"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub size={38} />
      </a>
      <div className="flex justify-center items-center gap-1 hover:opacity-50 transition duration-500">
        <RiCellphoneFill size={38} />
        <span>+34 717714423</span>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
