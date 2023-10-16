import React, { useState } from "react";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  searchButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    textAlign: 'center',
    paddingLeft: '20px',
    paddingRight: '20px',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    border: '2px solid #4CAF50',
    borderRadius: '10px',
    transitionDuration: '0.4s',
    cursor: 'pointer',
    marginLeft: '10px',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black'
    },
  },
  inputField: {
    width: '30%',
    paddingLeft: '10px',
    fontSize: '12pt',
    height: '40px',
    border: '2px solid #4CAF50',
    borderRadius: '10px'
  },
  section: {
    display: 'flex',
    justifyContent: 'center'
  }

});

interface IfirstChildProps {
  updateRepositories: (arg: string) => void;
}

export const Form: React.FC<IfirstChildProps> = ({ updateRepositories }) => {
  const [userName, setUserName] = useState<string>('');
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <input
        type='text'
        className={classes.inputField}
        value={userName}
        onChange={event => setUserName(event.target.value)}
        placeholder='language or user or name'
        required
      />
      <button className={classes.searchButton} onClick={() => updateRepositories(userName)}>
        Search
      </button>
    </section>
  );
};
