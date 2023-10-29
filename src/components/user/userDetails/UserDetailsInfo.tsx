import { UserType } from "../../../app/types/userTypes";
// import UpdateUserBtn from "../btns/UpdateUserBtn";
// import DeleteUserBtn from "../btns/DeleteUserBtn";

type props = {
  user: UserType;
};

const UserDetailsInfo = ({ user }: props) => {
  return (
    <div className="mt-3 flex flex-col justify-center gap-1">
      {showUserDetailsInfo(user)}
      {/* <div className="flex flex-warp gap-3">
        <DeleteUserBtn userId={user._id} />
        <UpdateUserBtn userId={user._id} />
      </div> */}
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
