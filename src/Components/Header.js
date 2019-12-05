import React from 'react';
import {Text, View, PickerIOS, TouchableWithoutFeedback} from 'react-native';
import styles from "../Styles/AppStyles";
import Timer from './Timer';

const HeaderTitle = 'Alteplase Eligibility Calculator';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date(),
      language: 'English'
    };

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render () {
    return (
      <View style={styles.navBar}>
        <View style={styles.headLeft}>
        </View>
        <View>
          <Text style={styles.headerText}>
            {HeaderTitle}
          </Text>
        </View>
        <View style={styles.headRight}>
          <Timer />
        </View>
      </View>
    );
  }
}

export default Header;