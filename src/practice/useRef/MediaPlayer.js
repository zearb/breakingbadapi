import React, { useRef, useState } from 'react'
import { Card, IconButton, makeStyles, Typography, useTheme } from '@material-ui/core'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import PauseIcon from '@material-ui/icons/Pause';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    cardVideo: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '0 auto',
      width: '400px',
      [theme.breakpoints.down('xs')]: {
        width: '98%',
      },
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }));

export const MediaPlayer = () => {

    const classes = useStyles();
    const theme = useTheme();

    const [play, setPlay] = useState(false);

    const videoRef = useRef();

    const handlePlay = () => {

        const video = videoRef.current;

        play ? video.pause() : video.play();
        
        setPlay( !play );


    }

    return (
        <div>
            <Typography variant="h2" component="h1" align="center"   gutterBottom>
                Media Player
            </Typography>
            <Card className={classes.cardVideo}>
                <video width="400" ref={videoRef}>
                    <source src="videos/Sunrise.mp4" type="video/mp4" />
                </video>
                <div className={classes.controls}>
                    <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="play/pause" onClick={handlePlay} >
                        {
                            play ? <PauseIcon className={classes.playIcon} /> : <PlayArrowIcon className={classes.playIcon} />
                        }                        
                    </IconButton>
                    <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                </div>
            </Card>            
        </div>
    )
}
