import styled from "styled-components";
import { Button } from "@mui/material";
import { CommonFirstText } from "../common/commonFirstText";
import { CommonSecondText } from "../common/commonSecondText";

const PageInviteCaptionStyle = styled.div`
  max-width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

interface PageInviteCaptionProps {
  text1: string;
  text2: string;
  buttonText: string;
  onClick: () => void;
}

export const PageInviteCaption: React.FC<PageInviteCaptionProps> = ({
  text1,
  text2,
  buttonText,
  onClick,
}) => {
  return (
    <PageInviteCaptionStyle>
      <CommonFirstText text={text1} fontSize={32}></CommonFirstText>
      <CommonSecondText text={text2} fontSize={20}></CommonSecondText>
      <div style={{ padding: 10 }}> </div>
      <Button variant="contained" onClick={()=>{
        console.log("Button Clicked");
        onClick();
      }}>
        {buttonText}
      </Button>
    </PageInviteCaptionStyle>
  );
};
