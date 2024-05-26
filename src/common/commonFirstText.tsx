import styled from "styled-components";

const CommonFirstTextStyle = styled.span`
  max-width:100%;
  font-size: 32px;
  font-weight: bold;
  font-family: "Noto Sans JP", sans-serif;
  padding: 10px;

`;

interface CommonFirstTextProps {
    text: string;
    fontSize?: number
}

export const CommonFirstText: React.FC<CommonFirstTextProps> = ({ text, fontSize = 32}) => {
    return (
        <CommonFirstTextStyle style={{ fontSize: fontSize }}>
            {text}
        </CommonFirstTextStyle>
    );
}