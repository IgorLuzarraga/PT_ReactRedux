import { SelectedLanguage } from "../types/appType";
import { useAppContext } from "../context/appContextUtils";
import { importAppTexts } from "../utilities/utils";

const ShowLanguageOptions = () => {
  const { state, dispatch } = useAppContext();

  const enumKeys = getEnumKeys();

  const dispathActions = (selectedLanguage: SelectedLanguage) => {
    dispatch({ type: "setLanguage", payload: selectedLanguage });

    const texts = importAppTexts(selectedLanguage);
    dispatch({ type: "setTexts", payload: texts });
  };

  return enumKeys.map((key, index) => (
    <div
      key={`${key}-${index}`}
      className={`${state.language === key ? "text-white" : ""}
              hover:text-white transition duration-500 hover:cursor-pointer`}
      onClick={() => dispathActions(key)}
    >
      {key}
    </div>
  ));
};

const getEnumKeys = () => Object.values(SelectedLanguage);

export default ShowLanguageOptions;
