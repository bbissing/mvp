import React from 'react';
import styles from '../style/style.module.css';

const Loser = () => {
  console.log('in Loser');
  return (
    <div>
      <div className={styles.center}>You Lost</div>
      <div className={styles.center}>Oh well, better luck next time! While you're here, if you'd like still like to make a donation, please feel free.</div>
      <div >
        <form className={styles.center}>
        <ul>
           <li>
            <label>Humane Society: </label>
            <input></input>
           </li>
           <li>
             <label>Salvation Army: </label>
             <input></input>
           </li>
           <li>
             <label>Feeding America: </label>
             <input></input>
           </li>
           <li>
             <label>American Heart Association: </label>
             <input></input>
           </li>
         </ul>
       </form>
      </div>
      <div><button>Next</button></div>
    </div>
  );
}

export default Loser;