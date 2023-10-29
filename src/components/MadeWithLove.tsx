import PulseHeart from "./PulseHeart.tsx";
import { useAppContext } from "../context/appContextUtils.ts";

const MadeWithLove = () => {
  const { state } = useAppContext();

  return (
    <div className="flex justify-center gap-2 font-playfair text-xl text-white">
      <p>{state.texts.footer.madeWithText} </p>
      <a
        href="https://en.wikipedia.org/wiki/Barcelona"
        target="_blank"
        rel="noreferrer"
      >
        <PulseHeart />
      </a>

      <p className="flex gap-1">
        {state.texts.footer.inText}
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://en.wikipedia.org/wiki/Barcelona"
          target="_blank"
          rel="noreferrer"
        >
          {state.texts.footer.cityText}
        </a>
      </p>
    </div>
  );
};

export default MadeWithLove;
