export interface NoteState {
  uid: string;
  title: string;
  checked: boolean;
}

export interface NotesState {
  notes: NoteState[];
}
