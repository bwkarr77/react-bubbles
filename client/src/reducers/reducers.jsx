import {
  GetDataStart,
  GetDataSuccess,
  GetDataFail,
  LoginStart,
  LoginSuccess,
  LoginFail,
  HandleChange,
  Logout,
  EditDataStart,
  EditDataSuccess,
  EditDataFail,
  DeleteUnit,
  AddDataStart,
  AddDataSuccess,
  AddDataFail,
  SetData,
  CancelEdit
} from "../actions/actions.jsx";

const initialState = {
  error: "",
  //login state
  isFetching: false,
  isLoggingIn: false,
  credentials: {},
  token: "",
  colorsList: [],
  //new color
  isAdding: false,
  newColor: {
    name: "",
    code: { hex: "" }
  },
  //color editing
  isEditing: false,
  initialColor: {
    color: "",
    code: { hex: "" }
  },
  colorToEdit: {},
  reFetch: false
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
        [payload.form]:
          payload.target.name === "code"
            ? {
                ...state[payload.form],
                code: { hex: payload.target.value }
              }
            : {
                ...state[payload.form],
                [payload.target.name]: payload.target.value
              }
      };
    case Logout:
      return {
        ...state,
        error: "",
        isFetching: false,
        isLoggingIn: false,
        isAdding: false,
        isEditing: false,
        colorsList: [],
        credentials: {},
        newColor: {
          color: "",
          code: { hex: "" }
        },
        token: "",
        initialColor: {
          color: "",
          code: { hex: "" }
        },
        colorToEdit: {}
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
        isAdding: false,
        reFetch: !state.reFetch,
        newColor: {
          color: "",
          code: { hex: "" }
        }
      };
    case AddDataFail:
      return {
        ...state,
        isAdding: false,
        err: payload
      };
    case EditDataStart:
      return {
        ...state,
        isEditing: true,
        err: "",
        colorToEdit: state.colorsList.find(
          color => `${color.id}` === `${payload}`
        )
      };
    case EditDataSuccess:
      return {
        ...state,
        err: "",
        isEditing: false,
        colorToEdit: {},
        reFetch: !state.reFetch
      };
    case EditDataFail:
      return {
        ...state,
        isEditing: false,
        err: "",
        colorToEdit: {}
      };
    case CancelEdit:
      return {
        ...state,
        isEditing: false,
        colorToEdit: {},
        error: ""
      };
    case DeleteUnit:
      return {
        ...state,
        reFetch: !state.reFetch
      };
    case SetData:
      return {
        ...state,
        colorsList: payload
      };
    default:
      return state;
  }
};
