import React from "react";
import styled from "styled-components";
import { Button, IconButton } from "@mui/material";
import SidebarOption from "../components/SidebarOption";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
import StarIcon from "@mui/icons-material/Star";

const SidebarContainer = styled.div`
  .sidebar__compose {
    margin-top: 15px !important;
    margin-left: 10px !important;
    margin-bottom: 15px !important;
    text-transform: capitalize !important;
    color: gray;
    padding: 15px !important;
    border-radius: 30px !important;
    box-shadow: 0 2px 5px -2px rgba(0, 0, 0, 0.75);
  }
`;

const SidebarFooterContainer = styled.div``;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Button startIcon={<AddIcon fontSize="large" />} className="sidebar__compose">
        compose
      </Button>
      <SidebarOption Icon={InboxIcon} title="Inbox" number={54} />
      <SidebarOption Icon={StarIcon} title="Starred" number={54} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={54} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={54} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={54} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={54} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={54} />
      <SidebarFooterContainer>
        <div className="footer__Icons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </SidebarFooterContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
