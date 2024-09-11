import { profileFailed, profileSuccess } from "./reducer";
import { RootState } from "slices";
import { ThunkAction } from "redux-thunk";
import { Action, Dispatch } from "redux";
import { apiClientWithAuth } from "services";

interface User {
  email?: string;
  name?: string;
  phone?: string;
  country?: string;
  jobPosition: string;
  ID: string;
}

export const editProfile =
  (user: User): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch: Dispatch) => {
    const {
      email,
      name: first_name,
      phone,
      country,
      jobPosition: job_position,
      ID,
    } = user;
    try {
      const { data } = await apiClientWithAuth.patch(`/v1/user/${ID}/`, {
        email,
        first_name,
        phone,
        country,
        job_position,
      });

      if (data) {
        localStorage.setItem("authUser", JSON.stringify(data));
        dispatch(profileSuccess(data));
      }
    } catch (error) {
      dispatch(profileFailed(error));
    }
  };
