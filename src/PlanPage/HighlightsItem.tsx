import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


interface HighlightsItemProps {
    title: string;
    description: string;
    link: string;
    
}
export default function HighlightsItem(
    {title, description, link}: HighlightsItemProps
) {
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" onClick={()=>{
            window.open(link, "_blank");
          }}>Link</Button>
        </CardActions>
      </Card>
    );
  }