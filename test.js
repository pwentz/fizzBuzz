describe('fizzBuzz', function() {
  it('returns a number when passed that number', function(){
    assert.equal(fizzBuzz(11), 11);
  });

  it("returns 'Fizz' when passed a multiple of 3", function(){
    assert.equal(fizzBuzz(27), 'Fizz');
  });

  it("returns 'Buzz' when passed a multiple of 5", function(){
    assert.equal(fizzBuzz(25), 'Buzz');
  });

  it("returns 'FizzBuzz' when passed a multiple of both 3 and 5", function(){
    assert.equal(fizzBuzz(15), 'FizzBuzz');
  });
});
