import { SelectedPage } from "../../types/appType";
import PageNameMultiLanguage from "../PageNameMultiLanguage";
import { useNavigate } from "react-router-dom";

type Props = {
  page: SelectedPage;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    setSelectedPage(page);
    navigate(page);
  };

  return (
    <div
      className={`${selectedPage === page ? "text-white" : ""}
        transition duration-500 hover:text-white
        `}
      onClick={() => handleOnClick()}
    >
      <PageNameMultiLanguage page={page} />
    </div>
  );
};

export default Link;
