import { Component, For, useContext } from 'solid-js';
import { AppContext, State } from '../../state';
import styles from './Selector.module.css';

const LevelSelector: Component = () => {
  const { state, setState } = useContext(AppContext);

  const handleChange = (e) => {
    setState('level', e.target.value);
  };

  return (
    <div class={styles.LevelSelector}>
      <label for='level'>Level: </label>
      <select id='level' size={1} onChange={handleChange}>
        <For each={range(1, 20)}>
          {(item) => (
            <option value={item} selected={item == state.level}>{item}</option>
          )}
        </For>
      </select>
    </div>
  );
};

export default LevelSelector;

function range(min: number, max: number): number[] {
  let result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}
