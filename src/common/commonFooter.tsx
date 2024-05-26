
import styled from "styled-components";

const CommonFooterStyle = styled.div`
  position: relative;
  height: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  opacity: 0.6;
`;

const CommonFooterStyle_PictLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    ),
    /* 上下のグラデーション */ url("./images/Footer.png");
  background-size: cover;
  background-position: center;
  opacity: 1;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CommonFooter = () => {
  return (
    <CommonFooterStyle>
      <CommonFooterStyle_PictLayer>
      </CommonFooterStyle_PictLayer>
    </CommonFooterStyle>
  );
};
