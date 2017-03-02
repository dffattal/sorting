describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles one element', function(){
    expect( bubbleSort([3]) ).toEqual( [3] );
  });

  it('handles multiple elements', function(){
    spyOn(window, 'swap').and.callThrough();
    expect( bubbleSort([16,8,2,5]) ).toEqual( [2,5,8,16] );
    expect(window.swap.calls.count()).toEqual(5);
  });
});