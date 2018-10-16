export const duplicatedArgs = (...args) => {
    for (let i=0; i<args.length;i++)
        for (let j=i+1; j<args.length;j++)
            if (args[i] == args[j])
                return true;
    return false;
};