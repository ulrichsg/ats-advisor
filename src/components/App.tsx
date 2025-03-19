import { createStore } from 'solid-js/store';
import { AppContext, initialState } from '../state';
import styles from './App.module.css';
import Selectors from './selection/Selectors';

function App() {
  const [state, setState] = createStore(initialState);

  return (
    <AppContext.Provider value={{state, setState}}>
      <div class={styles.App}>
        <Selectors/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
