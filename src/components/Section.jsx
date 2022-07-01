import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div``;

const Section = ({ Icon, title, color, selected }) => {
  return (
    <SectionContainer
      className={`${selected && "selected"}`}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`
      }}
    >
      <Icon />
      <h4>{title}</h4>
    </SectionContainer>
  );
};

export default Section;
