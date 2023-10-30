import { useAppContext } from "../../context/appContextUtils";
import Landing from "./Landing";
import LandingFlipped from "./LandingFlipped";

const SelectLanding = () => {
    const { state } = useAppContext();

return (
  <>
  {state.appFlipped === "notFlipped" ? <Landing /> : <LandingFlipped />}
  </>
)
}

export default SelectLanding