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
      strikes: null
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
     this.props.setScore();
   } else {
     this.setState({style: styles.red});
     if (!this.state.strikes) {
       this.setState({strikes: 1});
       this.props.setStrike(1);
     } else {
       this.props.setStrike(2);
     }
   }
   console.log(e);
  }

  render(){
    console.log(this.state.challenge);
    console.log(this.index);
    if (this.state.index === this.state.challenge.length - 1) {
      this.componentWillUnmount();
    }

    return (
      <div>
        <div className={styles.center}> { this.state.challenge[this.state.index].question } </div>
        <div onClick={e => { this.handleClick(e); }} className={this.state.style + ' ' + styles.center}> A: { this.state.challenge[this.state.index].a } </div>
        <div onClick={e => { this.handleClick(e); }} className={this.state.style + ' ' + styles.center}> B: { this.state.challenge[this.state.index].b } </div>
        <div onClick={e => { this.handleClick(e); }} className={this.state.style + ' ' + styles.center}> C: { this.state.challenge[this.state.index].c } </div>
        <div onClick={e => { this.handleClick(e); }} className={this.state.style + ' ' + styles.center}> D: { this.state.challenge[this.state.index].d } </div>
      </div>
    );
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ challenge: this.props.data, index: this.state.index+1, style: null }), 5000);
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
