import React from "react";
import styled from "styled-components";
import { Checkbox, IconButton } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "../features/mailSlice";

const EmailRowContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid whitesmoke;
  cursor: pointer;
  z-index: 999;
  :hover {
    border-top: 1px solid whitesmoke;
    box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.24);
  }
`;

const EmailRowOptions = styled.div`
  display: flex;
`;

const EmailRowTitle = styled.div`
  font-size: 13px;
  flex: 0.3;
`;

const EmailRowMessage = styled.div`
  display: flex;
  flex: 0.8;
  align-items: center;
  font-size: 13px;

  > h4 {
    width: 400px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 5px;
    padding-right: 5px;
  }

  .EmailRow__Description {
    font-weight: 400;
    color: gray;
  }
`;

const EmailRowTime = styled.div`
  padding-right: 15px;
  font-size: 9px;
  font-weight: bold;
`;

const EmailRow = ({ id, title, subject, description, time }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(selectMail({ id, title, subject, description, time }));
    navigate("/mail");
  };

  return (
    <EmailRowContainer onClick={openMail}>
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
        <h4>
          {subject} {""}
          <span className="EmailRow__Description">{description}</span>
        </h4>
      </EmailRowMessage>

      <EmailRowTime>{time}</EmailRowTime>
    </EmailRowContainer>
  );
};

export default EmailRow;
