interface Note {
  uid: string;
  title: string;
  checked: boolean;
}

export interface NotesRequestState {
  type: string;
}

export interface NotesResponseState {
  type: string;
  response: Note[];
}

export interface PatchNoteRequestState {
  type: string;
  uid: string;
  title: string;
  checked: boolean;
}

export interface PatchNoteResponseState {
  type: string;
  response: Note;
}

export interface PostNoteRequestState {
  type: string;
  title: string;
}
