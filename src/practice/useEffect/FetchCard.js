import React, { useCallback, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { Card, Fab, ListItemIcon, Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import AlbumIcon from '@material-ui/icons/Album';
import RefreshIcon from '@material-ui/icons/Refresh';
import getUser from '../../helpers/getUser';
import getPost from '../../helpers/getPost';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      marginBottom: '1rem'
    },
  }));


export const FetchCard = () => {
    const classes = useStyles();

    const [user, setUser] = useState({});

    const [post, setPost] = useState([]);

    const updatePost = useCallback(
        () => {
        
            getPost(user.id)
                .then( (newPost) => {
                    setPost( newPost );
                } );
    
        },
        [user.id],
    )

    const updateUser = () => {

        getUser()
            .then( ( newUser ) => {
                setUser(newUser);
            } );

    }

    useEffect( () => { updateUser() } , [] );

    useEffect( () => { 
        user?.id && updatePost();
     } , [user, updatePost ] );

    return (
        <Grid container justify="center">
        <Card className={classes.root}>
            <List> 
            <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <PersonOutlineOutlinedIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary={user.name} secondary={user.email} />
            </ListItem>
            </List>
            <Grid container justify="center">
                <Grid item  >
                    <Fab color="primary" aria-label="add">
                        <RefreshIcon onClick={updateUser} />
                    </Fab> 
                </Grid>
            </Grid>
            <List component="nav" aria-label="main posts" >
                {
                    post.map( post => (
                        <ListItem button key={post.id}>
                            <ListItemIcon> 
                                <AlbumIcon />
                            </ListItemIcon>
                            <ListItemText primary={post.title} />
                        </ListItem>
                    ) )
                }
                
            </List>
        </Card>   
                  
        </Grid> 
    );
}




