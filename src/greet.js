export const greet = (name) => {

    // Do a type check for String.
    if (typeof name !== "string") {
        return 'What a curious name!';
    }

    return `Hi, ${name}! Nice to meet you :)`;

};