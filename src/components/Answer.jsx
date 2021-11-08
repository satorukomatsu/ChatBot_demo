import React from 'react'
import Button from '@mui/material/Button';
import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles(() =>
  createStyles({
    "button": {
      borderColor: '#ffbb33 !important',
      color: '#ffbb33 !important',
      fontWeight: 600,
      marginBottom:'8px !important',
      "&:hover":{
          backgroundColor: '#ffbb33 !important',
          color: '#fff !important'
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




