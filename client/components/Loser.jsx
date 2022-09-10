import React from 'react';
import styles from '../style/style.module.css';

const Loser = () => {
  console.log('in Loser');
  return (
    <div>
      <div className={styles.center_lost}>You Lost</div>
      <div className={styles.center}>Oh well, better luck next time! While you're here, if you'd like still like to make a donation, please feel free!</div>
      <div>
        <form className={styles.center}>
        <ul className={styles.center} id={styles.lose_form_list}>
           <li>
            <label className={styles.label}>Humane Society: </label>
            <input className={styles.input}></input>
           </li>
           <li>
             <label className={styles.label}>Salvation Army: </label>
             <input className={styles.input}></input>
           </li>
           <li>
             <label className={styles.label}>Feeding America: </label>
             <input className={styles.input}></input>
           </li>
           <li>
             <label className={styles.label}>American Heart Association: </label>
             <input className={styles.input}></input>
           </li>
         </ul>
       </form>
      </div>
      <div><button id={styles.lose_next}>Next</button></div>
    </div>
  );
}

export default Loser;

