import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Typography from '@mui/material/Typography';
import { colors } from '@mui/material';

const data = [
    {
        title: 'Max Fan Speed',
        content: "the fan is either not turning properly or not working"
    },
    {
        title: "Dut-info",
        content: "The Unit is not able to download the testing agent"
    },
    {
      title: "Av-analysis",
      content: "There is problem with playing sounds, test all dishinputs"
    },
    {
      title: "Recordplayback",
      content: "Test Approved Hdd, Hdd attributes and Short Hdd"
    },
    {
      title: "Bluetooth",
      content: "Test it in Faraday box by pressing 1 and 3 on remote"
    },
    {
      title: "Wifi 5Ghz connectivity",
      content: "Test in Faraday box then change the 5Ghz IC"
    },
    {
      title: "Wifi 2.4Ghz connectivity",
      content: "Test in Faraday box then change the 2.4Ghz IC"
    },
    {
      title: "No error",
      content: "Check where it came from if hipot or Cosmetic"
    },,
    {
      title: "SmartCard",
      content: "Test SmartCard in TA then change IC or Socket"
    },
    {
      title: "PowerUp",
      content: "The unit is unable to turn on, find the short circuit"
    },
    {
      title: "InfraRed",
      content: "Test InfraRed in TA by pressing SKY on Remote"
    },
    {
      title: "HDD",
      content: "Test Approved Hdd and Short Hdd if fail, change HDD"
    }

]

export const Errors = (props) => {
    return (
      <div id='features' className='text-center'>
        <div className='container'>
          <div className='col-md-10 col-md-offset-1 section-title'>
            <h2>errors</h2>
          </div>
          <div className='row'>
              {
                  data.map((d) => (
                      <div className='col-xs-6 col-md-3'>
                        <Flippy
                            flipOnHover={true} // default false
                            flipOnClick={true} // default false
                            flipDirection="horizontal" // horizontal or vertical
                            //ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                            // if you pass isFlipped prop component will be controlled component.
                            // and other props, which will go to div
                            style={{ width: '200px', height: '100px', borderRadius: '25px', margin: '25px' }} /// these are optional style, it is not necessary
                        >
                            <FrontSide style={{background: "linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)"}}>
                              <Typography alignSelf={"center"}>
                                <h3>{d.title}</h3>
                              </Typography>
                            </FrontSide>
                            <BackSide >
                              <Typography alignSelf={"center"} color={"black"}>
                                <h5>{d.content}</h5>
                              </Typography>
                            </BackSide>
                        </Flippy>
                      </div>
                  ))
              }
          </div>
        </div>
      </div>
    )
  }
  