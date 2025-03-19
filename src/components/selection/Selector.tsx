import { For, useContext } from 'solid-js';
import * as species from '../../data/species';
import { AppContext } from '../../state';
import style from './Selector.module.css';

type Props = {
  index: number;
}

export default function Selector(props: Props) {
  const { state, setState } = useContext(AppContext);

  const handleChange = (e) => {
    const value = e.target.value || null;
    setState('selection', {
      ...state.selection,
      [props.index]: value,
    });
  };

  const selected = () => state.selection[props.index];
  const needs = () => selected() === null ? [] : species.needs[selected()];

  return (
    <div class={style.Selector}>
      <select onChange={handleChange}>
        <option key='null' value=''>Select Species</option>
        {species.names.map(species => (
          <option key={species} value={species} selected={species === selected()}>
            {species}
          </option>
        ))}
      </select>
      <ul class={style.Needs}>
        <For each={needs()}>
          {(item, index) => (<li key={index}>{item}</li>)}
        </For>
      </ul>
    </div>
  );
};
