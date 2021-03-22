import styled from "styled-components";

import jpgBackgroundImage from "../../../../../public/images/jpg/background-purple.jpg";

export const DivBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    // Preserve aspet ratio
    min-width: 100%;
    min-height: 100%;
    // Background resizing options
    background: url(${jpgBackgroundImage}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`;

export const H3Title = styled.h3`
  font-size: 32px;
  font-style: normal;
  color: #e0e0e0;
`;