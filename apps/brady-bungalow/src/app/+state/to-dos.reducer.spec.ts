import { ToDosLoaded } from './to-dos.actions';
import { ToDosState, Entity, initialState, reducer } from './to-dos.reducer';

describe('ToDos Reducer', () => {
  const getToDosId = it => it['id'];
  let createToDos;

  beforeEach(() => {
    createToDos = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid ToDos actions ', () => {
    it('should return set the list of known ToDos', () => {
      const toDoss = [createToDos('PRODUCT-AAA'), createToDos('PRODUCT-zzz')];
      const action = new ToDosLoaded(toDoss);
      const result: ToDosState = reducer(initialState, action);
      const selId: string = getToDosId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
