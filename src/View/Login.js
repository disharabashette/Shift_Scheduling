import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Keyboard} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {ROUTES} from '../utils/Routes';
import {Input, BottomSheet} from 'react-native-elements';
import {actions as userActions} from '../store/User/Recuder';
import {useDispatch, useSelector} from 'react-redux';

const Login = ({navigation}) => {
  const users = useSelector((state) => {
    console.log(state);
    return state?.user?.user;
  });

  const dispatch = useDispatch();

  const validationSchema = Yup.object({
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
      email: '',
      password: '',
    },
    validationSchema,
    validateOnChange: false,
    onSubmit: (values, actions) => {
      handleSubmit({...values});
    },
  });
  console.log('users', users);
  const handleSubmit = async (values) => {
    console.log('values', values);
    const find_user = users?.find(
      (item, index) => item?.email === values?.email,
    );
    console.log('find_user', find_user);
    if (values?.email === find_user?.email) {
      if (values?.password === find_user?.password) {
        dispatch(userActions.setLoginUser(find_user));
      } else {
        alert('Incorrect Password');
      }
    } else {
      alert('Register First');
    }
  };

  const onLogin = () => {
    console.log('formik.values', formik);
    Keyboard.dismiss();
    formik.handleSubmit();
  };

  return (
    <View style={styles.container}>
      <Input
        label="Email"
        placeholder="Email"
        value={formik?.values?.email}
        onChangeText={formik.handleChange('email')}
        errorMessage={formik?.errors?.email}
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
      <TouchableOpacity onPress={() => onLogin()} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate(ROUTES.REGISTRATIONPAGE)}>
        <Text style={styles.loginText}>Don’t have an Account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    padding: 35,
    backgroundColor: '#fff',
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
  loginButton: {
    backgroundColor: '#2996A2',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 20,
  },
});
