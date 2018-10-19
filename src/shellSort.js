export const shellSort = (input) => {
  var nums = input;
  if(nums.length == 0)
  {
	throw new error();
  }
  else
  {
	return nums.sort(function(a, b){return a-b});
  }
};
