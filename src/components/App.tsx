import { Component } from 'solid-js';
import { createStore } from 'solid-js/store';
import { AppContext, initialState, State } from '../state';
import styles from './App.module.css';
import Buildings from './buildings/Buildings';
import Selectors from './selection/Selectors';

const App: Component = () => {
  const [state, setState] = createStore<State>(initialState);

  return (
    <AppContext.Provider value={{state, setState}}>
      <div class={styles.App}>
        <Selectors/>
        <Buildings/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
