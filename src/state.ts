import { createContext, useContext } from 'solid-js';

export type Selection = {
  0: string|null;
  1: string|null;
  2: string|null;
}

export type State = {
  level: number;
  selection: Selection,
}

export const initialState: State = {
  level: 20,
  selection: {
    0: null,
    1: null,
    2: null,
  },
};

export const AppContext = createContext<State>(initialState);
