/* Login Reducer
 * handles login states in the app
 */
import createReducer from '../../utils/createReducer';
import * as types from '../actions/types';
import { NotesState, NoteState } from '../../models/reducers/note';
import {
  NotesRequestState,
  NotesResponseState,
  PatchNoteRequestState,
  PatchNoteResponseState,
  PostNoteRequestState,
} from '../../models/actions/note';

const initialState: NotesState = {
  notes: [],
};

export const noteReducer = createReducer(initialState, {
  [types.GET_NOTES_REQUEST](state: NotesState, action: NotesRequestState) {
    return state;
  },

  [types.GET_NOTES_RESPONSE](state: NotesState, action: NotesResponseState) {
    return {
      ...state,
      notes: action.response,
    };
  },

  [types.GET_NOTES_FAILED](state: NoteState) {
    return state;
  },

  [types.PATCH_NOTE_REQUEST](state: NotesState, action: PatchNoteRequestState) {
    return state;
  },

  [types.PATCH_NOTE_RESPONSE](state: NotesState, action: PatchNoteResponseState) {
    const { notes } = state;
    const { response } = action;

    const updatedNotes: NoteState[] = [...notes];
    const position = state.notes.findIndex((note) => note.uid === response.uid);
    updatedNotes[position] = response;

    return {
      ...state,
      notes: updatedNotes,
    };
  },

  [types.PATCH_NOTE_FAILED](state: NoteState) {
    return state;
  },

  [types.POST_NOTE_REQUEST](state: NotesState, action: PostNoteRequestState) {
    return state;
  },

  [types.POST_NOTE_FAILED](state: NoteState) {
    return state;
  },
});
