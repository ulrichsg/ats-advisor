import { Component, For, useContext } from 'solid-js';
import { scoreBuildings } from '../../data/scoring';
import { Species } from '../../data/species';
import { AppContext } from '../../state';
import Building from './Building';
import styles from './Buildings.module.css';

const Buildings: Component = () => {
  const { state } = useContext(AppContext);

  const selectedSpecies = (): Species[] => {
    return [state.selection[0], state.selection[1], state.selection[2]].filter(Boolean);
  }

  return (
    <div class={styles.Buildings}>
      <For each={scoreBuildings(selectedSpecies(), state.level)}>
        {(item) => (
          <Building name={item.building.name} goods={item.goodsScores}/>
        )}
      </For>
    </div>
  );
}

export default Buildings;
