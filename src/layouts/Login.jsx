import React from "react";
import styled from "styled-components";

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
  return (
    <LoginSection>
      <LoginContainer>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F11%2FGmail-Logo.png&f=1&nofb=1&ipt=66dc71162bcb19cb3264444ed41857bbceb94a6fa0c454fd69aeaa54f6bbbc33&ipo=images"
          alt="logo"
        />
      </LoginContainer>
    </LoginSection>
  );
};

export default Login;
