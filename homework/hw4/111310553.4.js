function deepMerge(obj1, obj2) {
  for (const key in obj2) {

    if (
      obj2[key] !== null &&
      typeof obj2[key] === "object" &&
      !Array.isArray(obj2[key]) &&
      obj1[key] !== null &&
      typeof obj1[key] === "object" &&
      !Array.isArray(obj1[key])
    ) {

      deepMerge(obj1[key], obj2[key]);
    } else {
      obj1[key] = obj2[key];
    }
  }
  return obj1;
}

const obj1 = {
  a: 1,
  b: { x: 10, y: 20 },
  c: 3,
};

const obj2 = {
  b: { y: 50, z: 30 },
  c: 4,
  d: 5,
};

const merged = deepMerge(obj1, obj2);
console.log(merged);
