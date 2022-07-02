import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom-width: 0px !important;
  padding: 15px;
  min-width: 200px;
  cursor: pointer;
  color: gray;

  :hover {
    background-color: whitesmoke !important;
    border-width: 3px !important;
  }

  > h4 {
    font-size: 14px;
    margin-left: 15px;
  }
`;

const Section = ({ Icon, title, color, selected }) => {
  return (
    <SectionContainer
      className={`${selected && "selected"}`}
      style={{
        borderBottom: `3px solid ${color}`
      }}
    >
      <Icon />
      <h4>{title}</h4>
    </SectionContainer>
  );
};

export default Section;
