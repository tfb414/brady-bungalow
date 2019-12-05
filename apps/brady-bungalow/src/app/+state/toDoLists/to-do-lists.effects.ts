import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { ToDoListsPartialState } from './to-do-lists.reducer';
import {
  LoadToDoLists,
  ToDoListsLoaded,
  ToDoListsLoadError,
  ToDoListsActionTypes
} from './to-do-lists.actions';

@Injectable()
export class ToDoListsEffects {
  @Effect() loadToDoLists$ = this.dataPersistence.fetch(
    ToDoListsActionTypes.LoadToDoLists,
    {
      run: (action: LoadToDoLists, state: ToDoListsPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new ToDoListsLoaded([]);
      },

      onError: (action: LoadToDoLists, error) => {
        console.error('Error', error);
        return new ToDoListsLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ToDoListsPartialState>
  ) {}
}
