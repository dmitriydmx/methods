import Bowman from "../class/bowman";

test('Bowman levelUp works correctly', () => {
  const bowman = new Bowman('Bowman');
  const correctLevelUp = {
    level: 2,
    attack: 30,
    defence: 30,
    health: 100,
    name: 'Bowman',
    type: 'Bowman'
  }
  bowman.levelUp();


  expect(bowman).toEqual(correctLevelUp);
});
