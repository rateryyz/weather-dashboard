export const MAJOR_CITIES = [
  'Tokyo',
  'Paris',
  'New York',
  'London',
  'Dubai',
  'Singapore',
  'Hong Kong',
  'Sydney',
  'Toronto',
  'Berlin',
  'Rome',
  'Madrid',
  'Seoul',
  'Mumbai',
  'São Paulo'
];

export function getRandomCities(count: number): string[] {
  const shuffled = [...MAJOR_CITIES].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}