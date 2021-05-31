import auth from '@react-native-firebase/auth';

const loginUser = (email: string, password: string) => {
  return auth().signInWithEmailAndPassword(email, password);
};

export default loginUser;
