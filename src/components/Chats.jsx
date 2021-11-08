import React from 'react'
import List from '@mui/material/List';
import { createStyles, makeStyles } from '@mui/styles';
import {Chat} from './index';

const useStyles = makeStyles(() =>
    createStyles({
        "chats": {
            overflow: 'auto',
            height: 400,
            padding: '0 !important'
        }
    })   

);

const Chats = (props) => {
    const classes = useStyles();

    return (
        <List className={classes.chats}>
            {props.chats.map((chat) => {
                return <Chat text={chat.text} type={chat.type} key={chat.toString()}/>
            })}
        </List>
    )
}

export default Chats
