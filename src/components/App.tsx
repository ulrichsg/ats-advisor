import { createStore } from 'solid-js/store';
import { AppContext, initialState, Selection } from '../state';
import styles from './App.module.css';
import Selectors from './selection/Selectors';

function App() {
  const [state, setState] = createStore(initialState);

  const setSelection = (selection: Selection) => {
    setState('selection', selection);
  };

  return (
    <AppContext.Provider value={{state, setState}}>
      <div class={styles.App}>
        <Selectors selected={state.selection} onChange={setSelection} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
