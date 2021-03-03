import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
  ScrollView,
} from 'react-native';
import {color} from 'react-native-reanimated';
import {ROUTES} from '../utils/Routes';

class Accepted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.cardView}>
          <Text style={styles.cardHeadingText}>General Hospital 7</Text>
          <View style={styles.timingView}>
            <Image
              style={styles.timingIcon}
              source={require('../assets/images/TimeIcon.png')}
            />
            <Text style={styles.cardDataText}>3.00 PM- 9.00 PM 02-02-2021</Text>
          </View>
          <View style={styles.locationView}>
            <Image
              style={styles.locationIcon}
              source={require('../assets/images/LocationIcon.png')}
            />
            <Text style={styles.cardDataText}>Location of shift</Text>
          </View>
          <View style={styles.departmentInfoView}>
            <Image
              style={styles.departmentInfoIcon}
              source={require('../assets/images/DepartmentInfoIcon.png')}
            />
            <Text style={styles.cardDataText}>Department name</Text>
          </View>
          <Button title="Accepted" color="#2996A2" />
        </View>
      </ScrollView>
    );
  }
}

export default Accepted;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    margin: 20,
  },
  cardView: {
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    width: '90%',
    borderColor: 'red',
  },
  SchedulingView: {
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  cardHeadingText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1B3A34',
    marginBottom: 20,
  },
  cardDataText: {
    fontSize: 16,
    color: '#828282',
  },
  timingView: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  timingIcon: {
    marginRight: 20,
    height: 19,
    width: 19,
  },
  locationView: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  locationIcon: {
    marginRight: 27,
    height: 19,
    width: 13,
  },
  departmentInfoView: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  departmentInfoIcon: {
    marginRight: 15,
    height: 19,
    width: 26,
  },
});
