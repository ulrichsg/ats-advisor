import { For, useContext } from 'solid-js';
import * as production from '../../data/production';
import * as requirements from '../../data/requirements';
import * as species from '../../data/species';
import { AppContext } from '../../state';
import Building from './Building';
import styles from './Buildings.module.css';

export default function Buildings() {
  const { state } = useContext(AppContext);

  const selectedSpecies = () => {
    return [state.selection[0], state.selection[1], state.selection[2]].filter(Boolean);
  }

  const needs = () => {
    let result = {};
    const selected = selectedSpecies();
    for (const i in selected) {
      const spec = selected[i];
      for (const k in species.needs[spec]) {
        const need = species.needs[spec][k];
        if (result[need]) {
          result[need] += 1;
        } else {
          result[need] = 1;
        }
      }
    }
    return result;
  };

  const buildings = () => {
    const need = needs();
    let result = [];
    for (const building in production.buildings) {
      const speciesReq = requirements.species_specific[building] ?? null;
      if (speciesReq && !selectedSpecies().includes(speciesReq)) {
        continue;
      }

      let score = 0;
      for (const good in production.buildings[building]) {
        const needScore = need[good] ?? 0;
        const prodScore = production.buildings[building][good];
        score += needScore * prodScore;
      }
      if (score > 0) {
        result[building] = score;
      }
    }
    return result.sort((a, b) => b - a);
  };

  return (
    <div class={styles.Buildings}>
      <For each={buildings()}>
        {(item, index) => (<Building name={item}/>)}
      </For>
    </div>
  );
}