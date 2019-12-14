import { axiosWithAuth } from "../utils/axiosWithAuth";

export const GetDataStart = "GetDataStart";
export const GetDataSuccess = "GetDataSuccess";
export const GetDataFail = "GetDataFail";
export const LoginStart = "LoginStart";
export const LoginSuccess = "LoginSuccess";
export const LoginFail = "LoginFail";
export const AddDataStart = "AddDataStart";
export const AddDataSuccess = "AddDataSuccess";
export const AddDataFail = "AddDataFail";
export const Logout = "Logout";

export const HandleChange = "HandleChange";
export const c1 = "c1";
export const c2 = "c2";

export const apiBase = "http://localhost:5000/api";
export const apiLogin = `${apiBase}/login`;
export const apiColor = `${apiBase}/colors`;

const testInfo = {
  testName: "Lambda School",
  testPass: "i<3Lambd4",
  testKey: "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
};

export const getColors = () => dispatch => {
  dispatch({ type: GetDataStart });
  console.log("actions > getColors:", apiColor);
  axiosWithAuth()
    .get(apiColor)
    .then(res => {
      console.log(res.data);
      dispatch({ type: GetDataSuccess, payload: res.data });
    })
    .catch(err => {
      console.log("actions > getColors: fail");
      return dispatch({ type: GetDataFail, payload: err });
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

export const addColor = (event, newColor) => dispatch => {
  event.preventDefault();
  dispatch({ type: AddDataStart });
  axiosWithAuth()
    .post(apiColor, newColor)
    .then(res => dispatch({ type: AddDataSuccess, payload: res.data.payload }))
    .catch(err => {
      return dispatch({ type: AddDataFail, payload: err });
    });
};

export const logout = () => dispatch => {
  localStorage.clear();
  dispatch({ type: Logout });
};
