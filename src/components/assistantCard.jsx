import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

export const AssistantCard = ({data,closeAssistant,next}) => {

    return (
        <Card >
            <CardHeader 
                action={
                <IconButton size = 'small' onClick={closeAssistant} >
                    <Close/>
                </IconButton>
                }
            />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div" align="center">
            {data.questionText}
            </Typography>
          </CardContent>
          <CardActions style={{justifyContent: "space-evenly"}}>
            { !data.end ? 
            <div>
                <Button onClick={next} size="large">Yes</Button> 
                <Button onClick={next} size="large">No</Button>
            </div>: null}
          </CardActions>
        </Card>
      );
  }
  