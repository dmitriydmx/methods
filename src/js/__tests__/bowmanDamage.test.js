import Bowman from "../class/bowman";

test('Bowman damage works correctly', () => {
  const bowmanDamage = new Bowman('Bowman');
  const correctDamage = {
    level: 1,
    attack: 25,
    defence: 25,
    health: 85,
    name: 'Bowman',
    type: 'Bowman'
  };

  bowmanDamage.damage(20);

  expect(bowmanDamage).toEqual(correctDamage);
})
