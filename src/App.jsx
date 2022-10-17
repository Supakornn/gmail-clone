import React from "react";
import styled from "styled-components";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import EmailList from "./layouts/EmailList";
import Mail from "./layouts/Mail";
import Login from "./layouts/Login";
import SendMail from "./components/SendMail";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { selectUser } from "./features/userSlice";

const AppContainer = styled.div`
  height: 100vh;
`;

const BodyContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const App = () => {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <AppContainer>
          <Header />
          <BodyContainer>
            <Sidebar />
            <Routes>
              <Route path="/" element={<EmailList />} />
              <Route path="/mail" element={<Mail />} />
            </Routes>
          </BodyContainer>
          {sendMessageIsOpen && <SendMail />}
        </AppContainer>
      )}
    </Router>
  );
};

export default App;
