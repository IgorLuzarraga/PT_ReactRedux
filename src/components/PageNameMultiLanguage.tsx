import { SelectedPage } from "../types/appType";
import { useAppContext } from "../context/appContextUtils";
import { useState, useEffect } from "react";
import { match } from "ts-pattern";

type Props = {
  page: SelectedPage;
};

const PageNameMultiLanguage = ({ page }: Props) => {
  const [pageName, setPageName] = useState("Home");
  const { state } = useAppContext();

  useEffect(() => {
    match<SelectedPage>(page)
      .with(SelectedPage.Home, () => setPageName(state.texts.navbarMenu.home))
      .with(SelectedPage.Login, () => setPageName(state.texts.navbarMenu.login))
      .exhaustive();
  }, [page, state]);

  return <div>{pageName}</div>;
};

export default PageNameMultiLanguage;
