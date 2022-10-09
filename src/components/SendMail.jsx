import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

const SendMailContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #404040;
  width: 40%;
  height: 40%;
  max-width: 500px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid whitesmoke;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
`;

const SendMailHeader = styled.div`
  padding: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;

  > h3 {
    color: whitesmoke;
    font-size: 13px;
  }
`;

const SendMailOptions = styled.div``;

const Sendmail = () => {
  return (
    <SendMailContainer>
      <SendMailHeader>
        <h3>New Message</h3>
        <CloseIcon className="sendMail_close" />
      </SendMailHeader>

      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />

        <SendMailOptions>
          <Button>Send</Button>
        </SendMailOptions>
      </form>
    </SendMailContainer>
  );
};

export default Sendmail;
