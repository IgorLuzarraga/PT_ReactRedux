import { SelectedPage } from "../../types/appType";
import useMediaQuery from "../../hooks/useMediaQuery";
import NavAvobeMediumScreen from "./NavAvobeMediumScreen";
import NavSmallScreen from "./NavSmallScreen";
import BtnFlipApp from "../../components/BtnFlipApp";
import ShowLogo from "../../components/ShowLogo";
import ModalLanguageMenu from "../../components/ModalLanguageMenu";
import { useAppContext } from "../../context/appContextUtils";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");
  const navbarBackground = isTopOfPage ? "" : "bg-nav-color shadow-2xl";
  const { state } = useAppContext();

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        {isAboveMediumScreens ? (
          <>
            {state.appFlipped === "notFlipped" ? (
              <>
                <ShowLogo selectedPage={selectedPage} />
                <NavAvobeMediumScreen />

                <div className="flex justify-center gap-10">
                  <BtnFlipApp />
                  <ModalLanguageMenu />
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-center gap-10">
                  <ModalLanguageMenu />
                  <BtnFlipApp />
                </div>

                <NavAvobeMediumScreen />
                <ShowLogo selectedPage={selectedPage} />
              </>
            )}
          </>
        ) : (
          <>
            <ShowLogo selectedPage={selectedPage} />
            <NavSmallScreen
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
