import MadeWithLove from "../../components/MadeWithLove";
import SocialMediaIcons from "../../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-36 bg-footer-color pt-10">
      <div className="mx-auto w-5/6">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between items-center text-center">
          <p className="hidden md:block uppercase font-playfair text-2xl text-white">
            Igor <span className="text-purple-500">Luzarraga</span>
          </p>
          <SocialMediaIcons />
          <MadeWithLove />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
