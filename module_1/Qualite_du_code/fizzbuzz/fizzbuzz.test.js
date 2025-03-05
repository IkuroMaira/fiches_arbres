describe('fizzBuzz function', () => {
    it('should return "FizzBuzz !!" for multiples of 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz!!');
        expect(fizzBuzz(30)).toBe('FizzBuzz!!');
    });
    it('should return "Fizz!" for multiples of 3 only', () => {
        expect(fizzBuzz(3)).toBe('Fizz!');
        expect(fizzBuzz(9)).toBe('Fizz!');
    });
    it('should return "Buzz !" for multiples of 5 only', () => {
        expect(fizzBuzz(5)).toBe('Buzz!');
        expect(fizzBuzz(20)).toBe('Buzz!');
    });
});

for (let i=0; i<100; i++){
    console.log(fizzBuzz(i))
}