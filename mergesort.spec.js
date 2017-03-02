describe('Split Array function', function() {
  it('returns an array containing two arrays', function() {
    expect( split([])).toEqual([ [], [] ])
  });
  it('is able to split an array into two halves', function() {
    expect( split([4, 2, 3, 1])).toEqual([ [4, 2], [3, 1] ])
  });
});

describe('Merge Sort', function(){
  it('returns an array', function(){
    expect( merge([], [])).toEqual([])
  });
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge([1, 2, 3, 4], [5, 6, 7, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  });
});