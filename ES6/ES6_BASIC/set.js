const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

letters.delete("c");
letters.clear();

console.log(letters);