export const factorial = (num) => {
// TO IMPLEMENT IN ANOTHER PR
        if(num==0) {
                return 1;
        }
        return num * factorial(num-1);
};
