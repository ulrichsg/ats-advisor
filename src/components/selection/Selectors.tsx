import { Selection } from '../../state';
import Selector from './Selector';
import styles from './Selectors.module.css';

type Props = {
  selected: Selection;
  onChange: (selection: Selection) => void;
}

export default function Selectors(props: Props) {
  return (
    <div class={styles.Selectors}>
      <Selector index={0}/>
      <Selector index={1}/>
      <Selector index={2}/>
    </div>
  );
};
