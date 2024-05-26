import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Typography } from '@mui/material';


export const PlanPage_624_Timeline = () => {
  return (
    <Timeline >
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
        10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        
        <Typography variant="h6" component="span">
        仙台港着
          </Typography>
          <Typography color="text.secondary">
            松島観光、仙台市内で昼食、お土産購入
          </Typography>
        </TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          午後
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
          仙台駅から帰京
          </Typography>
        </TimelineContent>
        
      </TimelineItem>
    </Timeline>
  );
  }