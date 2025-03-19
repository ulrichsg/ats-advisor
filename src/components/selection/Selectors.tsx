import { Component } from 'solid-js';
import Selector from './Selector';
import styles from './Selectors.module.css';

const Selectors: Component = () => {
  return (
    <div class={styles.Selectors}>
      <Selector index={0}/>
      <Selector index={1}/>
      <Selector index={2}/>
    </div>
  );
};

export default Selectors;
