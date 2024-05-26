import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Typography } from "@mui/material";

export const PlanPage_623_Timeline = () => {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          04:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            小樽港に到着
          </Typography>
          <Typography color="text.secondary">
            早朝未明のため、小樽港からの連絡バスはありません。
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          16:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            苫小牧駅から苫小牧港フェリーターミナルへ移動
          </Typography>

          <Typography color="text.secondary">
            出発時刻：16:35（土日祝運行） 苫小牧駅前①のりば （もしくは15:00に札幌駅前から苫小牧フェリーターミナルへの直行バスがあります。）
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
        19:00 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>苫小牧港出発</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
