import { Good } from './goods';

export type Species = 'human' | 'beaver' | 'harpy' | 'lizard' | 'fox' | 'frog'

export const speciesNames = ['human', 'beaver', 'harpy', 'lizard', 'fox', 'frog'];

export const speciesNeeds: Map<Species, Good[]> = new Map([
  ['human', ['porridge', 'biscuits', 'pie', 'coats', 'ale', 'incense']],
  ['beaver', ['biscuits', 'pickled_goods', 'coats', 'ale', 'scrolls', 'wine']],
  ['harpy', ['jerky', 'paste', 'boots', 'coats', 'scrolls', 'tea']],
  ['lizard', ['jerky', 'skewers', 'pie', 'pickled_goods', 'boots', 'training_gear']],
  ['fox', ['porridge', 'skewers', 'pickled_goods', 'boots', 'incense', 'tea']],
  ['frog', ['porridge', 'paste', 'pie', 'tea', 'wine', 'boots', 'training_gear']],
]);
