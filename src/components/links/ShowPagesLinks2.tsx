import { AppState, SelectedPage } from "../../types/appType";
import Link from "./Link";
import { useAppContext } from "../../context/appContextUtils";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const ShowPagesLinks = ({ selectedPage, setSelectedPage }: Props) => {
  const { state } = useAppContext();

  const enumKeys = getEnumKeys(state);

  return enumKeys.map((key, index) => (
    <Link
      key={`${key}-${index}`}
      page={key}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    />
  ));
};

const getEnumKeys = (state: AppState) => {
  const enumKeys = Object.values(SelectedPage);

  return state.appFlipped === "flipped" ? enumKeys.reverse() : enumKeys;
};

export default ShowPagesLinks;
