import React from 'react';
import {Text, View} from 'react-native';
import styles from "../Styles/AppStyles";

const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
  ':' +
  ('0' + sec % 60).slice(-2);

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0,
      laps: [],
      lastClearedIncrementer: null
    };
    this.incrementer = setInterval( () =>
        this.setState({
          secondsElapsed: this.state.secondsElapsed + 1
        })
      , 1000);
  }

  render() {
    return (
      <View>
        <Text style={styles.timerTime}>{formattedSeconds(this.state.secondsElapsed)}</Text>
      </View>
    );
  }
}

export default Timer;