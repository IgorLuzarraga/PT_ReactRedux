import { useState } from "react";
import NavBar from "./navbar";
import { SelectedPage } from "../types/appType";

const Header = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );

  return (
    <NavBar
      isTopOfPage={true}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    />
  );
};

export default Header;
