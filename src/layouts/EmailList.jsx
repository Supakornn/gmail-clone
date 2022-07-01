import React from "react";
import styled from "styled-components";
import { Checkbox, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SettingsIcon from "@mui/icons-material/Settings";

const EmailListContainer = styled.div``;
const EmailListSettings = styled.div``;
const SettingsLeft = styled.div``;
const SettingsRight = styled.div``;

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
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </SettingsRight>
      </EmailListSettings>
    </EmailListContainer>
  );
};

export default EmailList;
