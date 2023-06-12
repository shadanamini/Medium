const lengthOfLongestSubstring = (string) => {
    let maximum = 0, start = 0;
    const set = new Set();

    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        while (set.has(char)) {
            set.delete(string[start]);
            start++;
        }

        set.add(char);

        const length = i - start + 1;
        maximum = Math.max(maximum, length);
    }

    return maximum;
};