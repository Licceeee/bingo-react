const shuffle = (arr) => {
  let current = arr.length; // 25
  let random; // 0

  while (current != 0) {
    random = Math.floor(Math.random() * current);
    current--; // decrease current
    // swap values using destructuring
    [arr[current], arr[random]] = [arr[random], arr[current]];
  }
  return arr;
};

export default shuffle;
