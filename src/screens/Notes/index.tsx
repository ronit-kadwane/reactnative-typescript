import React, { useEffect, useRef, useState } from 'react';
import { InteractionManager, Text, TextInput, View, VirtualizedList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import NoteItem from '../../components/NoteItem';
import { getNotesRequest } from '../../store/actions/noteAction';
import { NoteState } from '../../models/reducers/note';

import styles from './styles';

interface noteState {
  noteReducer: {
    notes: NoteState[];
  };
}

const Notes: React.FC = () => {
  const [searchText, setSearchText] = useState();
  const [searchResult, setSearchresult] = useState<NoteState[]>([]);
  const dispatch = useDispatch();
  const notes = useSelector((state: noteState) => state.noteReducer.notes);
  const searchRef = useRef<TextInput>(null);

  const getFocus = () => {
    InteractionManager.runAfterInteractions(() => {
      if (searchRef.current) {
        searchRef.current.focus();
      }
    });
  };

  const handleSearch = (text) => {
    if (text) {
      const queryResult = notes.filter((note) => {
        const { title } = note;
        const query = text.trim().toLowerCase();
        if (title.toLocaleLowerCase().trim().includes(query)) {
          return note;
        }
      });
      setSearchText(text || '');
      getFocus();
      setSearchresult(queryResult || []);
      getFocus();
    } else {
      setSearchText(undefined);
      setSearchresult(notes);
      getFocus();
    }
  };

  const SearchView = () => {
    return (
      <View style={styles.searchView}>
        <TextInput
          ref={searchRef}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Search"
          clearButtonMode="always"
          value={searchText}
          onChangeText={handleSearch}
        />
      </View>
    );
  };

  const getItem = (data, index) => {
    return data[index];
  };

  const getItemCount = () => (searchText ? searchResult.length : notes.length);

  useEffect(() => {
    setSearchresult(notes);
  }, notes);

  useEffect(() => {
    dispatch(getNotesRequest());
  }, []);

  const getData = () => {
    if (searchText) {
      return searchResult;
    }
    return notes;
  };
  return (
    <View>
      <VirtualizedList
        data={getData()}
        style={styles.list}
        initialNumToRender={20}
        getItemCount={getItemCount}
        getItem={getItem}
        keyExtractor={(item) => item?.uid}
        renderItem={NoteItem}
        ListHeaderComponent={SearchView}
      />
      {searchText && (searchResult.length === 0 || notes.length) && <Text>No result found</Text>}
    </View>
  );
};

export default Notes;
