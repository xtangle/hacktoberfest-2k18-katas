  export const corneredString = (string) => {
  if(typeof string !== 'string') return "Invalid Data Type"; // CHECK: See if input type is string
  if(!string) return string; // CHECK: Empty

  string = string.toUpperCase(); // SET TO UPPERCASE

  let results = ''; // Container for the cornered string

  const strArr = string.split(''); // Separate string

  results += strArr.join(' '); // Add the row

  if(string.length < 2) return results; // CHECK: Row is less than 2 chars just return the row

  strArr.shift(); // Remove first char of the string arr

  results += "\n\n"; // Add new line and space to start column

  results += strArr.join("\n\n"); // Add column by joining the string array by adding two new lines per char
  
  return results;
};

console.log(corneredString({type: 'Invalid Data Type'}));


