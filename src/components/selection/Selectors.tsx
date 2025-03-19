import Selector from './Selector';
import styles from './Selectors.module.css';

export default function Selectors() {
  return (
    <div class={styles.Selectors}>
      <Selector index={0}/>
      <Selector index={1}/>
      <Selector index={2}/>
    </div>
  );
};
