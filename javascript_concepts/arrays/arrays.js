const sports = ["Soccer", "Football", "Basketball", "Hockey"];

// looping in arrays
for (let sport of sports) {
  console.log(sport);
}

// rest and spread operators
const newSports = [...sports];
console.log(newSports === sports);

// using Array.slice method to create a shallow copy of an array
const copiedSports = sports.slice();
console.log(copiedSports);

// passing arrays as values i.e element in another array
const challenges = [sports, "Dancing"];
console.log(challenges);

// ! rest parameters
function toArray(...params) {
  return params;
}

console.log(toArray(1, 3, 4, 5));
