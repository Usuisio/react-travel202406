import { Divider } from "@mui/material";
import { Landing_Navigation } from "./Landing_Navigation";
import { Landing_Title } from "./Landing_Title";
import {
  Landing_PictLeftCaptionContainer,
  Landing_PictRightCaptionContainer,
} from "./Landing_PictCaptionContainer";
import { useContext, useEffect, useState } from "react";
import { Landing_Footer } from "./Landing_Footer";
import { pageContext } from "../App";

export const Landing = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const context = useContext(pageContext);

  return (
    <>
      <Landing_Navigation></Landing_Navigation>
      <Landing_Title></Landing_Title>
      <Divider></Divider>
      <Divider></Divider>
      {isMobile ? (
        <Landing_PictRightCaptionContainer
          text1={"6/22"}
          text2={"新潟から日本海を超えて北の大地へ"}
          buttonText={"旅程を見る"}
          pictPath={"./images/akashia_640.png"}
          onClick={context.set622}
        ></Landing_PictRightCaptionContainer>
      ) : (
        <Landing_PictLeftCaptionContainer
          text1={"6/22"}
          text2={"新潟から日本海を超えて北の大地へ"}
          buttonText={"旅程を見る"}
          pictPath={"./images/akashia_640.png"}
          onClick={context.set622}
        ></Landing_PictLeftCaptionContainer>
      )}

      <Divider></Divider>
      <Landing_PictRightCaptionContainer
        text1={"6/23"}
        text2={"道央を縦断しておいしいものを巡る"}
        buttonText={"旅程を見る"}
        pictPath={"./images/kaisen_640.png"}
        onClick={context.set623}
      ></Landing_PictRightCaptionContainer>

      <Divider></Divider>

      {isMobile ? (
        <Landing_PictRightCaptionContainer
          text1={"6/24"}
          text2={"太平洋で朝日を眺めながら杜の都へ"}
          buttonText={"旅程を見る"}
          pictPath={"./images/matsushima_640.png"}
          onClick={context.set624}
        ></Landing_PictRightCaptionContainer>
      ) : (
        <Landing_PictLeftCaptionContainer
          text1={"6/24"}
          text2={"太平洋で朝日を眺めながら杜の都へ"}
          buttonText={"旅程を見る"}
          pictPath={"./images/matsushima_640.png"}
          onClick={context.set624}
        ></Landing_PictLeftCaptionContainer>
      )}

      <Landing_Footer></Landing_Footer>
    </>
  );
};
