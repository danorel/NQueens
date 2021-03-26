import styled from "styled-components";

export const DivImage = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  text-align: center;
  font-size: 1.5em;
  color: #000f00;
  margin: 1px;
  border: 3px solid #69ff79;
`;

export const DivImageSmall = styled(DivImage)`
    width: 50px;
    height: 50px;
`;

export const DivImageMedium = styled(DivImage)`
    width: 60px;
    height: 60px;
`;

export const DivImageLarge = styled(DivImage)`
    width: 70px;
    height: 70px;
`;

export const ImageQueen = styled.img`
  display: block;
  margin: auto;
  width: 38px;
  height: 38px;
`;

export const ImageQueenLarge = styled(ImageQueen)`
    width: 55px;
    height: 55px;
`;

export const ImageQueenMedium = styled(ImageQueen)`
    width: 48px;
    height: 48px;
`;

export const ImageQueenSmall = styled(ImageQueen)`
    width: 38px;
    height: 38px;
`;