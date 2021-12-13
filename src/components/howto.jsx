import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ExpandCard from './card';

const data = [
    {
        title: "How to Factory Reset",
        content: "Connect the unit to the power source, then you will reach a blue screen. when it goes blank press home key go down to settings press on remote 0,0,1,OK respectively, click on factory reset then confirm. it will restart and wait again for the blue screen and disconnect from power source"
    },
    {
      title: "How to LDO",
      content: "Open model 130 unit up to the motherboard and also remove the fan. Then right on the side there is an IC of U340 replace it and check if the unit powers on"
    },
    {
      title: "How to go into ETHOS",
      content: "Connect unit properly with Ln1,Ln2,ethernet,Hdmi then power source, It will power up and Hello screen will appear, as soon as it goes blank press and hold the power button untill the screen shows it started to downloading the Test Agent"
    }];

export const Howto = (props) => {
    return (
      <div id='team' className='text-center'>
        <div className='container'>
          <div className='col-md-8 col-md-offset-2 section-title'>
            <h2>How to</h2>
            <p>
              Sometimes you forget what to do but here you will always remember
            </p>
          </div>
          <div id='row'>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {data.map((data, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <ExpandCard data={data}/>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </div>
        </div>
      </div>
    )
  }
  