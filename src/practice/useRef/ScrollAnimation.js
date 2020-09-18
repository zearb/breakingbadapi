import React, { useEffect, useState, useRef } from 'react'
import { Typography } from '@material-ui/core'

export const ScrollAnimation = () => {

    const [ background, setBackground ] = useState('#515151');   
    
    const divRef = useRef();

    useEffect( () => {

        const handleScroll = () => {
            const divv = divRef.current;
            const { y } = divv.getBoundingClientRect();
            
            const backgroundColor = y <= 0 ? '#F48DA3' : '#515151';

            setBackground(backgroundColor);

        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, [] )

    return (
        <div>
            <div ref={divRef} style={{height:"180vh",background}}>
                <Typography variant="h2" component="h1" align="center"   gutterBottom>
                    Scroll to change background-color
                </Typography>
            </div>
        </div>
    )
}
