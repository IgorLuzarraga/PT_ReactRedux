import { SelectedPage } from "../../types/appType";
import PageNameMultiLanguage from "../PageNameMultiLanguage";

type Props = {
  page: SelectedPage;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({
  page, // selectedPage,
}: Props) => (
  <>
    <PageNameMultiLanguage page={page} />
  </>
);

export default Link;
