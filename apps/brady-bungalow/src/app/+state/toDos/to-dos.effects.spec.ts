import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { ToDosEffects } from './to-dos.effects';
import { LoadToDos, ToDosLoaded } from './to-dos.actions';

describe('ToDosEffects', () => {
  let actions: Observable<any>;
  let effects: ToDosEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        ToDosEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(ToDosEffects);
  });

  describe('loadToDos$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadToDos() });
      expect(effects.loadToDos$).toBeObservable(
        hot('-a-|', { a: new ToDosLoaded([]) })
      );
    });
  });
});
