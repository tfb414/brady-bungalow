import { Entity, ToDosState } from './to-dos.reducer';
import { toDosQuery } from './to-dos.selectors';

describe('ToDos Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getToDosId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createToDos = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      toDos: {
        list: [
          createToDos('PRODUCT-AAA'),
          createToDos('PRODUCT-BBB'),
          createToDos('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('ToDos Selectors', () => {
    it('getAllToDos() should return the list of ToDos', () => {
      const results = toDosQuery.getAllToDos(storeState);
      const selId = getToDosId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedToDos() should return the selected Entity', () => {
      const result = toDosQuery.getSelectedToDos(storeState);
      const selId = getToDosId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = toDosQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = toDosQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
