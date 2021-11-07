import React from 'react'
import Button from '@mui/material/Button';
import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      borderColor: '#ffbb33',
      color: '#ffbb33',
      fontWeight: 600,
      marginBottom:'8px',
      "&:hover":{
          backgroundColor: '#ffbb33',
          color: '#fff'
      }
    },
  }),
);


const Answer = (props) => {
    const classes = useStyles();
    
    return(
        <Button
            className={classes.button}
            variant="outlined" 
            onClick={() => props.select(props.content, props.nextId)}
        >
            {props.content}
        </Button>
    )
}

export default Answer


// import Button from '@material-ui/core/Button';
// import {makeStyles} from '@material-ui/core/styles';