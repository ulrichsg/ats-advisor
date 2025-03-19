import { Component, For, useContext } from 'solid-js';
import * as species from '../../data/species';
import { AppContext, State } from '../../state';
import style from './Selector.module.css';

const Selector: Component<{ index: number }> = (props) => {
  const { state, setState } = useContext<State>(AppContext);

  const handleChange = (e) => {
    const value = e.target.value || null;
    setState('selection', {
      ...state.selection,
      [props.index]: value,
    });
  };

  const selected = () => state.selection[props.index];

  const otherSelections = () => {
    const selection = selected();
    return [state.selection[0], state.selection[1], state.selection[2]]
      .filter(species => species !== selection);
  };

  const needs = () => {
    const selection = selected();
    if (selection === null) {
      return [];
    }
    const needs = species.needs[selection];

    const otherNeeds = []
      .concat(props.index !== 0 ? species.needs[state.selection[0]] : [])
      .concat(props.index !== 1 ? species.needs[state.selection[1]] : [])
      .concat(props.index !== 2 ? species.needs[state.selection[2]] : []);

    return needs.map(n => otherNeeds.includes(n) ? `!${n}` : n);
  };

  return (
    <div class={style.Selector}>
      <select onChange={handleChange}>
        <option key='null' value=''>Select Species</option>
        {species.names.map(species => (
          <option
            key={species}
            value={species}
            selected={species === selected()}
            disabled={otherSelections().includes(species)}
          >
            {species}
          </option>
        ))}
      </select>
      <ul class={style.Needs}>
        <For each={needs()}>
          {(item, index) => (
            <li key={index}>
              {item[0] === '!' ? <b>{item.substring(1)}</b> : item}
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

export default Selector;
