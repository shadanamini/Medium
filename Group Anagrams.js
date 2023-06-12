const groupAnagrams = (strings) => {
    const map = {};

    for (const string of strings) {
        const key = string.split('').sort().join('');

        if (map[key]) { 
            map[key].push(string);
        } else {
            map[key] = [string];
        }

    }

    return Object.values(map);
};