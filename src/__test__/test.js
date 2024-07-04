import Team from '../team';
import Character from '../character';

test('for add', () => {
  const team = new Team();
  const character = new Character('Русалка');
  team.add(character);
  expect(() => team.members.has(character)).toBeTruthy();
});

test('for addAll', () => {
  const team = new Team();
  const character1 = new Character('Бобр');
  const character2 = new Character('Печкин');
  const character3 = new Character('Карась');
  const character4 = new Character('Синица');
  team.addAll(character1, character2, character3, character4);
  expect(team.members.size).toBe(4);
});

test('for toArray', () => {
  const team = new Team();
  const character1 = new Character('Бобр');
  const character2 = new Character('Печкин');
  const character3 = new Character('Карась');
  const character4 = new Character('Синица');
  team.addAll(character1, character2, character3, character4);
  expect(team.toArray()).toEqual([character1, character2, character3, character4]);
});

test('for add error', () => {
  const team = new Team();
  const character = new Character('Русалка');
  team.add(character);
  expect(() => team.add(character)).toThrow();
});
