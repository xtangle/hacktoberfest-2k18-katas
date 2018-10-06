export const moveFromAToB = (map) => {
  let i;
  let j;
  let indexAStart = [];
  let indexAEnd = [];
  for(i = 0; i < map.length; i++) {
    for(j = 0; j < 10; j++) {
      if(map[i][j] == 'A') {
        indexAStart.push([i,j]);
        if(map[i+1]) {
          if(map[i+1][j] == 'B') {
            return true;
          } else if(map[i+1][j] == ' ') {
            map[i+1] = map[i+1].substr(0,j) + 'A' + map[i+1].substr(j+1, 10);
          }
        } 
        if(map[i-1]) {
          if(map[i-1][j] == 'B') {
            return true;
          } else if(map[i-1][j] == ' ') {
            map[i-1] = map[i-1].substr(0,j) + 'A' + map[i-1].substr(j+1, 10);
          }
        } 
        if(map[i][j+1]) {
          if(map[i][j+1] == 'B') {
            return true;
          } else if(map[i][j+1] == ' ') {
            map[i] = map[i].substr(0,j+1) + 'A' + map[i].substr(j+2, 10);
          }
        }
        if(map[i][j-1]) {
          if(map[i][j-1] == 'B') {
            console.log('im here');
            return true;
          } else if(map[i][j-1] == ' ') {
            map[i] = map[i].substr(0,j-1) + 'A' + map[i].substr(j, 10);
          }
        }
      }
    }
  }

  for(i = 0; i < map.length; i++) {
    for(j = 0; j < 10; j++) {
      if(map[i][j] == 'A') {
        indexAEnd.push([i,j]);
      }
    }
  }

  if(JSON.stringify(indexAEnd) == JSON.stringify(indexAStart)) {
    return false;
  } else {
    return moveFromAToB(map);
  }

};
