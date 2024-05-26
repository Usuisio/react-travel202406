
import styled from "styled-components";

export const CommonTextButtonStyle = styled.text`
    font-family: 'sawarabi-mincho';
    font-size: 10px;
    padding: 10px;
`;

interface CommonTextButtonProps {
    onClick: () => void;
    text: string;
}

export const CommonTextButton: React.FC<CommonTextButtonProps> = ({ onClick, text }) => {
    return (
        <CommonTextButtonStyle onClick={onClick}>
            {text}
        </CommonTextButtonStyle>
    );
}