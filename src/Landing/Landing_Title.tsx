import styled from "styled-components";
import { CommonFirstText } from "../common/commonFirstText";
import { CommonSecondText } from "../common/commonSecondText";
const Landing_TitleStyle = styled.div`
  max-width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Landing_Title = () => {
  return (
    <Landing_TitleStyle>
      <CommonFirstText text="かくしお旅行 旅のしおり"></CommonFirstText>
      <CommonSecondText text="- 2024/06/22-24 フェリーでゆったり夏の旅 -"></CommonSecondText>
    </Landing_TitleStyle>
  );
};
