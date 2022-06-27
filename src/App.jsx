import React from "react";
import styled from "styled-components";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";

const AppContainer = styled.div``;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Sidebar />
    </AppContainer>
  );
};

export default App;
