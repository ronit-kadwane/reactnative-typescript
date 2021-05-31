import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useDispatch } from 'react-redux';

import { patchNoteRequest } from '../../store/actions/noteAction';

import styles from './styles';

const NI = ({ item }) => {
  const { uid = 0, title = '', checked = false } = item || {};
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      key={uid}
      style={styles.container}
      onPress={() => dispatch(patchNoteRequest(uid, title, !checked))}
    >
      <CheckBox
        value={checked}
        style={styles.checkbox}
        onChange={() => dispatch(patchNoteRequest(uid, title, !checked))}
      />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const NoteItem = ({ item }) => {
  return <NI item={item} />;
};

export default NoteItem;
