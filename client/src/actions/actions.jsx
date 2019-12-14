import { axiosWithAuth } from "../utils/axiosWithAuth";

export const GetFriendsStart = "GetFriendsStart";
export const GetFriendsSuccess = "GetFriendsSuccess";
export const GetFriendsFail = "GetFriendsFail";
export const LoginStart = "LoginStart";
export const LoginSuccess = "LoginSuccess";
export const LoginFail = "LoginFail";
export const AddFriendStart = "AddFriendStart";
export const AddFriendSuccess = "AddFriendSuccess";
export const AddFriendFail = "AddFriendFail";
export const Logout = "Logout";

export const HandleChange = "HandleChange";
export const c1 = "c1";
export const c2 = "c2";

export const apiBase = "http://localhost:5000/api";
export const apiLogin = `${apiBase}/login`;
export const apiFriends = `${apiBase}/friends`;

const testInfo = {
  testName: "Lambda School",
  testPass: "i<3Lambd4",
  testKey: "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
};

export const getFriends = () => dispatch => {
  dispatch({ type: GetFriendsStart });
  axiosWithAuth()
    .get(apiFriends)
    .then(res => dispatch({ type: GetFriendsSuccess, payload: res.data }))
    .catch(err => {
      return dispatch({ type: GetFriendsFail, payload: err });
    });
};

export const login = (event, credentials) => dispatch => {
  event.preventDefault();
  dispatch({ type: LoginStart });
  axiosWithAuth()
    .post(apiLogin, credentials)
    .then(res => dispatch({ type: LoginSuccess, payload: res.data.payload }))
    .catch(err => {
      console.log("actions.jsx > login > axiosWithAuth.post err: ", err);
      return dispatch({ type: LoginFail, payload: err });
    });
};

export const handleChange = (event, formType) => ({
  type: HandleChange,
  payload: { event: event, form: formType }
});

export const addFriend = (event, newFriend) => dispatch => {
  event.preventDefault();
  dispatch({ type: AddFriendStart });
  axiosWithAuth()
    .post(apiFriends, newFriend)
    .then(res =>
      dispatch({ type: AddFriendSuccess, payload: res.data.payload })
    )
    .catch(err => {
      return dispatch({ type: AddFriendFail, payload: err });
    });
};

export const logout = () => dispatch => {
  localStorage.clear();
  dispatch({ type: Logout });
};
