import React, { useRef, useState } from 'react'
import { Button, Grid, TextField, Typography } from '@material-ui/core'

export const FocusApp = () => {
    
    const [text, setText] = useState('Hola!');

    const inputRef = useRef('');

    const handleFocus = () => {
        const input = inputRef.current;
        console.log('fd');
        input.focus();
    };
 
    return (
        <div>
            <Typography  variant="h2" component="h1" align="center" gutterBottom>
                Focus App
            </Typography>
            <Grid container  style={{marginTop:40}}
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item style={{marginBottom:20}}>
                    <TextField id="iText" 
                        label="Text" 
                        variant="outlined" 
                        defaultValue={text} 
                        onChange={(e) => setText( e.target.value )} 
                        inputProps={{
                            ref: inputRef,
                        }}
                    />

                </Grid>
                <Grid>
                    <Button variant="contained" color="primary" onClick={handleFocus}>
                        Focus
                    </Button>
                </Grid>
            </Grid>
            
            
        </div>
    )
}
