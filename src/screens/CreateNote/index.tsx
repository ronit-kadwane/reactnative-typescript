import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';

import { postNoteRequest } from '../../store/actions/noteAction';

import styles from './styles';

const noteSchema = object({
  title: string().label('Title').required('Please enter note'),
});

const CreateNote = () => {
  const dispatch = useDispatch();

  const addNote = (values, resetForm) => {
    dispatch(postNoteRequest(values.title));
    resetForm({ values: { title: '' } });
    Alert.alert('Note added successfully.');
  };

  return (
    <Formik
      initialValues={{ title: '' }}
      validationSchema={noteSchema}
      onSubmit={(values, { resetForm }) => addNote(values, resetForm)}
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <View style={styles.container}>
          <TextInput
            onChangeText={handleChange('title')}
            value={values.title}
            placeholder="Enter title"
            style={styles.input}
          />
          {errors.title && <Text style={{ color: 'red' }}>{errors.title}</Text>}
          <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default CreateNote;
