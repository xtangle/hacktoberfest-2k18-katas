export const getAllPermutations = (input) => {
  input = ""+input;
  let arr = input.split('');
  let size = arr.length;
  let perms = [];
  permutation(arr, size, perms);
  perms = perms.sort();
  return perms;
};

export const permutation = (arr, len, fResult=[]) => {
    if(len === 1){
        let perm = arr.join("");
        fResult.push(perm);
        return;
    }
    for(let i=0; i<len; i++){
        permutation(arr, len-1, fResult);
        if(len%2 == 1){
            let c = arr[0];
            arr[0] = arr[len-1];
            arr[len-1] = c;
        } else {
            let c = arr[i];
            arr[i] = arr[len-1];
            arr[len-1] = c;
        }
    }
};
