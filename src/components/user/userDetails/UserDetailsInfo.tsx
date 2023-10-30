import { UserType } from "../../../app/types/userTypes";

type props = {
  user: UserType;
};

const UserDetailsInfo = ({ user }: props) => {
  return (
    <div className="mt-3 p-4 flex flex-col justify-center gap-1 bg-blue-100">
      {showUserDetailsInfo(user)}
    </div>
  );
};

const showUserDetailsInfo = (user: UserType) => {
  return Object.entries(user).map(([key, value]) => {
    return (
      <div className="flex justify-between gap-5 w-full text-right" key={key}>
        <h4 className="text-grey capitalize">{key.split("_").join(" ")}</h4>
        <p className="text-black-100 font-semibold">{value}</p>
      </div>
    );
  });
};

export default UserDetailsInfo;
