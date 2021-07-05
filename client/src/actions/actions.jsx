import { axiosWithAuth } from "../utils/axiosWithAuth";

export const GetDataStart = "GetDataStart";
export const GetDataSuccess = "GetDataSuccess";
export const GetDataFail = "GetDataFail";
export const LoginStart = "LoginStart";
export const LoginSuccess = "LoginSuccess";
export const LoginFail = "LoginFail";

export const EditDataStart = "EditDataStart";
export const EditDataSuccess = "EditDataSuccess";
export const EditDataFail = "EditDataFail";
export const DeleteUnit = "DeleteUnit";
export const AddDataStart = "AddDataStart";
export const AddDataSuccess = "AddDataSuccess";
export const AddDataFail = "AddDataFail";

export const HandleChange = "HandleChange";
export const SetData = "SetData";
export const Logout = "Logout";
export const CancelEdit = "CancelEdit";

export const apiBase = "http://localhost:5000/api";
export const apiLogin = `${apiBase}/login`;
export const apiColor = `${apiBase}/colors`;

const testInfo = {
  testName: "Lambda School",
  testPass: "i<3Lambd4",
  testKey: "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
};

//getData from axios
export const getColors = () => dispatch => {
  dispatch({ type: GetDataStart });
  axiosWithAuth()
    .get(apiColor)
    .then(res => {
      console.log("actions > getColors > res:", res);
      dispatch({ type: GetDataSuccess, payload: res.data });
    })
    .catch(err => {
      console.log("actions > getColors.err:", err);
      return dispatch({ type: GetDataFail, payload: err });
    });
};

//login with credentials
export const login = (event, credentials) => dispatch => {
  event.preventDefault();
  dispatch({ type: LoginStart });
  axiosWithAuth()
    .post(apiLogin, credentials)
    .then(res => dispatch({ type: LoginSuccess, payload: res.data.payload }))
    .catch(err => {
      console.log("actions.jsx > login > err: ", err);
      return dispatch({ type: LoginFail, payload: err });
    });
};

export const handleChange = (event, formType) => ({
  type: HandleChange,
  payload: { target: event.target, form: formType }
});
export const logout = () => dispatch => {
  localStorage.clear();
  dispatch({ type: Logout });
};
export const setData = list => ({
  type: SetData,
  payload: list
});

//remove colors
export const deleteColor = color => dispatch => {
  axiosWithAuth()
    .delete(`${apiColor}/${color.id}`)
    .then(res => dispatch({ type: DeleteUnit, payload: res.data.payload }))
    .catch(err => {
      console.log("actions.jsx > deleteColor > err:", err);
    });
};

//Add New Colors
export const addColor = (event, newColor) => dispatch => {
  event.preventDefault();
  dispatch({ type: AddDataStart });
  axiosWithAuth()
    .post(apiColor, newColor)
    .then(res => dispatch({ type: AddDataSuccess, payload: res.data.payload }))
    .catch(err => {
      console.log("actions.jsx > addColor > err:", err);
      return dispatch({ type: AddDataFail, payload: err });
    });
};

//Edit existing Colors
export const startEdit = id => ({
  type: EditDataStart,
  payload: id
});
export const saveEdit = color => dispatch => {
  axiosWithAuth()
    .put(`${apiColor}/${color.id}`, color)
    .then(res => dispatch({ type: EditDataSuccess, payload: res.data.payload }))
    .catch(err => {
      console.log("actions > saveEdit > err:", err);
      return dispatch({ type: EditDataFail, payload: err });
    });
};
export const cancelEdit = () => ({
  type: CancelEdit
});
