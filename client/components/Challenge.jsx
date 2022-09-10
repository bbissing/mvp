import React from 'react';
import Strike from './Strike.jsx';
import styles from '../style/style.module.css';


class Challenge extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      challenge: this.props.data,
      index: 0,
      style: null,
      strikes: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
   e.preventDefault();
   console.log(e.target.childNodes[1].nodeValue);
   console.log(this.state.challenge[this.state.index].correct);
   console.log(e.target.childNodes[1].nodeValue === this.state.challenge[this.state.index].correct);
   if (e.target.childNodes[1].nodeValue === this.state.challenge[this.state.index].correct) {
     this.setState({style: styles.lightGreen});
     this.props.setScore(this.state.index);
   } else {
     this.setState({style: styles.red});
     if (this.state.strikes === 0) {
       this.setState({strikes: 1});
       this.props.setStrike(this.state.index);
     } else {
       this.props.setStrike(this.state.index);
     }
   }
   console.log(e);
  }

  render(){
    if (this.state.index === this.state.challenge.length - 1) {
      this.componentWillUnmount();
    }

    return (
      <div>
        <div><h4 className={styles.center + ' ' + styles.challenge_spacing}>{ this.state.challenge[this.state.index].question }</h4></div>
        <div onClick={e => { this.handleClick(e); }} className={this.state.style + ' ' + styles.center + ' ' + styles.challenge_answer}> A: { this.state.challenge[this.state.index].a } </div>
        <div onClick={e => { this.handleClick(e); }} className={this.state.style + ' ' + styles.center + ' ' + styles.challenge_answer}> B: { this.state.challenge[this.state.index].b } </div>
        <div onClick={e => { this.handleClick(e); }} className={this.state.style + ' ' + styles.center + ' ' + styles.challenge_answer}> C: { this.state.challenge[this.state.index].c } </div>
        <div onClick={e => { this.handleClick(e); }} className={this.state.style + ' ' + styles.center + ' ' + styles.challenge_answer}> D: { this.state.challenge[this.state.index].d } </div>
      </div>
    );
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ challenge: this.props.data, index: this.state.index+1, style: null }), 10000);
  }

  componentWillUnmount() {
    console.log('in componentWillUnmount');
    clearInterval(this.interval);
  }
}

export default Challenge;


//import React from 'react';

// const Challenge = (props) => {
//   console.log(props);
//   if (!props.data) {
//     return (<div>inside Challenge.jsx</div>);
//   } else {
//     return (
//       <div>
//         <p>{props.data[1].question}</p>
//         <p>A: {props.data[1].a}</p>
//         <p>B: {props.data[1].b}</p>
//         <p>C: {props.data[1].c}</p>
//         <p>D: {props.data[1].d}</p>
//       </div>
//     );
//   }
// };

// export default Challenge;

//className={this.state.style}
//e.target.classList.add('b');
//e.target.classList.toggle('lightGreen');
