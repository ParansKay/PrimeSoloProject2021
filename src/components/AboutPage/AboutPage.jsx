import React from 'react';
//MATERIAL UI IMPORTS 
import Typography from '@mui/material/Typography';
import { flexbox } from '@mui/system';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="mainactivity">
      <div style={{'padding-bottom': '10px'}}>
      <h2 style={{'margin':'20px', 'padding-top':'40px','font-family':'Poiret One', 'font-size':'40px'}}>About</h2>
      <Typography style={{'margin':'20px','padding-top':'10px','font-family':'roboto', 'font-weight':'250', 'font-size':'20px', 'color':'#eae2b7'}}>First, <b>THANK YOU</b> for using this app!</Typography>
      <Typography style={{'margin-left':'20px','margin-right':'20px','font-family':'roboto', 'font-size':'20px', 'font-weight':'250', 'color':'#eae2b7'}}>This app was made with the aim to make information on acting more accessible to the theatre community. I remember how crucial it was for my directorial career to provide the right tools for my actors in the rehearsal space. Now, the difference for new directors in the field is they don't have to haul around books and supplies because the information is at their fingertips and constantly evolving and expanding. <b>#ThanksTechnology</b></Typography>
      <br/>
      <br/>
      <flexbox style={{'margin-left':'20px','padding':'10px','font-family':'roboto', 'font-weight':'500', 'font-size':'20px', 'background-color':'#fcbf49','color':'#003049', 'border-radius':'30px'}}>Features in the future:</flexbox>
      <Typography style={{'margin-left':'20px','margin-right':'20px', 'margin-top':'35px', 'font-size':'20px', 'font-weight':'250', 'color':'#eae2b7'}}>• Ability to add excercises to a schedule</Typography>
      <Typography style={{'margin-left':'20px', 'margin-right':'20px','margin-top':'10px', 'margin-bottom':'10px', 'font-size':'20px', 'font-weight':'250', 'color':'#eae2b7'}}>• Adding "shared by" username</Typography>
      <Typography style={{'margin-left':'20px', 'margin-right':'20px','font-size':'20px', 'margin-top':'10px', 'margin-bottom':'10px','font-weight':'250', 'color':'#eae2b7'}}>• Adding profiles for users, especially instructors and coaches so that users are able to view their upcoming projects and classes. </Typography>
      <Typography style={{'margin-left':'20px', 'margin-right':'20px','margin-top':'10px', 'margin-bottom':'10px', 'font-size':'20px', 'font-weight':'250', 'color':'#eae2b7'}}>• Ability to rate and view ratings for each activity</Typography>
      <Typography style={{'margin-left':'20px', 'margin-right':'20px','margin-top':'10px', 'margin-bottom':'10px', 'font-size':'20px', 'font-weight':'250', 'color':'#eae2b7'}}>• Ability to select / edit multiple tags</Typography>
      <Typography style={{'margin-left':'20px', 'margin-right':'20px','margin-top':'10px', 'margin-bottom':'10px', 'font-size':'20px', 'font-weight':'250', 'color':'#eae2b7'}}>• Text notifications to admin for new user submissions</Typography>

      <br/>
      <br/>
      <flexbox style={{'margin-left':'20px','padding':'10px','font-family':'roboto', 'font-weight':'500', 'font-size':'20px', 'background-color':'#fcbf49','color':'#003049', 'border-radius':'30px'}}>Technology Utilized:</flexbox>
      <Typography style={{'margin-left':'20px', 'margin-top':'35px', 'font-size':'20px', 'font-weight':'250', 'color':'#eae2b7'}}>• React</Typography>
      <Typography style={{'margin-left':'20px','margin-top':'10px', 'margin-bottom':'10px', 'font-size':'20px', 'font-weight':'250', 'color':'#eae2b7'}}>• Redux</Typography>
      <Typography style={{'margin-left':'20px','margin-top':'10px', 'margin-bottom':'10px', 'font-size':'20px', 'font-weight':'250', 'color':'#eae2b7'}}>• Saga</Typography>
      <Typography style={{'margin-left':'20px','margin-top':'10px', 'margin-bottom':'10px', 'font-size':'20px', 'font-weight':'250', 'color':'#eae2b7'}}>• Node.js</Typography>
      <Typography style={{'margin-left':'20px','margin-top':'10px', 'margin-bottom':'10px', 'font-size':'20px', 'font-weight':'250', 'color':'#eae2b7'}}>• Express</Typography>
      <Typography style={{'margin-left':'20px','margin-top':'10px', 'margin-bottom':'10px', 'font-size':'20px', 'font-weight':'250', 'color':'#eae2b7'}}>• PostgreSQL</Typography>
      <Typography style={{'margin-left':'20px','margin-top':'10px', 'margin-bottom':'10px', 'font-size':'20px', 'font-weight':'250', 'color':'#eae2b7'}}>• Material UI</Typography>
      <br/>
      <br/>
      <flexbox style={{'margin-left':'20px','padding':'10px','font-family':'roboto', 'font-weight':'500', 'font-size':'20px', 'background-color':'#fcbf49','color':'#003049', 'border-radius':'30px'}}>Special thanks to:</flexbox>
      <Typography style={{'margin-left':'20px', 'margin-right':'20px','margin-top':'35px', 'font-size':'20px', 'font-weight':'250', 'color':'#eae2b7'}}>• Prime Digital Academy, especially my instructor Dev and cohort-mate Amanda!</Typography>
      <Typography style={{'margin-left':'20px', 'margin-right':'20px','margin-top':'10px', 'margin-bottom':'10px', 'font-size':'20px', 'font-weight':'250', 'color':'#eae2b7'}}>• Dillon Baxendell</Typography>
      <Typography style={{'margin-left':'20px', 'margin-right':'20px','margin-top':'10px', 'margin-bottom':'10px', 'font-size':'20px', 'font-weight':'250', 'color':'#eae2b7'}}>• Anne Byrd, and the incredible instructors at Normandale College Theatre</Typography>
      <Typography style={{'margin-left':'20px', 'margin-right':'20px','margin-top':'10px', 'margin-bottom':'10px', 'font-size':'20px', 'font-weight':'250', 'color':'#eae2b7'}}>• Daleko Arts Theatre</Typography>
      </div>
    </div>
  );
}

export default AboutPage;
