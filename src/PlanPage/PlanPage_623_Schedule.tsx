import { Button } from "@mui/material";

export const PlanPage_623_Schedule = () => {
  return (
    <>
      <Button
        variant="text"
        onClick={() => {
          window.open("https://ekitan.com/timetable/railway/line-station/28-46/d2", "_blank");
        }}
      >
        小樽駅時刻表
      </Button>
      <Button
        variant="text"
        onClick={() => {
          window.open("https://ekitan.com/timetable/railway/line-station/28-48/d2?dw=2", "_blank");
        }}
      >
        小樽築港駅時刻表
      </Button>
      <Button
        variant="text"
        onClick={() => {
          window.open("https://ekitan.com/timetable/railway/line-station/8-16/d1", "_blank");
        }}
      >
        札幌駅時刻表（苫小牧方面）
      </Button><Button
        variant="text"
        onClick={() => {
          window.open("https://ekitan.com/timetable/railway/line-station/8-3/d1", "_blank");
        }}
      >
        南千歳駅時刻表
      </Button>
        <br/>
      <Button
        variant="text"
        onClick={() => {
          window.open("https://www.donanbus.co.jp/data/tomakomai/line/now/tomakomai_line_24_hd.pdf", "_blank");
        }}
      >
        苫小牧駅から苫小牧港へのバス時刻表
      </Button>
      <Button
        variant="text"
        onClick={() => {
          window.open("https://www.chuo-bus.co.jp/highway/index.cgi?ope=det&n=20&t=150&o=1", "_blank");
        }}
      >
        札幌→苫小牧フェリー時刻表
      </Button>
        <br/>
      <Button
        variant="text"
        onClick={() => {
          window.open("https://www.taiheiyo-ferry.co.jp/", "_blank");
        }}
      >
        太平洋フェリートップページ
      </Button>
      <Button
        variant="text"
        onClick={() => {
          window.open("https://www.taiheiyo-ferry.co.jp/koro/tomakomai.html", "_blank");
        }}
      >
        苫小牧港
      </Button>
    </>
  );
};
