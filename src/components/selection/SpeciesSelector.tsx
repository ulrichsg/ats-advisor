import { Component, For, JSX, useContext } from 'solid-js';
import { Good } from '../../data/goods';
import { speciesNames, speciesNeeds } from '../../data/species';
import { AppContext, State } from '../../state';
import style from './Selector.module.css';

const SpeciesSelector: Component<{ index: number }> = (props) => {
  const { state, setState } = useContext<State>(AppContext);

  const handleChange: JSX.ChangeEventHandler<HTMLSelectElement, Event> = (e) => {
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
    const needs = speciesNeeds.get(selection) ?? [];

    const otherNeeds = ([] as Good[])
      .concat(props.index !== 0 ? (speciesNeeds.get(state.selection[0]) ?? []) : [])
      .concat(props.index !== 1 ? (speciesNeeds.get(state.selection[1]) ?? []) : [])
      .concat(props.index !== 2 ? (speciesNeeds.get(state.selection[2]) ?? []) : []);

    return needs.map(n => otherNeeds.includes(n) ? `!${n}` : n);
  };

  return (
    <div class={style.SpeciesSelector}>
      <select size={1} onChange={handleChange}>
        <option value=''>Select Species</option>
        {speciesNames.map(species => (
          <option
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

export default SpeciesSelector;
