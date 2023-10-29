import { useState } from "react";
import { UserType } from "../../../app/types/userTypes";
import { some } from "fp-ts/lib/Option";
import ShowUserImage from "./ShowUserImage";
import CustomBtn from "../../../components/custom/CustomBtn";
import UserDetails from "../userDetails/UserDetails";
import UserFeatures from "./UserFeatures";

type Props = {
  user: UserType;
};

const UserCard2 = ({ user }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex flex-col p-10 justify-center items-center text-black text-xl
     bg-blue-100 hover:bg-white hover:shadow-white rounded-3xl group"
    >
      {user.first_name} {user.last_name}
      <ShowUserImage imageUrl={user.avatar} />
      <div className="relative flex w-full mt-2">
        <div className="group-hover:invisible w-full">
          <UserFeatures user={user} />
        </div>

        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
          <CustomBtn
            title="Details"
            containerStyles={some(
              "w-full py-[9px] rounded-full bg-orange-botones gap-2",
            )}
            textStyles={some("text-white text-[14px] leading-[17px] font-bold")}
            rightIcon={some("/right-arrow.svg")}
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <UserDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        user={user}
      />
    </div>
  );
};

export default UserCard2;
