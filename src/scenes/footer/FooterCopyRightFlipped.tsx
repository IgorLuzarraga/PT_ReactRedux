import MadeWithLove from "../../components/MadeWithLove.tsx";

const FooterCopyRight = () => {
  return (
    <div className="md:flex md:justify-between text-center">
      <MadeWithLove />
      <p className="uppercase font-playfair text-2xl text-white">
        Igor <span className="text-purple-500">Luzarraga</span>
      </p>
    </div>
  );
};

export default FooterCopyRight;
