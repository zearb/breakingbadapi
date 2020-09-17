import React, { useEffect, useState } from 'react';
import getCharacters from './helpers/getCharacters';
import { Grid, Card, CardHeader, CardMedia, Typography, makeStyles,createMuiTheme, ThemeProvider  } from '@material-ui/core';

const theme = createMuiTheme();

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    marginBottom: 24
  },
  media: {
    height: 450,
    objectFit: 'auto'
  }
});

function App() {

  const [state, setState] = useState({data:null,loading:true,error:null});  
    
  useEffect(() => {

    getCharacters()
    .then( data => {
      setState( {
        data,
        loading:false,
        error:null
      } );
    } )

  }, []);

  const classes = useStyles();

  return( 
    <div>
      <ThemeProvider theme={theme}>
        <Typography  variant="h1" component="h1" align="center" gutterBottom>
          Breaking Bad Api
        </Typography>
      </ThemeProvider>      
      <Grid
        container    
        direction="row"
        justify="center"
        alignItems="center"
      >
        
        {
          state.data && 
          state.data.map( item => 

            <Grid
              item         
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={12} sm={6} md={4} lg={3} xl={2}
              key={item.char_id}
            >
              <Card className={classes.root}>
                  
                  <CardMedia
                    component="img"
                    className={classes.media}
                    image={item.img}
                    title={item.name}
                    alt={item.name}
                  />

                  <CardHeader
                    title={item.name}
                    subheader={item.nickname}
                  />

              </Card>
            </Grid>
            
            )
        }

        

      </Grid>
    </div>
   );

}

export default App;
