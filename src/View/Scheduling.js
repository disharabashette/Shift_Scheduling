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
import {actions as userActions} from '../store/User/Recuder';
import {useDispatch, useSelector} from 'react-redux';

const Scheduling = ({}) => {
  const users = useSelector((state) => {
    console.log("data",state);
    return state?.user?.loginUser?.hospitalData;
  });
  const dispatch = useDispatch();

  const onApply = (index) => {
    dispatch(userActions.setUpdateData(index));
  };

  return (
    <ScrollView style={styles.container}>
        {users?.map((item, index) => (
          <>
          {!item?.apply &&
          <View style={styles.cardView}>
            <Text style={styles.cardHeadingText}>{item.hospitalName}</Text>
            <View style={styles.timingView}>
              <Image
                style={styles.timingIcon}
                source={require('../assets/images/TimeIcon.png')}
              />
              <Text style={styles.cardDataText}>{item.time} {item.date}</Text>
            </View>
            <View style={styles.locationView}>
              <Image
                style={styles.locationIcon}
                source={require('../assets/images/LocationIcon.png')}
              />
              <Text style={styles.cardDataText}>{item.location}</Text>
            </View>
            <View style={styles.departmentInfoView}>
              <Image
                style={styles.departmentInfoIcon}
                source={require('../assets/images/DepartmentInfoIcon.png')}
              />
              <Text style={styles.cardDataText}>{item.department}</Text>
            </View>
            <Button
              title={item?.apply ? 'Applied' : 'Apply'}
              color= {item?.apply ? '#828282' : "#2996A2"}
              onPress={() => onApply(index)}
            />
          </View>}
          </>
        ))}
      </ScrollView>
   
  );
};

export default Scheduling;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    margin: 20
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
