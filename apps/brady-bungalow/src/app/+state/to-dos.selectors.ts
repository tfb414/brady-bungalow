import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TODOS_KEY, ToDosState, toDosAdapter } from './to-dos.reducer';

// Lookup the 'ToDos' feature state managed by NgRx
const selectToDosState = createFeatureSelector<ToDosState>(TODOS_KEY);

export const selectAllToDos = createSelector(
  selectToDosState,
  state => (state ? toDosAdapter.getSelectors().selectAll(state) : [])
);

// const getLoaded = createSelector(
//   getToDosState,
//   (state: ToDosState) => state.loaded
// );
// const getError = createSelector(
//   getToDosState,
//   (state: ToDosState) => state.error
// );

// const getAllToDos = createSelector(
//   getToDosState,
//   getLoaded,
//   (state: ToDosState, isLoaded) => {
//     return isLoaded ? state.entities : [];
//   }
// );
// const getSelectedId = createSelector(
//   getToDosState,
//   (state: ToDosState) => state.selectedId
// );
// const getSelectedToDos = createSelector(
//   getAllToDos,
//   getSelectedId,
//   (toDos, id) => {
//     const result = toDos.find(it => it['id'] === id);
//     return result ? Object.assign({}, result) : undefined;
//   }
// );

// export const toDosQuery = {
//   getLoaded,
//   getError,
//   getAllToDos,
//   getSelectedToDos
// };
