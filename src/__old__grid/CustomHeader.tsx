import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";

const CustomHeaderStyle = styled(`div`)`
  grid-area: header;
  background-color: aliceblue;
`;
const CustomAppBar = styled(AppBar)`
  background-color: #4466DD !important; /* AppBarの背景を透明にする */
  box-shadow: none; /* シャドウを削除 */
`;
const CustomSpan = styled(`span`)`
    font-family: 'Sawarabi Mincho';
    font-size: large;
`;

export const CustomHeader = () => {
  return (
    <CustomHeaderStyle>
      <CustomAppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <CustomSpan>かくしお旅行</CustomSpan>
        </Toolbar>
      </CustomAppBar>
    </CustomHeaderStyle>
  );
};
