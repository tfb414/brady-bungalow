import { ToDoListsLoaded } from './to-do-lists.actions';
import {
  ToDoListsState,
  Entity,
  initialState,
  reducer
} from './to-do-lists.reducer';

describe('ToDoLists Reducer', () => {
  const getToDoListsId = it => it['id'];
  let createToDoLists;

  beforeEach(() => {
    createToDoLists = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid ToDoLists actions ', () => {
    it('should return set the list of known ToDoLists', () => {
      const toDoListss = [
        createToDoLists('PRODUCT-AAA'),
        createToDoLists('PRODUCT-zzz')
      ];
      const action = new ToDoListsLoaded(toDoListss);
      const result: ToDoListsState = reducer(initialState, action);
      const selId: string = getToDoListsId(result.list[1]);

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
