import firestore from '@react-native-firebase/firestore';

const getNotes = () => {
  return firestore().collection('notes').orderBy('createdAt', 'desc').get();
};

const patchNote = (uid, checked) => {
  return firestore().collection('notes').doc(uid).update({
    checked,
  });
};

const postNote = (title) => {
  return firestore().collection('notes').add({
    title,
    checked: false,
    createdAt: new Date(),
  });
};

export { getNotes, patchNote, postNote };
