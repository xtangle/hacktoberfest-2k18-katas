export const christmasTree = (level) => {
  // Implement a function the return a christmas tree
  // as a string

  // The level parameter defines how many levels the
  // tree should contain

  // Example tree with 3 levels
  //   X
  //  XXX
  // XXXXX
  //   I

  // If no level is provided the function should throw an error

  if (!level || level <= 1){
    throw "No level provided";
  }

  var tree = '';
  var blanks = '';
  for (var row = 0; row < level; row++){
    blanks = ' '.repeat(level - (row + 1));
    tree += blanks + 'X'.repeat((2 * (row + 1)) - 1) + blanks + "\n";
  }

  blanks = ' '.repeat(level - 1);
  tree += blanks + 'I' + blanks + "\n";

  return tree;
};
