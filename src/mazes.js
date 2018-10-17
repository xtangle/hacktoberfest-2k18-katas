class WorldItem {
  constructor(name) {
    this.name = name;
  }
}
class WorldMap {
  constructor(worldWidth = 1, worldHeight = 1) {
    this.map = Array.from({length: worldHeight * worldWidth});

    this.worldWidth = worldWidth;
    this.worldHeight = worldHeight;

    this.worldItems = new WeakMap();
  }

  coordinatesToIndex(x, y) {
    if (x < 0 || y < 0) return null;
    const index = y * this.worldWidth + x;
    if (index > this.length) return null;
    return index;
  }

  indexToCoordinates(index) {
    if (index < 0 || this.length <= index) return null;
    const x = index % this.worldWidth;
    const y = (index - x) / this.worldWidth;
    return {x, y};
  }

  isEmptySpace(x, y) {
    const index = this.coordinatesToIndex(x, y);
    if (index === null) return false;
    return !this.map[index];
  }

  getCoordinates(item) {
    return this.worldItems.get(item);
  }

  setCoordinates(item, x, y) {
    this.worldItems.set(item, {x, y});
    return item;
  }

  removeItem(item) {
    const coordinates = this.getCoordinates(item);
    if (coordinates) {
      const index = this.coordinatesToIndex(coordinates.x, coordinates.y);
      if (index !== null) {
        this.map[index] = null;
      }
    }
    return item;
  }

  putItem(item, x, y) {
    if (!this.isEmptySpace(x, y)) return item;
    this.removeItem(item);

    const index= this.coordinatesToIndex(x, y);
    this.map[index] = item;
    this.worldItems.set(item, {x, y});

    return item;
  }

  moveItem(item, command) {
    const diff = {x: 0, y: 0};
    switch (command) {
      case 'U': {
        diff.y = -1;
        break;
      }
      case 'D': {
        diff.y = 1;
        break;
      }
      case 'L': {
        diff.x = -1;
        break;
      }
      case 'R': {
        diff.x = 1;
        break;
      }
    }
    const location = this.getCoordinates(item);
    if (!location) return item;
    const {x, y} = location;
    return this.putItem(item, x + diff.x, y + diff.y);
  }
}

const parseData = data => {
  const [
    world,
    player,
    rocks,
    ...rockLocationsAndCommands
  ] = data.split('\n');

  const getCoords = str => str.split(' ').map(x => parseInt(x, 10));
  const translate = ([dx, dy]) => ([x, y]) => [x + dx, y + dy];
  const getCoordsAndTranslate = ([dx, dy]) => {
    const shifter = translate([dx, dy]);
    return str => shifter(getCoords(str));
  };

  const ordinalCoord = getCoordsAndTranslate([-1, -1]);

  const [worldWidth, worldHeight] = getCoords(world);
  const [playerX, playerY] = ordinalCoord(player);
  const rockLocations = rockLocationsAndCommands.slice(0, rocks).map(ordinalCoord);
  const commands = rockLocationsAndCommands.slice(rocks);

  return {
    worldWidth,
    worldHeight,
    playerX,
    playerY,
    rockLocations,
    commands
  };
}

export const mazes = data => {
  const {
    worldWidth,
    worldHeight,
    playerX,
    playerY,
    rockLocations,
    commands
  } = parseData(data);
  
  const world = new WorldMap(worldWidth, worldHeight);
  const player = new WorldItem('player');
  
  world.putItem(player, playerX, playerY);
  
  rockLocations.forEach(([x, y]) => {
    world.putItem(new WorldItem('rock'), x, y);
  });
  
  commands.forEach(command => {
    world.moveItem(player, command);
  });
  
  const playerEndLocation = world.getCoordinates(player);

  return `${playerEndLocation.x + 1} ${playerEndLocation.y + 1}`;
};
