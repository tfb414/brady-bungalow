import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule, ReducerManager } from '@ngrx/store';
import { Actions, EffectSources } from '@ngrx/effects';
import * as fromToDos from './+state/to-dos.reducer';
import { DataPersistence } from '@nrwl/angular';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ToDoListAddFormComponent } from './to-do-list-add-form/to-do-list-add-form.component';
import { LoginFormComponent } from './users/login-form/login-form.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ToDosComponent } from './to-dos/to-dos.component';
import { firebaseConfig } from '../assets/firebase-config';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoListAddFormComponent,
    ToDosComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromToDos.TODOS_KEY, fromToDos.reducer),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [ReducerManager, Actions, DataPersistence, EffectSources],
  bootstrap: [AppComponent]
})
export class AppModule {}
