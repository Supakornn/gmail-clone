import React from "react";
import styled from "styled-components";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import EmailList from "./layouts/EmailList";
import Mail from "./layouts/Mail";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const AppContainer = styled.div`
  height: 100vh;
`;

const BodyContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <BodyContainer>
          <Sidebar />
          <Routes>
            <Route path="/" element={<EmailList />} />
            <Route path="/mail" element={<Mail />} />
          </Routes>
        </BodyContainer>
      </AppContainer>
    </Router>
  );
};

export default App;
