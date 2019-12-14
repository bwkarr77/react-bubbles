import {
  GetFriendsStart,
  GetFriendsSuccess,
  GetFriendsFail,
  LoginStart,
  LoginSuccess,
  LoginFail,
  HandleChange,
  AddFriendStart,
  AddFriendSuccess,
  AddFriendFail,
  Logout
} from "../actions/actions.jsx";

const initialState = {
  error: "",
  isFetching: false,
  isLoggingIn: false,
  isAdding: false,
  friendsList: [],
  credentials: {},
  newFriend: {
    name: "",
    age: "",
    email: ""
  },
  token: ""
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GetFriendsStart:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case GetFriendsSuccess:
      return {
        ...state,
        error: "",
        isFetching: false,
        friendsList: payload
      };
    case GetFriendsFail:
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
    case AddFriendStart:
      return {
        ...state,
        isAdding: true,
        err: ""
      };
    case AddFriendSuccess:
      return {
        ...state,
        err: "",
        friendsList: payload,
        isAdding: false
      };
    case AddFriendFail:
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
        friendsList: [],
        credentials: {},
        newFriend: {
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
