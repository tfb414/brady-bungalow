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
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { TestComponent } from './test/test.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoListAddFormComponent,
    ToDosComponent,
    LoginFormComponent,
    TestComponent,
    PageNotFoundComponent,
    NotAuthorizedComponent
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
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [ReducerManager, Actions, DataPersistence, EffectSources, AngularFireAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
