function groupAnagrams(strings) {
    // Create an empty object to store anagrams.
    const map = {};

    for (const string of strings) {
        // Generate a key by sorting the characters of each string in alphabetical order.
        const key = string.split('').sort().join('');

        // Check if the key already exists in the map.
        if (map[key]) { 
            // If the key exists, add the current string to the array of strings associated with that key.
            map[key].push(string);
        } else {
            // If the key does not exist, create a new array with the current string as its only element and associate it with the key in the map.
            map[key] = [string];
        }

    }

    // Convert the map values (arrays of strings) into an array and return it.
    return Object.values(map);
}
