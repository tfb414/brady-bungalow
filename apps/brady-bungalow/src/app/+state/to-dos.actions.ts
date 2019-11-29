import { props, createAction } from '@ngrx/store';
import { ToDo } from './to-dos.reducer';

export const AddToDoAction = createAction(
  '[ToDos] Add ToDos',
  (toDo: ToDo) => toDo
);

export const UpdateCompleteToDoStatusAction = createAction(
  '[ToDos] Complete To Do',
  props<{ toDoId: string; complete: boolean }>()
);
