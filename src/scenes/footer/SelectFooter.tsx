import { useAppContext } from "../../context/appContextUtils";
import Footer from "./Footer";
import FooterFlipped from "./FooterFlipped";

const SelectFooter = () => {
  const { state } = useAppContext();

  return (
    <>{state.appFlipped === "notFlipped" ? <Footer /> : <FooterFlipped />}</>
  );
};

export default SelectFooter;
