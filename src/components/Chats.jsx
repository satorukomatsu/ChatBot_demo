import React from 'react'
import List from '@mui/material/List';
import { createStyles, makeStyles } from '@mui/styles';
import {Chat} from './index';

const Chats = (props) => {

    return (
        <List >
            {props.chats.map((chat) => {
                return <Chat text={chat.text} type={chat.type} key={chat.toString()}/>
            })}
        </List>
    )
}

export default Chats
