const checkAlmostEquivalent = (word1, word2) => {
    const map = {};

    for (let i = 0; i < word1.length; i++) {
        const characterOne = word1[i];
        const characterTwo = word2[i];

        if (!map[characterOne]) {
            map[characterOne] = 0;
        }

        if (!map[characterTwo]) {
            map[characterTwo] = 0;
        }

        map[characterOne]++;
        map[characterTwo]--;
    }

    return !Object.keys(map).find((characterOne) => Math.abs(map[characterOne]) > 3)
};