import React from 'react';
import styles from '../style/style.module.css';

const Winner = () => {
  console.log('in Winner');
  return (
    <div>
      <div><h2 className={styles.center}>Prize Money: $250</h2></div>
      <div><img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSu5Jx0OFOeU1S0WTkLzIw2HYWFHjINvS0jYSuJv_tsDhbplbpp" className={styles.piggy}/></div>
      <div className={styles.center}>You Won!</div>
      <div className={styles.center}>Please Enter the amount you'd like to contribute to each organization and click submit. Total must add up to winnings.</div>
      <div>
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
      <div><button className={styles.center}>Submit</button></div>
    </div>
  );
}

export default Winner;