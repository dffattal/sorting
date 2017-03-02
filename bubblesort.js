function bubbleSort(arr) {
  var has_swapped = true;

  while (has_swapped) {
    has_swapped = false;

    var i = 0;
    while (i < arr.length -1) {
      if (arr[i] > arr[i+1]) {
        arr = swap(arr, i);
        has_swapped = true;
      }
      i++;
    }
  }

  return arr;
}

function swap(arr, i) {
    var temp = arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = temp;

    return arr;
}