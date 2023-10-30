import { UserType } from "../../../app/types/userTypes";
import { fromNullable, getOrElse, map, Option } from "fp-ts/Option";
import { pipe } from "fp-ts/lib/function";

type Props = {
  user: UserType;
};

const UserCard = ({ user }: Props) => {
  const getUserData = (key: keyof UserType) =>
    pipe(
      fromNullable(user[key]),
      map((value) => (
        <div
          className="p-4 flex flex-col gap-2 
            border border-solid border-blue-400 text-xs md:text-2xl 
            text-green-600 sm:text-white"
          key={user.id}
        >
          <span>{value}</span>
        </div>
      )),
    );

  return (
    <div className="mx-auto mt-6 w-4/5 border border-solid border-blue-400">
      {Object.keys(user).map((key) =>
        pipe(getUserData(key as keyof UserType), renderUserData),
      )}
    </div>
  );
};

const renderUserData = (userData: Option<JSX.Element>) =>
  pipe(
    userData,
    getOrElse(() => <></>),
  );

export default UserCard;
