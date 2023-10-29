import { FaFlipboard } from "react-icons/fa";
import { useAppContext } from "../context/appContextUtils";
import { AppFlipType } from "../types/appType";

const BtnFlipApp = () => {
  const { state, dispatch } = useAppContext();

  const toggleAppFlipped = () => {
    // Create the action to set the app status to "flipped" if it's currently "notFlipped", and vice versa
    const newAppStatus: AppFlipType =
      state.appFlipped === "notFlipped" ? "flipped" : "notFlipped";

    // Dispatch the action
    dispatch({ type: "setFlipApp", payload: newAppStatus });
  };

  return (
    <button className="rounded-full p-3" onClick={() => toggleAppFlipped()}>
      <FaFlipboard className="w-7 h-7 text-purple-300 hover:text-white transition duration-500" />
    </button>
  );
};

export default BtnFlipApp;
