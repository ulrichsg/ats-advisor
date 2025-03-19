import { createStore } from 'solid-js/store';
import { AppContext, initialState } from '../state';
import styles from './App.module.css';
import Buildings from './buildings/Buildings';
import Selectors from './selection/Selectors';

export default function App() {
  const [state, setState] = createStore(initialState);

  return (
    <AppContext.Provider value={{state, setState}}>
      <div class={styles.App}>
        <Selectors/>
        <Buildings/>
      </div>
    </AppContext.Provider>
  );
}
