import {
  AddToDoAction,
  UpdateCompleteToDoStatusAction
} from './to-dos.actions';
import { EntityState, createEntityAdapter, Update } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

export const TODOS_KEY = 'toDos';

export interface ToDosState extends EntityState<ToDo> {}

export const toDosAdapter = createEntityAdapter<ToDo>();

export const toDosInitialState = toDosAdapter.getInitialState();

export interface ToDo {
  id: String;
  description: String;
  complete: boolean;
}

export interface ToDosPartialState {
  readonly [TODOS_KEY]: ToDosState;
}

const completeToDo = (
  toDoId: string,
  completeStatus: boolean
): Update<ToDo> => {
  return {
    id: toDoId,
    changes: {
      complete: completeStatus
    }
  };
};

const toDosReducer = createReducer(
  toDosInitialState,
  on(AddToDoAction, (currentState, toDo: ToDo) =>
    toDosAdapter.addOne(toDo, currentState)
  ),
  on(UpdateCompleteToDoStatusAction, (currentState, { toDoId, complete }) =>
    toDosAdapter.updateOne(completeToDo(toDoId, complete), currentState)
  )
);

export function reducer(toDosState: ToDosState, action: Action) {
  return toDosReducer(toDosState, action);
}
