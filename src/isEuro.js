export const isEuro = (value) => {
    if ((typeof value !== 'string')) return;
    return (/^\d{1,3}(([.]\d{3})*)?([,]\d{2})?€$/).test(value);
};
