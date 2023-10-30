import useMediaQuery from "../../hooks/useMediaQuery";
import { SelectedPage } from "../../types/appType";
import { fromSelectedPageToPageId } from "../../utilities/utils";
import LandingText from "./LandingText";
import LandingImgFlipped from "./LandingImgFlipped";

const LandingFlipped = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id={fromSelectedPageToPageId(SelectedPage.Home)}
      className="md:flex mx-auto w-5/6 justify-between items-center gap-16 
            md:h-full pt-14 pb-32"
    >
      {/* TEXT */}
      <div className="basis-3/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <LandingText btnsInitPos={50} />
      </div>

      {/* IMAGE */}
      <div className="basis-2/5 flex flex-col justify-center items-center gap-2">
        <LandingImgFlipped isAboveLarge={isAboveLarge} />
      </div>
    </section>
  );
};

export default LandingFlipped;
