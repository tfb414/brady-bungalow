import { ToDoListsAction, ToDoListsActionTypes } from './to-do-lists.actions';

export const TODOLISTS_FEATURE_KEY = 'toDoLists';

/**
 * Interface for the 'ToDoLists' data used in
 *  - ToDoListsState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface ToDoListsState {
  list: Entity[]; // list of ToDoLists; analogous to a sql normalized table
  selectedId?: string | number; // which ToDoLists record has been selected
  loaded: boolean; // has the ToDoLists list been loaded
  error?: any; // last none error (if any)
}

export interface ToDoListsPartialState {
  readonly [TODOLISTS_FEATURE_KEY]: ToDoListsState;
}

export const initialState: ToDoListsState = {
  list: [],
  loaded: false
};

export function reducer(
  state: ToDoListsState = initialState,
  action: ToDoListsAction
): ToDoListsState {
  switch (action.type) {
    case ToDoListsActionTypes.ToDoListsLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
