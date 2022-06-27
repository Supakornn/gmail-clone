import React from "react";
import styled from "styled-components";

const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 10px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  cursor: pointer;
  color: #818181;

  :hover,
  :hover > p,
  :hover > h3,
  .sidebar__active,
  .sidebar__active > p,
  .sidebar__active > h3 {
    background-color: #fcecec;
    color: #c04b37;
    font-weight: 800 !important;
  }

  > .MuiSvgIcon-root {
    padding: 5px;
  }

  > h3 {
    flex: 1;
    margin-left: 10px;
    font-size: 14px;
    font-weight: 400;
  }

  > p {
    display: none;
    font-weight: 300;
  }

  .sidebar__active > p {
    display: inline !important;
  }

  :hover > p {
    display: inline;
  }
`;

const SidebarOption = ({ Icon, title, number, selected }) => {
  return (
    <SidebarOptionContainer className={selected && "sidebar__active"}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </SidebarOptionContainer>
  );
};

export default SidebarOption;
