import React, { useRef, useState } from 'react'
import { Button, Grid, Snackbar, TextField, Typography } from '@material-ui/core'

export const CopyApp = () => {

    const [text, setText] = useState('Hola!');
    const [isCopied, setIsCopied] = useState(false);
    const inputRef = useRef();

    const handleCopy = () => {
        const input = inputRef.current;
        input.select();
        document.execCommand('copy');

        setIsCopied(true);

        setTimeout( () => setIsCopied(false) , 1500 )
    }

    return (
        <div>
            <Typography variant="h2" component="h1" align="center"   gutterBottom>
                CopyApp
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
                        inputProps = {{
                            ref: inputRef
                        }}
                        onChange={(e) => setText( e.target.value )}
                    />

                </Grid>
                <Grid>
                    <Button variant="contained" color="primary" onClick={handleCopy} >
                        Copy
                    </Button>
                </Grid>
            </Grid>
            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                }}
                open={isCopied}
                message="Texto copiado!"
            />
        </div>
    )
}
