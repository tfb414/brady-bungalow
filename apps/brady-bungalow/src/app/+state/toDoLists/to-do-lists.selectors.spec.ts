import { Entity, ToDoListsState } from './to-do-lists.reducer';
import { toDoListsQuery } from './to-do-lists.selectors';

describe('ToDoLists Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getToDoListsId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createToDoLists = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      toDoLists: {
        list: [
          createToDoLists('PRODUCT-AAA'),
          createToDoLists('PRODUCT-BBB'),
          createToDoLists('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('ToDoLists Selectors', () => {
    it('getAllToDoLists() should return the list of ToDoLists', () => {
      const results = toDoListsQuery.getAllToDoLists(storeState);
      const selId = getToDoListsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedToDoLists() should return the selected Entity', () => {
      const result = toDoListsQuery.getSelectedToDoLists(storeState);
      const selId = getToDoListsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = toDoListsQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = toDoListsQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
