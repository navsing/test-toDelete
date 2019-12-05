import React from 'react';
import {Text, View} from 'react-native';
import styles from "../Styles/AppStyles";

const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
  ':' +
  ('0' + sec % 60).slice(-2);

class Stopwatch extends React.Component {

  componentWillReceiveProps(nextProps, nextContext) {
    // this.setState({secondsElapsed: 270*60 - nextProps.lastTime*60});
    this.setState({secondsElapsed: 270*60 - nextProps.lastTime*60});
  };

  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0,
      laps: [],
      lastClearedIncrementer: null
    };
    this.incrementer = null;
  }

  handleStartClick() {
    this.incrementer = setInterval( () =>
        this.setState({
          secondsElapsed: this.state.secondsElapsed - 1
        })
      , 1000);
  }

  handleStopClick() {
    clearInterval(this.incrementer);
    this.setState({
      lastClearedIncrementer: this.incrementer
    });
  }

  render() {
    return (
      <View>
      {/*<div className="stopwatch">*/}
        {/*<div className="timer" style={{float: 'left'}}>*/}
        <View>
          {/*<h1 className="stopwatch-timer">{formattedSeconds(this.state.secondsElapsed)}</h1>*/}
          <Text style={styles.stopWatch}>{formattedSeconds(this.state.secondsElapsed)}</Text>
        {/*</div>*/}
        </View>
        {/*<div className="timer-buttons">*/}
        {/*<View>*/}
          {/*{(this.state.secondsElapsed === 0 ||*/}
            {/*this.incrementer === this.state.lastClearedIncrementer*/}
              {/*? <Button className="start-btn" onClick={this.handleStartClick.bind(this)}>start</Button>*/}
              {/*: <Button className="stop-btn" onClick={this.handleStopClick.bind(this)}>stop</Button>*/}
          {/*)}*/}
        {/*/!*</div>*!/*/}
        {/*</View>*/}
        {/*</div>*/}
      </View>
    );
  }
}

// const Button = (props) =>
//   <button type="button" {...props} className={"btn " + props.className } />;

export default Stopwatch;