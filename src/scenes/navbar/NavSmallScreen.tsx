import { useState } from "react";
import { SelectedPage } from "../../types/appType";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import ModalLanguageMenu from "../../components/ModalLanguageMenu";
import ShowPagesLinks from "../../components/links/ShowPagesLinks";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

type Btn3BarsProps = {
  isMenuToggled: boolean;
  setIsMenuToggled: (value: boolean) => void;
};

type ModalMenuProps = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isMenuToggled: boolean;
  setIsMenuToggled: (value: boolean) => void;
};

const NavSmallScreen = ({ selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-between">
      {!isMenuToggled && (
        <>
          <Btn3Bars
            isMenuToggled={isMenuToggled}
            setIsMenuToggled={setIsMenuToggled}
          />
        </>
      )}
      {/* MODAL MENU */}
      {isMenuToggled && (
        <ModalMenu
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          isMenuToggled={isMenuToggled}
          setIsMenuToggled={setIsMenuToggled}
        />
      )}
    </div>
  );
};

const Btn3Bars = ({ isMenuToggled, setIsMenuToggled }: Btn3BarsProps) => (
  <button
    className="flex justify-center items-center rounded-full bg-purple-500 w-8 h-8"
    onClick={() => setIsMenuToggled(!isMenuToggled)}
  >
    <Bars3Icon className="w-6 h-6 text-white" />
  </button>
);

const ModalMenu = ({ isMenuToggled, setIsMenuToggled }: ModalMenuProps) => (
  <div
    className="fixed right-0 bottom-0 z-40 h-full opacity-98 w-[180px] 
    bg-modal-menu-color drop-shadow-xl"
  >
    {/* CLOSE ICON */}
    <div className="flex justify-end p-12">
      <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
        <XMarkIcon className="h-8 w-8 text-white" />
      </button>
    </div>

    {/* MENU ITEMS */}
    <div className="ml-[18%] flex flex-col gap-10 text-2xl text-purple-500">
      <ShowPagesLinks linksPos="Vertical" />
      <ModalLanguageMenu />
    </div>
  </div>
);

export default NavSmallScreen;
