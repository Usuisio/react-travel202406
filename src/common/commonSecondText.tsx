import styled from "styled-components";

const CommonSecondTextStyle = styled.span`
  font-size: 16px;
  font-family: "Noto Sans JP", sans-serif;
  color: gray;
  padding: 10px;
`;

interface CommonSecondTextProps {
    text: string;
    fontSize?: number
}

export const CommonSecondText: React.FC<CommonSecondTextProps> = ({ text, fontSize = 16 }) => {
    return (
        <CommonSecondTextStyle style={{ fontSize: fontSize }}>
            {text}
        </CommonSecondTextStyle>
    );
}