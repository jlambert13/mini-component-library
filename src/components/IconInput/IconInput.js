import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Input = styled.input`
  border: none;
  border-bottom: ${(props) =>
    `${props.size === "small" ? "1px" : "2px"} solid black`};

  color: inherit;
  font-weight: 700;
  font-size: ${(props) =>
    `${props.size === "small" ? `${14 / 16}rem` : `${18 / 16}rem`}`};
  line-height: ${(props) =>
    `${props.size === "small" ? `${16 / 16}rem` : `${21 / 16}rem`}`};

  height: ${(props) =>
    `${props.size === "small" ? `${24 / 16}rem` : `${38 / 16}rem`}`};
  padding: ${(props) =>
    `${props.size === "small" ? "4px 4px 4px 24px" : "6px 6px 6px 38px"}`};
  width: ${(props) => `${props.width}px`};

  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const IconWrapper = styled.div`
  padding: ${(props) => `${props.size === "small" ? "4px" : "6px"}`};
  position: absolute;
`;

const InputWrapper = styled.label`
  display: flex;

  color: ${COLORS.gray700};

  :hover {
    color: ${COLORS.black};
  }
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <InputWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper size={size}>
        <Icon id={icon} size={size === "small" ? 16 : 24} />
      </IconWrapper>
      <Input
        placeholder={placeholder}
        size={size}
        width={width}
        value={label}
      />
    </InputWrapper>
  );
};

export default IconInput;
