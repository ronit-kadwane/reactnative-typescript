/*
 * Reducer actions related with login
 */
import { NoteResponse } from '../../models/api/note';

import * as types from './types';

export const getNotesRequest = () => {
  return {
    type: types.GET_NOTES_REQUEST,
  };
};

export const getNotesResponse = (response: NoteResponse[]) => {
  return {
    type: types.GET_NOTES_RESPONSE,
    response,
  };
};

export const getNotesFailed = () => {
  return {
    type: types.GET_NOTES_FAILED,
  };
};

export const patchNoteRequest = (uid: string, title, checked: boolean) => {
  return {
    type: types.PATCH_NOTE_REQUEST,
    uid,
    title,
    checked,
  };
};

export const patchNotesResponse = (response: NoteResponse) => {
  return {
    type: types.PATCH_NOTE_RESPONSE,
    response,
  };
};

export const patchNotesFailed = () => {
  return {
    type: types.PATCH_NOTE_FAILED,
  };
};

export const postNoteRequest = (title) => {
  return {
    type: types.POST_NOTE_REQUEST,
    title,
  };
};

export const postNotesResponse = (response: NoteResponse) => {
  return {
    type: types.POST_NOTE_RESPONSE,
    response,
  };
};

export const postNotesFailed = () => {
  return {
    type: types.POST_NOTE_FAILED,
  };
};
