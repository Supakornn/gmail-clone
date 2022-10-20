import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { auth, provider } from "../firebase/firebase";
import { login } from "../features/userSlice";
import { Button } from "@mui/material";

const LoginSection = styled.div`
  background-color: #f2f2f2;
  display: grid;
  place-content: center;
  height: 100vh;
`;

const LoginContainer = styled.div`
  > img {
    object-fit: contain;
    height: 200px;
  }

  display: flex;
  flex-direction: column;
`;

const Login = () => {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.user.displayName,
            email: user.user.email,
            photoUrl: user.user.photoURL
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <LoginSection>
      <LoginContainer>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F11%2FGmail-Logo.png&f=1&nofb=1&ipt=66dc71162bcb19cb3264444ed41857bbceb94a6fa0c454fd69aeaa54f6bbbc33&ipo=images"
          alt="logo"
        />
        <Button onClick={signIn} variant="contained" color="primary">
          Login
        </Button>
      </LoginContainer>
    </LoginSection>
  );
};

export default Login;
