import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { loading, loaded, idle, failed, Status } from "../../app/types/status2";
import { DataReceivedType, UsersType } from "../../app/types/userTypes";
import { fetchUsers } from "./userAPI";
import { AuthUser, notAuthorized } from "../../app/types/authUser";

export interface UserState {
  authUser: AuthUser;
  userList: UsersType;
  status: Status;
  pageToDownload: number;
  nameToFilter: string;
}

const initialState: UserState = {
  authUser: notAuthorized(),
  userList: [],
  status: idle(),
  pageToDownload: 1,
  nameToFilter: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // The 'reducers' field lets us define reducers and generate associated actions
  reducers: {
    setAuthUser: (state, action: PayloadAction<AuthUser>) => {
      state.authUser = action.payload;
    },
    setStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
    setPageToDownload: (state, action: PayloadAction<number>) => {
      state.pageToDownload = action.payload;
    },
    setNameToFilter: (state, action: PayloadAction<string>) => {
      state.nameToFilter = action.payload;
    },
  },
  // The extraReducers field lets he slice handle actions defined elsewhere,
  // including actions generated by createAsyncthunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = loading();
      })
      .addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<DataReceivedType>) => {
          state.status = loaded();
          state.userList = action.payload.data;
        },
      )
      .addCase(fetchUsers.rejected, (state) => {
        state.status = failed();
      });
  },
});

export const { setAuthUser, setNameToFilter, setPageToDownload, setStatus } =
  userSlice.actions;

export const selectUserAuth = (state: RootState) => state.user.authUser;
export const selectStatus = (state: RootState) => state.user.status;
export const selectUsers = (state: RootState) => state.user.userList;
export const selectPageToDownload = (state: RootState) =>
  state.user.pageToDownload;
export const selectNameToFilter = (state: RootState) => state.user.nameToFilter;

export default userSlice.reducer;
