import { Component, For, useContext } from 'solid-js';
import * as production from '../../data/production';
import * as requirements from '../../data/requirements';
import * as species from '../../data/species';
import { AppContext, State } from '../../state';
import Building from './Building';
import styles from './Buildings.module.css';

const Buildings: Component = () => {
  const { state } = useContext<State>(AppContext);

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

      let totalScore = 0;
      let goods = [];
      for (const good in production.buildings[building]) {
        const needScore = need[good] ?? 0;
        const prodScore = production.buildings[building][good];
        const score = needScore * prodScore;
        totalScore += score;
        goods.push({name: good, need: needScore, stars: prodScore});
      }
      if (totalScore > 0) {
        const sortedGoods = goods.sort((a, b) => b.need - a.need);
        result.push({building, goods: sortedGoods, score: totalScore});
      }
    }
    return result.sort((a, b) => b.score - a.score);
  };

  return (
    <div class={styles.Buildings}>
      <For each={buildings()}>
        {(item) => (
          <Building name={item.building} goods={item.goods}/>
        )}
      </For>
    </div>
  );
}

export default Buildings;
