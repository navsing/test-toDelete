import React from 'react';
import { View, Text } from 'react-native';
import styles from '../Styles/AppStyles';
import Header from './Header';
import Questions from './Questions';
import Stopwatch from './Stopwatch';
import Inputs from './Inputs';

export class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
          <Inputs />
          <View style={styles.headerClock}>
            <Stopwatch />
          </View>
        </View>
        <View style={styles.questions}>
          <Questions />
        </View>
      </View>
    );
  }
}

export default Home;