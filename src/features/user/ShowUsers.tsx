import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  selectPageToDownload,
  selectStatus,
  selectUsers,
  selectNameToFilter,
} from "./userSlice";
import { fetchUsers } from "./userAPI";
import { Status, idle, failed, loaded, loading } from "../../app/types/status2";
import { UsersType } from "../../app/types/userTypes";
import { pipe } from "fp-ts/lib/function";
import ShowPagination from "../../components/pagination/ShowPagination";
import { match } from "ts-pattern";
import { filterUsersByName2 } from "../../utilities/usersUtils";
import FilterByNameInput from "../../components/FilterByNameInput";
import UserCard2 from "../../components/user/userCard/UserCard2";
import { useAppContext } from "../../context/appContextUtils";
import { AppState } from "../../types/appType";
import { reverseArray } from "../../utilities/utilsArr";

export const ShowUsers = () => {
  const users = useAppSelector(selectUsers);
  const status = useAppSelector(selectStatus);
  const pageToDownload = useAppSelector(selectPageToDownload);
  const nameToFilter = useAppSelector(selectNameToFilter);
  const { state } = useAppContext();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status.kind === idle().kind) {
      pipe(pageToDownload, fetchUsers, dispatch);
    }
  }, [dispatch, pageToDownload, status.kind]);

  return (
    <div className="my-10">
      <div className="flex justify-center items-center text-4xl pt-8">
        {state.texts.usersList.listOfUsers}
      </div>

      <div className="py-14 flex flex-wrap justify-center items-center gap-8">
        {showUserList(status, users, nameToFilter, state)}
      </div>

      <div className="flex flex-col gap-10 justify-center items-center">
        <FilterByNameInput />
        <ShowPagination />
      </div>
    </div>
  );
};

const mapUsersToData = (users: UsersType) =>
  users.map((user) => <UserCard2 user={user} />);

const showUsersData = (
  users: UsersType,
  nameToFilter: string,
  state: AppState,
) => {
  if (state.appFlipped === "notFlipped") {
    return pipe(users, filterUsersByName2(nameToFilter), mapUsersToData);
  } else {
    return pipe(
      users,
      reverseArray,
      filterUsersByName2(nameToFilter),
      mapUsersToData,
    );
  }
};

const showUserList = (
  status: Status,
  users: UsersType,
  nameToFilter: string,
  state: AppState,
) => {
  return match<Status>(status)
    .with(idle(), () => <div>Not init loading</div>)
    .with(loading(), () => <div>Loading...</div>)
    .with(loaded(), () => showUsersData(users, nameToFilter, state))
    .with(failed(), () => <div>Error</div>)
    .exhaustive();
};
