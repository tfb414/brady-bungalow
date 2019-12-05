import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { ToDosPartialState } from './to-dos.reducer';
// import {
//   LoadToDos,
//   ToDosLoaded,
//   ToDosLoadError,
//   ToDosActionTypes
// } from './to-dos.actions';

// @Injectable()
// export class ToDosEffects {
//   @Effect() loadToDos$ = this.dataPersistence.fetch(
//     ToDosActionTypes.LoadToDos,
//     {
//       run: (action: LoadToDos, state: ToDosPartialState) => {
//         // Your custom REST 'load' logic goes here. For now just return an empty list...
//         return new ToDosLoaded([]);
//       },

//       onError: (action: LoadToDos, error) => {
//         console.error('Error', error);
//         return new ToDosLoadError(error);
//       }
//     }
//   );

//   constructor(
//     private actions$: Actions,
//     private dataPersistence: DataPersistence<ToDosPartialState>
//   ) {}
// }
