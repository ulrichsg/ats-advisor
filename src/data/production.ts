import { Building } from './requirements';
import { Good } from './species';

export const buildings: Map<Building, Map<Good, number>> = new Map<Building, Map<Good, number>>([
  ['alchemists_hut', new Map<Good, number>([
    ['crystalized_dew', 2],
    ['tea', 2],
    ['wine', 2],
  ])],
  ['apothecary', new Map<Good, number>([
    ['dye', 2],
    ['jerky', 2],
    ['tea', 2],
  ])],
  ['artisan', new Map<Good, number>([
    ['barrels', 2],
    ['coats', 2],
    ['scrolls', 2],
  ])],
  ['bakery', new Map<Good, number>([
    ['biscuits', 2],
    ['pie', 2],
    ['pottery', 2],
  ])],
  ['beanery', new Map<Good, number>([
    ['crystalized_dew', 1],
    ['pickled_goods', 1],
    ['porridge', 3],
  ])],
  ['brewery', new Map<Good, number>([
    ['ale', 3],
    ['porridge', 2],
  ])],
  ['brick_oven', new Map<Good, number>([
    ['biscuits', 3],
    ['incense', 2],
    ['coal', 1],
  ])],
  ['brickyard', new Map<Good, number>([
    ['bricks', 3],
    ['pottery', 2],
    ['crystalized_dew', 1],
  ])],
  ['butcher', new Map<Good, number>([
    ['jerky', 2],
    ['oil', 2],
    ['skewers', 2],
  ])],
  ['cannery', new Map<Good, number>([
    ['paste', 3],
    ['wine', 2],
    ['biscuits', 1],
  ])],
  ['cellar', new Map<Good, number>([
    ['wine', 3],
    ['pickled_goods', 2],
  ])],
  ['clothier', new Map<Good, number>([
    ['coats', 3],
    ['waterskins', 1],
  ])],
  ['cobbler', new Map<Good, number>([
    ['boots', 3],
    ['dye', 1],
  ])],
  ['cookhouse', new Map<Good, number>([
    ['biscuits', 2],
    ['porridge', 2],
    ['skewers', 2],
  ])],
  ['cooperage', new Map<Good, number>([
    ['barrels', 3],
    ['coats', 2],
  ])],
  ['distillery', new Map<Good, number>([
    ['ale', 2],
    ['incense', 2],
    ['pickled_goods', 2],
  ])],
  ['druids_hut', new Map<Good, number>([
    ['oil', 3],
    ['tea', 2],
    ['coats', 1],
  ])],
  ['furnace', new Map<Good, number>([
    ['copper_bars', 2],
    ['pie', 2],
    ['skewers', 2],
  ])],
  ['granary', new Map<Good, number>([
    ['fabric', 2],
    ['pickled_goods', 2],
  ])],
  ['grill', new Map<Good, number>([
    ['skewers', 3],
    ['paste', 2],
    ['copper_bars', 1],
  ])],
  ['kiln', new Map<Good, number>([
    ['coal', 3],
    ['bricks', 1],
    ['jerky', 1],
  ])],
  ['leatherworker', new Map<Good, number>([
    ['waterskins', 3],
    ['boots', 2],
    ['training_gear', 1],
  ])],
  ['lumber_mill', new Map<Good, number>([
    ['planks', 3],
    ['scrolls', 1],
  ])],
  ['manufactory', new Map<Good, number>([
    ['barrels', 2],
    ['dye', 2],
    ['fabric', 2],
  ])],
]);
