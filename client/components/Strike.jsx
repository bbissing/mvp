import React from 'react';
import styles from '../style/style.module.css';
import Loser from './Loser.jsx';

const Strike = (props) => {
  console.log('in Strikes', props);
  if (props.strikes) {
    if (props.strikes === 1) {
      return (
        <div>
          <div className={styles.strike}>x</div>
        </div>
      );
    } else {
      return (
        <div>
          <div className={styles.strike}>xx</div>
          <div><Loser /></div>
        </div>
      )
    }
  } else {
    return (<div></div>);
  }
}

export default Strike;