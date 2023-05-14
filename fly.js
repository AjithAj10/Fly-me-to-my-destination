function minimumPlanes(array) {
  const n = array.length;
  let fuel = array[0];
  let planes = 0;
  
  for (let i = 1; i < n; i++) {
    fuel--;
    if (fuel < 0) {
      return -1;
    }
    if (array[i] > fuel) {
      planes++;
      fuel = array[i];
    }
  }
  
  return planes;
}

const array1 = [2, 1, 2, 3, 1];
console.log(minimumPlanes(array1)); // Output: 2

const array2 = [1, 6, 3, 4, 5, 0, 0, 0, 6];
console.log(minimumPlanes(array2)); // Output: 3