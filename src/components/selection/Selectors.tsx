import { Component } from 'solid-js';
import LevelSelector from './LevelSelector';
import SpeciesSelector from './SpeciesSelector';
import styles from './Selectors.module.css';

const Selectors: Component = () => {
  return (
    <div class={styles.Selectors}>
      <SpeciesSelector index={0}/>
      <SpeciesSelector index={1}/>
      <SpeciesSelector index={2}/>
      <LevelSelector/>
    </div>
  );
};

export default Selectors;
