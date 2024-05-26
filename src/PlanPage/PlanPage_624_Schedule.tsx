import { Button } from "@mui/material";

export const PlanPage_624_Schedule = () => {
  return (
    <>
        
      <Button
        variant="text"
        onClick={() => {
          window.open("https://www.taiheiyo-ferry.co.jp/koro/sendai.html", "_blank");
        }}
      >
        仙台港
      </Button>
      <Button
        variant="text"
        onClick={() => {
          window.open("https://ekitan.com/timetable/railway/line-station/125-8/d2?dw=0", "_blank");
        }}
      >
        多賀城駅時刻表（松島に行きたい場合）
      </Button>
      <Button
        variant="text"
        onClick={() => {
          window.open("https://ekitan.com/timetable/shinkansen/section/101/sf-1021/st-2590", "_blank");
        }}
      >
        東北新幹線（仙台→東京）時刻表
      </Button>
    </>
  );
};
