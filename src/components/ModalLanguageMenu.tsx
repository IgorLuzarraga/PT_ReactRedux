import { useState } from "react";
// import { SelectedLanguage } from '../types/appType'
import { XMarkIcon } from "@heroicons/react/20/solid";
import { TbMessageLanguage } from "react-icons/tb";
import { useAppContext } from "../context/appContextUtils";
// import { importAppTexts } from "../utilities/utils";
import ShowLanguageOptions from "./ShowLanguageOptions";

type BtnSelectLanguageProps = {
  isMenuToggled: boolean;
  setIsMenuToggled: (value: boolean) => void;
};

type ModalMenuProps = {
  isMenuToggled: boolean;
  setIsMenuToggled: (value: boolean) => void;
};

const ModalLanguageMenu = () => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-between">
      {!isMenuToggled && (
        <BtnSelectLanguage
          isMenuToggled={isMenuToggled}
          setIsMenuToggled={setIsMenuToggled}
        />
      )}
      {/* MODAL MENU */}
      {isMenuToggled && (
        <ModalMenu
          isMenuToggled={isMenuToggled}
          setIsMenuToggled={setIsMenuToggled}
        />
      )}
    </div>
  );
};

const BtnSelectLanguage = ({
  isMenuToggled,
  setIsMenuToggled,
}: BtnSelectLanguageProps) => (
  <button
    className="flex justify-center items-center rounded-full bg-purple-300 w-8 h-8
         text-nav-color hover:text-white transition duration-500"
    onClick={() => setIsMenuToggled(!isMenuToggled)}
  >
    <TbMessageLanguage className="w-6 h-6" />
  </button>
);

const ModalMenu = ({ isMenuToggled, setIsMenuToggled }: ModalMenuProps) => {
  const { state } = useAppContext();
  const posHorizontal =
    state.appFlipped === "notFlipped" ? "right-0" : "left-0";

  // const dispathActions = (selectedLanguage: SelectedLanguage) => {
  //     dispatch({ type: 'setLanguage', payload: selectedLanguage })

  //     const texts = importAppTexts(selectedLanguage)
  //     dispatch({ type: 'setTexts', payload: texts })
  // }

  return (
    <div
      className={`fixed top-[440px] md:top-0 ${posHorizontal} h-1/3 z-40 opacity-70 w-[160px] 
        bg-modal-menu-color drop-shadow-xl`}
    >
      {/* CLOSE ICON */}
      <div className="flex justify-end p-12">
        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
          <XMarkIcon className="h-8 w-8 text-white" />
        </button>
      </div>

      {/* MENU ITEMS */}
      <div className="ml-[18%] flex flex-col gap-10 text-xl text-purple-500">
        {/* <div
                    className={`${state.language === SelectedLanguage.English ? "text-white" : ""}
              hover:text-white transition duration-500 
                hover:cursor-pointer`}
                    onClick={() => dispathActions(SelectedLanguage.English)}
                >
                    English
                </div>
                <div
                    className={`${state.language === SelectedLanguage.Spanish ? "text-white" : ""}
              hover:text-white transition duration-500 
                hover:cursor-pointer`}
                    onClick={() => dispathActions(SelectedLanguage.Spanish)}
                >
                    Spanish
                </div> */}
        <ShowLanguageOptions />
      </div>
    </div>
  );
};

export default ModalLanguageMenu;
