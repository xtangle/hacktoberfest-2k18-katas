// You need to write a function that accepts other functions and invokes them in a sequence.
// Each function is invoked after the previos one finishes.
//
// Each function passed to syncAsync can be synchronious or asynchronious.
// It can invoked with a callback as first parameter.

export const syncAsync = (func) => {
    // func can be called with a callback that will be invoked when it is finished.
    //
    // func(callback);
};
