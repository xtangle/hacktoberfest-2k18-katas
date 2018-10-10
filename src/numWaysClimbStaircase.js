function countWays (ways, stepSizes) {
    if (ways <= 1) { 
        return ways; 
    }
  
    var res = 0;
    var i = 1;

    while (i <= ways && i <= stepSizes) {
        res += countWays(ways-i, stepSizes);
        i++;
    }

    return res;
}

export const numWaysClimbStaircase = (ways, stepSizes = [1, 2]) => {
    var max = stepSizes[stepSizes.length-1];
    return countWays(ways+1, max);
}
