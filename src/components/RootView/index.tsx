import React from 'react';
import { SafeAreaView } from 'react-native';

import styles from './styles';

const RootView: React.FC = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default RootView;
