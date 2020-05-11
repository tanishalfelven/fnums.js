module.exports = () => {
    let counter = 0;

    const inc = () => {
        counter++;

        return inc;
    };

    inc.valueOf = () => counter;

    return inc;
}
