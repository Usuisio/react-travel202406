
import { Button } from "@mui/material";
import { useContext } from "react";
import styled from "styled-components";
import { pageContext } from "../App";

const Landing_NavigationStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding :10px;
  gap: 10px;
`;
const NavigationRightAreaStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

export const Landing_Navigation = () => {
  const context = useContext(pageContext);
  return (
    <Landing_NavigationStyle>
      <Button variant="contained" onClick={() => {context.setLanding()}}>かくしお旅行</Button>
      <NavigationRightAreaStyle>
      <Button variant="outlined" onClick={() => {context.set622()}}>6/22</Button>
      <Button variant="outlined" onClick={() => {context.set623()}}>6/23</Button>
      <Button variant="outlined" onClick={() => {context.set624()}}>6/24</Button>
      </NavigationRightAreaStyle>
    </Landing_NavigationStyle>
  );
};
