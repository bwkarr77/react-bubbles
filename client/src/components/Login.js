import React, { useEffect } from "react";
import { connect } from "react-redux";
import { login, handleChange } from "../actions/actions";

const Login = ({ history, credentials, handleChange, login, error, token }) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route++

  useEffect(() => {
    if (!!token) {
      localStorage.setItem("token", token);
      history.push("/FriendList");
    }
  }, [token]);

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <h2>Login:</h2>
      <form onSubmit={e => login(e, credentials)}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={credentials.username}
          onChange={e => handleChange(e, "credentials")}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={credentials.password}
          onChange={e => handleChange(e, "credentials")}
        />
        <button>Log In</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  credentials: state.credentials,
  error: state.error,
  token: state.token
});

export default connect(mapStateToProps, { login, handleChange })(Login);
