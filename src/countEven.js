export const countEven = array => {
    if (!array)
        return 0;
    var evens = 0;
    for (var i = 0; i < array.length; i++)
        if (array[i] % 2 === 0)
            evens++;
    return evens
};