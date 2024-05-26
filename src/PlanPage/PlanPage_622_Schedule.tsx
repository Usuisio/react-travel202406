import { Button } from "@mui/material";

export const PlanPage_622_Schedule = () => {
  return (
    <>
        
      <Button
        variant="text"
        onClick={() => {
          window.open("https://ekitan.com/timetable/shinkansen/line/401?ts=2590", "_blank");
        }}
      >
        上越新幹線時刻表
      </Button>
      <Button
        variant="text"
        onClick={() => {
          window.open("https://www.snf.jp/", "_blank");
        }}
      >
        新日本海フェリートップページ
      </Button>
      <Button
        variant="text"
        onClick={() => {
          window.open("https://www.snf.jp/guide/embark/#6037812162cd206acf2f14c6a2f77b42eceaf147166e1f8ec99c26ff7e69fed9", "_blank");
        }}
      >
        新潟フェリーターミナル
      </Button>
    </>
  );
};
