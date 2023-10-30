import MadeWithLove from "../../components/MadeWithLove";
import SocialMediaIcons from "../../components/SocialMediaIcons";

const FooterFlipped = () => {
  return (
    <footer className="h-40 w-full bg-footer-color flex justify-center items-center">
      <div className="mx-auto w-5/6">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between items-center text-center">
        <MadeWithLove />
          <SocialMediaIcons />
          <p className="hidden md:block uppercase font-playfair text-2xl text-white">
            Igor <span className="text-purple-500">Luzarraga</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterFlipped;
