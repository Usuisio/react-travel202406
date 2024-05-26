import styled from "styled-components";
import { PageInviteCaption } from "./PageInviteCaption";

const PictCaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0; // Add a value for the margin property

    @media (max-width: 768px) {
        flex-direction: column; /* スマホでは縦方向に並べる */
    }
`;

const PageInviteImageStyle = styled.img`
    max-width: 100%;
    height:auto;
    border-radius: 50px;
    padding: 20px;
    `;


interface PictCaptionContainerProps {
    text1:string,
    text2:string,
    buttonText:string,
    onClick:()=>void
    pictPath:string,
}

export const Landing_PictLeftCaptionContainer:React.FC<PictCaptionContainerProps> = ({text1,text2,buttonText,onClick,pictPath}) => {

    return (
        <PictCaptionContainer>
            <PageInviteCaption text1={text1} text2={text2} buttonText={buttonText} onClick={onClick}></PageInviteCaption>
            <PageInviteImageStyle src={pictPath} />
        </PictCaptionContainer>
    );
}
export const Landing_PictRightCaptionContainer:React.FC<PictCaptionContainerProps> = ({text1,text2,buttonText,onClick,pictPath}) => {
    return (
        <PictCaptionContainer>
            <PageInviteImageStyle src={pictPath} />
            <PageInviteCaption text1={text1} text2={text2} buttonText={buttonText} onClick={onClick}></PageInviteCaption>
        </PictCaptionContainer>
    );
}