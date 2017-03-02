function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */

  var firstHalf = wholeArray.slice(0, (wholeArray.length / 2))
  var secondHalf = wholeArray.slice((wholeArray.length / 2))

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
    var finalArr = [];
    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            finalArr.push(arr1.shift());
        } else {
            finalArr.push(arr2.shift());
        }
    }
    return finalArr.concat(arr1).concat(arr2);
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    var splitArr = split(arr)
    // console.log(splitArr[0], splitArr[1])
    // console.log(merge(splitArr[0], splitArr[1]))
    // console.log(mergeSort(splitArr[0], mergeSort(splitArr[1])))
    debugger;
    return merge(mergeSort(splitArr[0]), mergeSort(splitArr[1]))
}