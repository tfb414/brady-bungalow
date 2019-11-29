import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import uuidv4 from 'uuid/v4';
import { Store } from '@ngrx/store';
import { ToDosState, ToDo } from '../+state/to-dos.reducer';
import {
  AddToDoAction,
  UpdateCompleteToDoStatusAction
} from '../+state/to-dos.actions';
import { selectAllToDos } from '../+state/to-dos.selectors';

//TODO split this into two components, one for the inputbox and one for displaying it and a parent to hold them!

@Component({
  selector: 'brady-bungalow-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  constructor(private store: Store<ToDosState>) {
    this.store
      .select(selectAllToDos)
      .pipe()
      .subscribe(toDos => (this.thingsToDo = toDos));
  }

  public thingsToDo = [];
  public ngrxToDos;

  toggleCompletedToDo(id) {
    const currentCompleteStatus = this.thingsToDo.find(toDo => toDo.id === id)
      .complete;

    this.store.dispatch(
      UpdateCompleteToDoStatusAction({
        toDoId: id,
        complete: !currentCompleteStatus
      })
    );
  }
}
