import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Keyboard,
  ScrollView,
} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {ROUTES} from '../utils/Routes';
import {Input, BottomSheet} from 'react-native-elements';
import {actions as userActions} from '../store/User/Recuder';
import {useDispatch, useSelector} from 'react-redux';

const Registration = ({navigation}) => {
  const users = useSelector((state) => {
    console.log(state);
    return state?.user?.user;
  });

  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(256, 'Too Long!')
      .required('Required'),
    age: Yup.string()
      .matches('^[0-9]{1,2}$', 'Please enter valid AGE')
      .required('Required'),
    email: Yup.string()
      .matches(
        '^[ ]*[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}[ ]*$',
        'Please enter valid Emial address',
      )
      .nullable()
      .required('Required'),
    password: Yup.string()
      .min(8, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
  });
  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      email: '',
      password: '',
      hospitalData: [
        {
          hospitalName: 'Hospital Name 1',
          time: '3.00 pm - 6.00 pm',
          date: '02-02-2021',
          location: 'Medical Officer',
          department: 'OPD',
          apply: false,
        },
        {
          hospitalName: 'Hospital Name 2',
          time: '12.00 pm - 3.00 pm',
          date: '04-02-2021',
          location: 'AMD',
          department: 'Nursing Department',
          apply: false,
        },
        {
          hospitalName: 'Hospital Name 3',
          time: '6.00 pm - 9.00 pm',
          date: '05-02-2021',
          location: 'Serology laboratory',
          department: 'Paramedical Departments',
          apply: false,
        },
        {
          hospitalName: 'Hospital Name 4',
          time: '9.00 pm - 12.00 am',
          date: '04-02-2021',
          location: 'Medical Officer',
          department: 'Histopathology department',
          apply: false,
        },
        {
          hospitalName: 'Hospital Name 5',
          time: '6.00 am - 9.00 am',
          date: '03-02-2021',
          location: 'Serology laboratory',
          department: 'Pharmacy Department',
          apply: false,
        },
        {
          hospitalName: 'Hospital Name 6',
          time: '9.00 am - 12.00 pm',
          date: '03-02-2021',
          location: 'Medical Officer',
          department: 'Histopathology department',
          apply: false,
        },
      ],
    },
    validationSchema,
    validateOnChange: false,
    onSubmit: (values, actions) => {
      handleSubmit({...values});
    },
  });

  const handleSubmit = async (values) => {
    console.log('values', values);
    const find_user = users?.find(
      (item, index) => item?.email === values?.email,
    );
    console.log('find_user', find_user);
    if (values?.email !== find_user?.email) {
      dispatch(userActions.setRegisterUser(values));
      navigation.goBack();
    } else {
      alert('Email Id Already There');
    }
  };

  const onRegister = () => {
    console.log('formik.values', formik);
    Keyboard.dismiss();
    formik.handleSubmit();
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Input
          label="Name"
          placeholder="Name"
          value={formik?.values?.name}
          onChangeText={formik.handleChange('name')}
          errorMessage={formik?.errors?.name}
          inputContainerStyle={styles.inputStyle}
        />
        <Input
          label="Email"
          placeholder="Email"
          value={formik?.values?.email}
          onChangeText={formik.handleChange('email')}
          errorMessage={formik?.errors?.email}
          inputContainerStyle={styles.inputStyle}
        />
        <Input
          label="Age"
          placeholder="Age"
          value={formik?.values?.age}
          onChangeText={formik.handleChange('age')}
          errorMessage={formik?.errors?.age}
          inputContainerStyle={styles.inputStyle}
        />
        <Input
          label="Password"
          placeholder="Password"
          value={formik?.values?.password}
          onChangeText={formik.handleChange('password')}
          errorMessage={formik?.errors?.password}
          secureTextEntry={true}
          inputContainerStyle={styles.inputStyle}
        />
        <TouchableOpacity
          onPress={() => onRegister()}
          style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate(ROUTES.LOGINPAGE)}>
          <Text style={styles.loginText}>
            Already Registered? Click here to login
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    padding: 35,
    backgroundColor: '#fff',
  },
  RegistrationText: {
    marginBottom: 5,
    color: '#248f8f',
    textAlign: 'center',
  },
  RegistrationView: {
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  inputStyle: {
    width: '100%',
    alignSelf: 'center',
    borderColor: '#2996A2',
    borderWidth: 1,
    borderRadius: 4,
  },
  loginText: {
    color: '#2996A2',
    marginTop: 25,
    textAlign: 'center',
  },
  registerButton: {
    backgroundColor: '#2996A2',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  registerButtonText: {
    color: '#FFF',
    fontSize: 20,
  },
});
