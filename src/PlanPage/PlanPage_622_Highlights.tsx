import styled from "styled-components";
import HighlightsItem from "./HighlightsItem";

const PlanPage_622_HighlightsStyle = styled.div`
padding:10px;
    gap:10px;
`

export const PlanPage_622_Highlights = () => {
  return (
    <PlanPage_622_HighlightsStyle>
      <HighlightsItem
        title="ぽんしゅ館"
        description="新潟駅に併設されている、新潟の日本酒・食品専門店。
        500円で利き酒を楽しめるサービスもあります。"
        link="https://www.ponshukan.com/niigata/"
        ></HighlightsItem>
        
      <HighlightsItem
        title="新日本海フェリーの楽しみ方"
        description="船内施設の紹介ページ。レストラン・カフェから、大浴場、ジム、カラオケまで。"
        link="https://www.snf.jp/ship/ship_lavender/facilities/"
        ></HighlightsItem>
    </PlanPage_622_HighlightsStyle>
  );
};
