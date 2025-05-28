import { Good, Species } from './species';

export class Building {
  public name: string;
  public production: Map<Good, number>;
  public minLevel: number;
  public species: Species | null;

  constructor(name: string, production: Map<Good, number>, minLevel: number = 0, species: Species | null = null) {
    this.name = name;
    this.production = production;
    this.minLevel = minLevel;
    this.species = species;
  }

  isAvailable(species: Species[], level: number): unknown {
    return level >= this.minLevel
      && (this.species === null || species.some(s => s === this.species));
  }
}

export const allBuildings = new Map([
  ['alchemists_hut', new Building(
    'alchemists_hut',
    new Map<Good, number>([
      ['crystalized_dew', 2],
      ['tea', 2],
      ['wine', 2],
    ]),
    10,
  )],
  ['apothecary', new Building(
    'apothecary',
    new Map<Good, number>([
      ['dye', 2],
      ['jerky', 2],
      ['tea', 2],
    ]),
    5,
    'harpy',
  )],
  ['artisan', new Building(
    'artisan',
    new Map<Good, number>([
      ['barrels', 2],
      ['coats', 2],
      ['scrolls', 2],
    ]),
    5,
    'harpy',
  )],
  ['bakery', new Building(
    'bakery',
    new Map<Good, number>([
      ['biscuits', 2],
      ['pie', 2],
      ['pottery', 2],
    ]),
  )],
  ['beanery', new Building(
    'beanery',
    new Map<Good, number>([
      ['crystalized_dew', 1],
      ['pickled_goods', 1],
      ['porridge', 3],
    ]),
    10,
    'fox',
  )],
  ['brewery', new Building(
    'brewery',
    new Map<Good, number>([
      ['ale', 3],
      ['porridge', 2],
    ]),
    0,
    'human',
  )],
  ['brick_oven', new Building(
    'brick_oven',
    new Map<Good, number>([
      ['biscuits', 3],
      ['incense', 2],
      ['coal', 1],
    ]),
    11,
    'human',
  )],
  ['brickyard', new Building(
    'brickyard',
    new Map<Good, number>([
      ['bricks', 3],
      ['pottery', 2],
      ['crystalized_dew', 1],
    ]),
  )],
  ['butcher', new Building(
    'butcher',
    new Map<Good, number>([
      ['jerky', 2],
      ['oil', 2],
      ['skewers', 2],
    ]),
    0,
    'lizard',
  )],
  ['cannery', new Building(
    'cannery',
    new Map<Good, number>([
      ['paste', 3],
      ['wine', 2],
      ['biscuits', 1],
    ]),
    13,
    'frog',
  )],
  ['carpenter', new Building(
    'carpenter',
    new Map<Good, number>([
      ['planks', 2],
    ]),
  )],
  ['cellar', new Building(
    'cellar',
    new Map<Good, number>([
      ['wine', 3],
      ['pickled_goods', 2],
    ]),
    3,
    'beaver',
  )],
  ['clothier', new Building(
    'clothier',
    new Map<Good, number>([
      ['coats', 3],
      ['waterskins', 1],
    ]),
  )],
  ['cobbler', new Building(
    'cobbler',
    new Map<Good, number>([
      ['boots', 3],
      ['dye', 1],
    ]),
    15,
  )],
  ['cookhouse', new Building(
    'cookhouse',
    new Map<Good, number>([
      ['biscuits', 2],
      ['porridge', 2],
      ['skewers', 2],
    ]),
  )],
  ['cooperage', new Building(
    'cooperage',
    new Map<Good, number>([
      ['barrels', 3],
      ['coats', 2],
    ]),
    7,
  )],
  ['distillery', new Building(
    'distillery',
    new Map<Good, number>([
      ['ale', 2],
      ['incense', 2],
      ['pickled_goods', 2],
    ]),
    4,
  )],
  ['druids_hut', new Building(
    'druids_hut',
    new Map<Good, number>([
      ['oil', 3],
      ['tea', 2],
      ['coats', 1],
    ]),
    6,
  )],
  ['furnace', new Building(
    'furnace',
    new Map<Good, number>([
      ['copper_bars', 2],
      ['pie', 2],
      ['skewers', 2],
    ]),
    11,
  )],
  ['granary', new Building(
    'granary',
    new Map<Good, number>([
      ['fabric', 2],
      ['pickled_goods', 2],
    ]),
    6,
  )],
  ['grill', new Building(
    'grill',
    new Map<Good, number>([
      ['skewers', 3],
      ['paste', 2],
      ['copper_bars', 1],
    ]),
    17,
  )],
  ['kiln', new Building(
    'kiln',
    new Map<Good, number>([
      ['coal', 3],
      ['bricks', 1],
      ['jerky', 1],
    ]),
  )],
  ['leatherworker', new Building(
    'leatherworker',
    new Map<Good, number>([
      ['waterskins', 3],
      ['boots', 2],
      ['training_gear', 1],
    ]),
    4,
    'lizard',
  )],
  ['lumber_mill', new Building(
    'lumber_mill',
    new Map<Good, number>([
      ['planks', 3],
      ['scrolls', 1],
    ]),
  )],
  ['manufactory', new Building(
    'manufactory',
    new Map<Good, number>([
      ['barrels', 2],
      ['dye', 2],
      ['fabric', 2],
    ]),
  )],
  ['press', new Building(
    'press',
    new Map<Good, number>([
      ['oil', 3],
      ['flour', 1],
      ['paste', 1],
    ]),
    7,
  )],
  ['provisioner', new Building(
    'provisioner',
    new Map<Good, number>([
      ['flour', 2],
      ['barrels', 2],
    ]),
  )],
  ['scribe', new Building(
    'scribe',
    new Map<Good, number>([
      ['ale', 1],
      ['scrolls', 3],
    ]),
    12,
    'beaver',
  )],
  ['smelter', new Building(
    'smelter',
    new Map<Good, number>([
      ['training_gear', 2],
      ['pie', 1],
      ['copper_bars', 3],
    ]),
    3,
  )],
  ['stamping_mill', new Building(
    'stamping_mill',
    new Map<Good, number>([
      ['flour', 2],
      ['bricks', 2],
      ['copper_bars', 2],
    ]),
    4,
  )],
  ['supplier', new Building(
    'supplier',
    new Map<Good, number>([
      ['flour', 2],
      ['planks', 4],
      ['waterskins', 3],
    ]),
    12,
  )],
  ['teahouse', new Building(
    'teahouse',
    new Map<Good, number>([
      ['incense', 2],
      ['tea', 3],
      ['waterskins', 1],
    ]),
    9,
    'fox',
  )],
  ['tinctury', new Building(
    'tinctury',
    new Map<Good, number>([
      ['dye', 3],
      ['ale', 2],
      ['wine', 1],
    ]),
  )],
  ['tinkerer', new Building(
    'tinkerer',
    new Map<Good, number>([
      ['training_gear', 2],
      ['pottery', 2],
    ]),
    13,
  )],
  ['toolshop', new Building(
    'toolshop',
    new Map<Good, number>([
      ['boots', 2],
    ]),
    12,
  )],
  ['weaver', new Building(
    'weaver',
    new Map<Good, number>([
      ['training_gear', 1],
      ['boots', 1],
      ['fabric', 3],
    ]),
  )],
  ['workshop', new Building(
    'workshop',
    new Map<Good, number>([
      ['bricks', 2],
      ['planks', 2],
      ['fabric', 2],
    ]),
  )],
]);

export type BuildingType = keyof typeof allBuildings;
