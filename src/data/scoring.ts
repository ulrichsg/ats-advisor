import { Building, allBuildings } from './buildings';
import { Good } from './goods';
import { Species, speciesNeeds } from './species';

type ScoredGood = {
  name: string,
  need: number,
  stars: number,
};

export type ScoredBuilding = {
  building: Building,
  goodsScores: ScoredGood[],
  totalScore: number,
};

export function scoreBuildings(specs: Species[], level: number): ScoredBuilding[] {
  const neededGoods = needs(specs);

  return allBuildings
    .values()
    .filter(b => b.isAvailable(specs, level))
    .map(b => score(b, neededGoods))
    .toArray()
    .filter(b => b.totalScore > 0)
    .sort((a, b) => b.totalScore - a.totalScore);
}

const needs = (specs: Species[]) => {
  let result: Map<Good, number> = new Map();
  for (const spec of specs) {
    let specNeeds = speciesNeeds.get(spec) || [];
    for (const need of specNeeds) {
      const oldScore = result.get(need) || 0;
      result.set(need, oldScore + 1);
    }
  }
  return result;
};

const score = (building: Building, neededGoods: Map<Good, number>): ScoredBuilding => {
  let totalScore = 0;
  let goods: ScoredGood[] = [];
  for (const [good, prodScore] of building.production) {
    const needScore = neededGoods.get(good) ?? 0;
    const score = needScore * prodScore;
    if (score > 0) {
      goods.push({ name: good, need: needScore, stars: prodScore });
      totalScore += score;
    }
  }

  const goodsScores = goods.sort((a, b) => b.need - a.need);
  return { building, goodsScores, totalScore };
};
