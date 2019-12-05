import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { ToDoListsEffects } from './to-do-lists.effects';
import { LoadToDoLists, ToDoListsLoaded } from './to-do-lists.actions';

describe('ToDoListsEffects', () => {
  let actions: Observable<any>;
  let effects: ToDoListsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        ToDoListsEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(ToDoListsEffects);
  });

  describe('loadToDoLists$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadToDoLists() });
      expect(effects.loadToDoLists$).toBeObservable(
        hot('-a-|', { a: new ToDoListsLoaded([]) })
      );
    });
  });
});
