const winnerOfGame = (colors) => {
    let aCount = 0;
    let bCount = 0;

    for (let i = 1; i < colors.length - 1; i++) {
        if (colors[i] === 'A') {
            if (colors[i - 1] === 'A' && colors[i + 1] === 'A') {
                aCount++;
            }
        } else if (colors[i] === 'B') {
            if (colors[i - 1] === 'B' && colors[i + 1] === 'B') {
                 bCount++;
            }
        }
    }

    return aCount > bCount;
};