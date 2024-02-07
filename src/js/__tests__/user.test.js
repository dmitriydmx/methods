class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно содержать от 2 до 10 символов');
    }
    if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
      throw new Error('Выбран некорректный класс персонажа');
    }
    
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
  } 
  levelUp() {
    if (this.health === 0) {
      throw new Error('Cannot level up a dead character');
    }
    this.level++;
    this.attack += Math.round(this.attack * 0.2);
    this.defence += Math.round(this.defence * 0.2);
    if (this.health < 100) {
      this.health = 100;
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}  




class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman');
    this.attack = 25;
    this.defence = 25;
  }
}

class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
    this.attack = 40;
    this.defence = 10;
  }
}

class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}

class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}

class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
    this.attack = 25;
    this.defence = 25;
  }
}

class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
    this.attack = 40;
    this.defence = 10;
  }
}
module.exports = Character;

test('Character is created correctly', () => {
  const character = new Character('Alice', 'Bowman');
  expect(character.name).toBe('Alice');
  expect(character.type).toBe('Bowman');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
  expect(character.attack).toBe(0);
  expect(character.defence).toBe(0);
});

test('Bowman levelUp works correctly', () => {
  const bowman = new Bowman('Alice');
  bowman.levelUp();
  expect(bowman.level).toBe(2);
  expect(bowman.attack).toBe(30);
  expect(bowman.defence).toBe(30);
  expect(bowman.health).toBe(100);
  bowman.damage(50);
  bowman.levelUp();
  expect(bowman.level).toBe(3);
  expect(bowman.attack).toBe(36);
  expect(bowman.defence).toBe(36);
  expect(bowman.health).toBe(100);
});

test('Damage calculation works correctly', () => {
  const swordsman = new Swordsman('Bob');
  swordsman.damage(20);
  expect(swordsman.health).toBe(82); 
  swordsman.damage(75);
  expect(swordsman.health).toBe(14.5); 
  swordsman.damage(30);
  expect(swordsman.health).toBe(0);
});
