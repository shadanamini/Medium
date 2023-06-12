const lengthOfLongestSubstring = (string) => {
    let maximum = 0, start = 0;
    const set = new Set();

    for (let end = 0; end < string.length; end++) {
        const char = string[end];

        while (set.has(char)) {
            set.delete(string[start]);
            start++;
        }

        set.add(char);

        const length = end - start + 1;
        maximum = Math.max(maximum, length);
    }

    return maximum;
};