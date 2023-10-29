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
      .with(SelectedPage.Skills, () =>
        setPageName(state.texts.navbarMenu.skills),
      )
      .with(SelectedPage.Projects, () =>
        setPageName(state.texts.navbarMenu.projects),
      )
      .with(SelectedPage.Testimonials, () =>
        setPageName(state.texts.navbarMenu.testimonials),
      )
      .with(SelectedPage.Contact, () =>
        setPageName(state.texts.navbarMenu.contact),
      )
      .with(SelectedPage.Login, () => setPageName(state.texts.navbarMenu.login))
      // .with(SelectedPage.LogOut, () =>
      //   setPageName(state.texts.navbarMenu.logout),
      // )
      .exhaustive();
  }, [page, state]);

  return <div>{pageName}</div>;
};

export default PageNameMultiLanguage;
