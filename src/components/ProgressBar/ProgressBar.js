/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const PADDING = {
  large: "4px",
  medium: "0",
  small: "0",
};

const RADIUS = {
  large: "8px",
  medium: "4px",
  small: "4px",
};

const HEIGHT = {
  large: "16px",
  medium: "12px",
  small: "8px",
};

const InnerBar = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
  height: ${(props) => HEIGHT[props.size]};
  width: ${(props) => `${props.value}%`};
`;

const InnerBarWrapper = styled.div`
  border-radius: 4px;
  // This trims the inner bar when approaching the end
  overflow: hidden;
`;

const Outerbar = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: ${(props) => RADIUS[props.size]};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: ${(props) => PADDING[props.size]};
`;

const ProgressBar = ({ value, size }) => {
  return (
    <Outerbar size={size}>
      <InnerBarWrapper>
        <InnerBar
          role="progressbar"
          aria-valuemax="100"
          aria-valuemin="0"
          aria-valuenow={value}
          size={size}
          value={value}
        >
          <VisuallyHidden>{value}%</VisuallyHidden>
        </InnerBar>
      </InnerBarWrapper>
    </Outerbar>
  );
};

export default ProgressBar;
