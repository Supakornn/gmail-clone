import React from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import ErrorIcon from "@mui/icons-material/Error";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import PrintIcon from "@mui/icons-material/Print";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useSelector } from "react-redux";
import { selectOpenMail } from "../features/mailSlice";

const MailContainer = styled.div`
  flex: 1;
  background-color: whitesmoke;
`;

const MailTools = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
`;

const MailToolsLeft = styled.div`
  display: flex;
`;

const MailToolsRight = styled.div``;

const MailBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  background-color: white;
  padding: 20px;
  height: 100vh;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
`;

const MailBodyHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
  padding: 20px;
  position: relative;

  > h2 {
    font-weight: 400;
    margin-right: 20px;
  }

  .mail_important {
    color: #e8ab02 !important;
  }

  .mail_time {
    position: absolute;
    top: 24px;
    right: 0;
    font-size: 12px;
    color: gray;
  }
`;

const MailMessage = styled.div``;

const Mail = () => {
  const navigate = useNavigate();
  const selectedMail = useSelector(selectOpenMail);

  return (
    <MailContainer>
      <MailTools>
        <MailToolsLeft>
          <IconButton onClick={() => navigate("/")}>
            <ArrowBackIcon />
          </IconButton>

          <IconButton>
            <MoveToInboxIcon />
          </IconButton>

          <IconButton>
            <ErrorIcon />
          </IconButton>

          <IconButton>
            <DeleteIcon />
          </IconButton>

          <IconButton>
            <EmailIcon />
          </IconButton>

          <IconButton>
            <WatchLaterIcon />
          </IconButton>

          <IconButton>
            <CheckCircleIcon />
          </IconButton>

          <IconButton>
            <LabelImportantIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </MailToolsLeft>

        <MailToolsRight>
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </MailToolsRight>
      </MailTools>

      <MailBody>
        <MailBodyHeader>
          <h2>{selectedMail?.subject}</h2>
          <LabelImportantIcon className="mail_important" />
          <p>{selectedMail?.title}</p>
          <p className="mail_time">{selectedMail?.time}</p>
        </MailBodyHeader>

        <MailMessage>
          <p>{selectedMail?.description}</p>
        </MailMessage>
      </MailBody>
    </MailContainer>
  );
};

export default Mail;
