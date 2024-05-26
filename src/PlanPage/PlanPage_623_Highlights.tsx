import styled from "styled-components";
import HighlightsItem from "./HighlightsItem";

const PlanPage_622_HighlightsStyle = styled.div`
padding:10px;
    gap:10px;
`

export const PlanPage_623_Highlights = () => {
  return (
    <PlanPage_622_HighlightsStyle>
      <HighlightsItem
        title="太平洋フェリー「きそ」船舶紹介"
        description="---"
        link="https://www.taiheiyo-ferry.co.jp/senpaku/kiso/index.html"
        ></HighlightsItem>
    </PlanPage_622_HighlightsStyle>
  );
};
