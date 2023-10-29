import { UserType } from "../../../app/types/userTypes";
import { AiOutlineMail } from "react-icons/ai";

type Props = {
  user: UserType;
};

const UserFeatures = ({ user }: Props) => {
  const { email } = user;

  return (
    <div className="flex justify-between text-black">
      <div className="flex flex-col justify-center items-center gap-1">
        <AiOutlineMail className="w-7 h-7 text-purple-500 hover:text-white transition duration-500" />

        <p className="text-sm leading-[17px]">{email}</p>
      </div>
    </div>
  );
};

export default UserFeatures;
