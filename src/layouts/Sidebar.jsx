import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import SidebarOption from "../components/SidebarOption";

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

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Button startIcon={<AddIcon fontSize="large" />} className="sidebar__compose">
        compose
      </Button>
      <SidebarOption Icon={InboxIcon} title="Inbox" number={54} />
    </SidebarContainer>
  );
};

export default Sidebar;
