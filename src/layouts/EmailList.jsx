import React from "react";
import styled from "styled-components";
import { Checkbox, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SettingsIcon from "@mui/icons-material/Settings";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const EmailListContainer = styled.div`
  flex: 1;
  overflow: scroll;
`;
const EmailListSettings = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid whitesmoke;
  background-color: white;
  z-index: 999;
  padding-right: 10px;
`;
const SettingsLeft = styled.div``;
const SettingsRight = styled.div``;
const EmailListSection = styled.div``;
const EmailList = () => {
  return (
    <EmailListContainer>
      <EmailListSettings>
        <SettingsLeft>
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </SettingsLeft>

        <SettingsRight>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </SettingsRight>

        <EmailListSection></EmailListSection>
      </EmailListSettings>
    </EmailListContainer>
  );
};

export default EmailList;
