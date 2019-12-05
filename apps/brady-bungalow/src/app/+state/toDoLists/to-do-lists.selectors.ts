import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TODOLISTS_FEATURE_KEY, ToDoListsState } from './to-do-lists.reducer';

// Lookup the 'ToDoLists' feature state managed by NgRx
const getToDoListsState = createFeatureSelector<ToDoListsState>(
  TODOLISTS_FEATURE_KEY
);

const getLoaded = createSelector(
  getToDoListsState,
  (state: ToDoListsState) => state.loaded
);
const getError = createSelector(
  getToDoListsState,
  (state: ToDoListsState) => state.error
);

const getAllToDoLists = createSelector(
  getToDoListsState,
  getLoaded,
  (state: ToDoListsState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getToDoListsState,
  (state: ToDoListsState) => state.selectedId
);
const getSelectedToDoLists = createSelector(
  getAllToDoLists,
  getSelectedId,
  (toDoLists, id) => {
    const result = toDoLists.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const toDoListsQuery = {
  getLoaded,
  getError,
  getAllToDoLists,
  getSelectedToDoLists
};
