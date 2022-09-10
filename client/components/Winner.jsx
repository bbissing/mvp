import React from 'react';
import styles from '../style/style.module.css';

const Winner = () => {
  console.log('in Winner');
  return (
    <div>
      <div><h2 className={styles.center}>Prize Money: <span className={styles.prize}>$250</span></h2></div>
      <div><img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSu5Jx0OFOeU1S0WTkLzIw2HYWFHjINvS0jYSuJv_tsDhbplbpp" className={styles.piggy}/></div>
      <div><h3 className={styles.center_win}>You Won!</h3></div>
      <div className={styles.center}>Please Enter the amount you'd like to contribute to each organization and click submit. Total must add up to winnings.</div>
      <div>
        <form className={styles.center}>
        <ul className={styles.center} id={styles.win_form_list}>
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
      <div><button id={styles.win_submit}>Submit</button></div>
    </div>
  );
}

export default Winner;