import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect placeholder={displayedValue} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        <Text>{displayedValue}</Text>
        <Icon id="chevron-down" strokeWidth={1} size={24} />
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;

  // This contains the width so it is not bigger than the content
  width: max-content;
`;

const NativeSelect = styled.select`
  // Hide the default dropdown arrow
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;

  // Set opacity to 0 so we are seeing the presentationalBit, but still have
  // select functionality
  opacity: 0;
`;

const PresentationalBit = styled.div`
  align-items: center;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  display: flex;
  font-size: ${16 / 16}rem;
  padding: 12px 10px 12px 16px;

  ${NativeSelect}:focus + & {
    // Fallback from when -webkit-focus-ring-color isn't supported by the browser
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const Text = styled.div`
  padding-right: 16px;
`;

export default Select;
