function arraysAreEqual(arr1: number[], arr2: number[]) {
  return arr1.length === arr2.length && arr1.every((value) => arr2.includes(value));
}
