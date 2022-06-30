import React from "react";
import styled from "styled-components";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const AppContainer = styled.div``;

const BodyContainer = styled.div``;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <BodyContainer>
          <Sidebar />
          <Routes></Routes>
        </BodyContainer>
      </AppContainer>
    </Router>
  );
};

export default App;
