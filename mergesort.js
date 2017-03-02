function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */

  var firstHalf = wholeArray.slice(0, Math.floor(wholeArray.length / 2))
  var secondHalf = wholeArray.slice(Math.floor(wholeArray.length / 2))

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
    return arr1.concat(arr2)
}