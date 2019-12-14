import {
  GetDataStart,
  GetDataSuccess,
  GetDataFail,
  LoginStart,
  LoginSuccess,
  LoginFail,
  HandleChange,
  AddDataStart,
  AddDataSuccess,
  AddDataFail,
  Logout
} from "../actions/actions.jsx";

const initialState = {
  error: "",
  isFetching: false,
  isLoggingIn: false,
  isAdding: false,
  colorsList: [],
  credentials: {},
  newColor: {
    name: "",
    age: "",
    email: ""
  },
  token: ""
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GetDataStart:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case GetDataSuccess:
      return {
        ...state,
        error: "",
        isFetching: false,
        colorsList: payload
      };
      console.log("reducers> GetdataSuccess:");
    case GetDataFail:
      return {
        ...state,
        error: payload,
        isFetching: false
      };
    case LoginStart:
      return {
        ...state,
        error: "",
        isLoggingIn: true
      };
    case LoginSuccess:
      return {
        ...state,
        error: "",
        isLoggingIn: false,
        token: payload
      };
    case LoginFail:
      return {
        ...state,
        error: payload,
        isLoggingIn: false
      };
    case HandleChange:
      return {
        ...state,
        [payload.form]: {
          ...state[payload.form],
          [payload.event.target.name]: payload.event.target.value
        }
      };
    case AddDataStart:
      return {
        ...state,
        isAdding: true,
        err: ""
      };
    case AddDataSuccess:
      return {
        ...state,
        err: "",
        colorsList: payload,
        isAdding: false
      };
    case AddDataFail:
      return {
        ...state,
        isAdding: false,
        err: ""
      };
    case Logout:
      return {
        ...state,
        error: "",
        isFetching: false,
        isLoggingIn: false,
        isAdding: false,
        colorsList: [],
        credentials: {},
        newColor: {
          name: "",
          age: "",
          email: ""
        },
        token: ""
      };
    default:
      return state;
  }
};
