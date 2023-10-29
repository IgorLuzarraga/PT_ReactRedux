export type UserType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type DataReceivedType = {
  data: UsersType;
};

export type UsersType = UserType[];
