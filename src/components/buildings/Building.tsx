import { Component, For } from 'solid-js';
import styles from './Building.module.css'

type Props = {
  name: string;
  goods: { name: string, need: number, stars: number }[];
}

const Building: Component<Props> = (props) => {
  return (
    <div class={styles.Building}>
      <div class={styles.Heading}>{props.name}</div>
      <ul class={styles.Production}>
        <For each={props.goods}>
          {(item) => {
            let className;
            switch (item.need) {
              case 0:
                className = styles.ProductionNeed0;
                break;
              case 1:
                className = styles.ProductionNeed1;
                break;
              default:
                className = styles.ProductionNeed2;
            }

            return (
              <li class={className}>
                {item.name} ({'*'.repeat(Math.floor(item.stars))})
              </li>
            );
          }}
        </For>
      </ul>
    </div>
  );
}

export default Building;