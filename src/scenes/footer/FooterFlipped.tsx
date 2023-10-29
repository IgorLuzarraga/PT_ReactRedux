import MadeWithLove from "../../components/MadeWithLove";
import SocialMediaIcons from "../../components/SocialMediaIcons";

const FooterFlipped = () => {
  return (
    <footer className="h-32 bg-footer-color pt-10">
      <div className="mx-auto w-5/6">
        <div className="md:flex md:justify-between text-center">
          <MadeWithLove />
          <SocialMediaIcons />
          <p className="uppercase font-playfair text-2xl text-white">
            Igor <span className="text-purple-500">Luzarraga</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterFlipped;
