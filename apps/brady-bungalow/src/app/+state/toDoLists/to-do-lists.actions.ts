import { Action } from '@ngrx/store';
import { Entity } from './to-do-lists.reducer';

export enum ToDoListsActionTypes {
  LoadToDoLists = '[ToDoLists] Load ToDoLists',
  ToDoListsLoaded = '[ToDoLists] ToDoLists Loaded',
  ToDoListsLoadError = '[ToDoLists] ToDoLists Load Error'
}

export class LoadToDoLists implements Action {
  readonly type = ToDoListsActionTypes.LoadToDoLists;
}

export class ToDoListsLoadError implements Action {
  readonly type = ToDoListsActionTypes.ToDoListsLoadError;
  constructor(public payload: any) {}
}

export class ToDoListsLoaded implements Action {
  readonly type = ToDoListsActionTypes.ToDoListsLoaded;
  constructor(public payload: Entity[]) {}
}

export type ToDoListsAction =
  | LoadToDoLists
  | ToDoListsLoaded
  | ToDoListsLoadError;

export const fromToDoListsActions = {
  LoadToDoLists,
  ToDoListsLoaded,
  ToDoListsLoadError
};
