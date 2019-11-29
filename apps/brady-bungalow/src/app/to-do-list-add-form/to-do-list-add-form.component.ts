import { Component, OnInit } from '@angular/core';
import { ToDo } from '../+state/to-dos.reducer';
import { Store } from '@ngrx/store';
import uuidv4 from 'uuid/v4';
import { AddToDoAction } from '../+state/to-dos.actions';
import { FormControl } from '@angular/forms';

//TODO add validation for empty field, or possible length?

@Component({
  selector: 'brady-bungalow-to-do-list-add-form',
  templateUrl: './to-do-list-add-form.component.html',
  styleUrls: ['./to-do-list-add-form.component.css']
})
export class ToDoListAddFormComponent {
  constructor(private store: Store<ToDo>) {}

  public addThingToDo = new FormControl();

  onKeyUp(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.addToDoSubmit();
    }
  }

  addToDoSubmit() {
    const uuid = uuidv4();
    const newToDo: ToDo = {
      id: uuid,
      description: this.addThingToDo.value,
      complete: false
    };
    this.clearInput();
    this.store.dispatch(AddToDoAction(newToDo));
  }

  private clearInput() {
    this.addThingToDo.setValue('');
  }
}
