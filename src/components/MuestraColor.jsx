import styled, { StyleSheetManager } from "styled-components";

const ColoredDiv = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 10px;
  ${(props) =>
    props.backgroundColor && `background-color: ${props.backgroundColor};`}
`;

const MuestraColor = ({ fondo }) => {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "backgroundColor"}>
      <ColoredDiv backgroundColor={fondo}></ColoredDiv>
    </StyleSheetManager>
  );
};

export default MuestraColor;
