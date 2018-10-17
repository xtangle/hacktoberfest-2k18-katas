export const gammaFunction = (int) => {
  if (int == 0){
    throw("Not a valid gammaFunction integer");
  }

  var product = 1;
  for (var i = 1; i < int; i++){
    product *= i;
  }
  return product;
};
