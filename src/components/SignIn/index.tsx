import React, { useRef, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import { object, string } from 'yup';

import styles from './styles';

const signInSchema = object({
  email: string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered email'),
  password: string()
    .label('Password')
    .required()
    .min(6, 'Password must have at least 6 characters '),
});

const SignIn = ({ onSignPress }) => {
  const passwordrRef = useRef(null);

  return (
    <Formik
      initialValues={{ email: 'ronit@gmail.com', password: '123456' }}
      validationSchema={signInSchema}
      onSubmit={(values) => onSignPress(values)}
    >
      {({ handleChange, handleSubmit, errors }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.inputBox}
            onChangeText={handleChange('email')}
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => {
              if (passwordrRef.current) {
                passwordrRef.current?.focus();
              }
            }}
            blurOnSubmit={false}
          />
          {errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
          <TextInput
            ref={passwordrRef}
            style={styles.inputBox}
            onChangeText={handleChange('password')}
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry
            textContentType="password"
            returnKeyType="done"
          />
          {errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}
          <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
            <Text style={styles.buttonText}>SignIn</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default SignIn;
