export const isFortyTwo = (param) => {
    // TO IMPLEMENT IN ANOTHER PR
    if (param === 42) {
        return true;
    }
    else if (param === "42") {
        return true;
    }
    else if (param.toString().toUpperCase() === "FORTY-TWO") {
        return true;
    }
    else {
        return false;
    }
};