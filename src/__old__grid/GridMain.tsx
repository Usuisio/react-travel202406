import styled from 'styled-components';
import { CustomHeader } from './CustomHeader';


const CustomSide = styled.div`
  grid-area: side;
  background-color: lightgray;
`;

const CustomMain = styled.div`
  grid-area: main;
  background-color: white;
`;

const CustomFooter = styled.div`
  grid-area: footer;
  background-color: lightblue;
`;

const GridStyle = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    "side main main"
    "footer footer footer";
  grid-template-rows: 1fr 10fr 1fr;
  grid-template-columns: 1fr 2fr 2fr;
  gap: 10px;
  width: 100%;
  height: 100vh;
  margin: 0;
`;

export const GridMain = () => {
  return (
    
    <GridStyle>
      <CustomHeader />
      <CustomSide>Sidebar</CustomSide>
      <CustomMain>Main Content</CustomMain>
      <CustomFooter>Footer</CustomFooter>
    </GridStyle>
  );
};