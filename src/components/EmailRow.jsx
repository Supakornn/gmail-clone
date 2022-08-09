import React from "react";
import styled from "styled-components";
import { Checkbox, IconButton } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";

const EmailRowContainer = styled.div``;

const EmailRowOptions = styled.div``;

const EmailRowTitle = styled.div``;

const EmailRowMessage = styled.div``;

const EmailRowDescription = styled.div``;

const EmailRow = ({ id, title, subject, description, time }) => {
  return (
    <EmailRowContainer>
      <EmailRowOptions>
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </EmailRowOptions>

      <EmailRowTitle>
        <h3>{title}</h3>
      </EmailRowTitle>

      <EmailRowMessage>
        <h4>{subject}</h4>
        <span className="EmailRow__Description">{description}</span>
      </EmailRowMessage>

      <EmailRowDescription></EmailRowDescription>
    </EmailRowContainer>
  );
};

export default EmailRow;
