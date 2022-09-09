import React from 'react';
import Challenge from './Challenge.jsx';
import Strike from './Strike.jsx';
import $ from 'jquery';
import styles from '../style/style.module.css';
import Winner from './Winner.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
      prize: '$250',
      strikes: null,
      score: 0,
      isWinner: null,
    };

    this.setStrike = this.setStrike.bind(this);
    this.setScore = this.setScore.bind(this);
  }

  setStrike(num) {
    this.setState({strikes: num});
  }

  setScore() {
    this.setState({score: this.state.score + 1});
  }

  retrieve() {
      $.ajax({
        url: "http://localhost:3000/retrieve",
        type: 'GET',
        dataType: 'json',
        success: (data) => {
          this.setState({ questions: data });
        },
        error: function(err) {console.log(err)}
      });
  }

  render() {
    if (this.state.score >= 8) {
      return (
        <div>
          <div><Winner /></div>
        </div>
      )
    } else if (this.state.strikes === 2) {
      return (
        <div>
          <div><Strike strikes={this.state.strikes}/></div>
        </div>
      )
    } else if (this.state.questions === null) {
      this.retrieve();
    } else {
      return (
        <div>
           <div>
             <h2 className={styles.center}>Prize Money: $250</h2>
           </div>
           <div>
             <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSu5Jx0OFOeU1S0WTkLzIw2HYWFHjINvS0jYSuJv_tsDhbplbpp" className={styles.piggy}/>
           </div>
           <div><Challenge data={this.state.questions} setStrike={this.setStrike} setScore={this.setScore}/></div>
           <div><Strike strikes={this.state.strikes}/></div>
        </div>
      );
    }
  }
}

export default App;


// useEffect(() => {
//   setInterval(() => {
//     setCount(prevCount => prevCount + 1);
//   }, 1000);
// }, []);