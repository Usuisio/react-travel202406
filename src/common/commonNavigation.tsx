
import { Button } from "@mui/material";
import { useContext } from "react";
import styled from "styled-components";
import { pageContext } from "../App";

const CommonNavigationStyle = styled.div`
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

export const CommonNavigation = () => {
  const context = useContext(pageContext);

  return (
    <CommonNavigationStyle>
      <Button variant={context.page === "landing" ?"contained":"outlined"} onClick={() => {context.setLanding()}}>かくしお旅行</Button>
      <NavigationRightAreaStyle>
      <Button variant={context.page === "622" ?"contained":"outlined"} onClick={() => {context.set622()}}>6/22</Button>
      <Button variant={context.page === "623" ?"contained":"outlined"} onClick={() => {context.set623()}}>6/23</Button>
      <Button variant={context.page === "624" ?"contained":"outlined"} onClick={() => {context.set624()}}>6/24</Button>
      </NavigationRightAreaStyle>
    </CommonNavigationStyle>
  );
};
