import { SelectedPage } from "../../types/appType";
import { NavLink } from "react-router-dom";
import PageNameMultiLanguage from "../PageNameMultiLanguage";
import { useAppContext } from "../../context/appContextUtils";
import { selectUserAuth } from "../../features/user/userSlice";
import { AuthUser } from "../../app/types/authUser";
import { useAppSelector } from "../../app/hooks";
import LoginOutBtn from "../LoginOutBtn";

type Props = {
  linksPos: string;
};

const ShowPagesLinks = ({linksPos}: Props) => {
  const { state, dispatch } = useAppContext();
  const enumKeys = getEnumKeys();
  const userAuth = useAppSelector(selectUserAuth);
  const classVertical = "flex flex-col gap-10"
  const classHorizontal = "flex gap-3"

  const dispatchSelectedPage = (selectedPage: SelectedPage) => {
    dispatch({ type: "setSelectedPage", payload: selectedPage });
  };

  return (
    <div className={`${linksPos === "Horizontal" ? classHorizontal : classVertical}`}>
      {enumKeys.map((key, index) => {
        return isAutorizedUser(key, userAuth) ? (
          <LoginOutBtn />
        ) : (
          <div
            onClick={() => dispatchSelectedPage(key)}
            key={`${key}-${index}`}
          >
            <NavLink
              to={`/${key}`}
              className={`${state.selectedPage === key ? "text-white" : ""}
            transition duration-500 hover:text-white`}
            >
              <PageNameMultiLanguage page={key} />
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

const isAutorizedUser = (selectedPage: SelectedPage, userAuth: AuthUser) =>
  selectedPage === SelectedPage.Login && userAuth.kind === "Authorized";

const getEnumKeys = () => Object.values(SelectedPage);

export default ShowPagesLinks;
