function fizzbuzz(num){
	for (var i = 1; i < num + 1; i++){
		if (i % 15 == 0){
			console.log('FizzBuzz');
		}
		else if (i % 5 == 0){
			console.log('Buzz');
		}
		else if (i % 3 == 0){
			console.log('Fizz');
		}
		else{
		console.log(i);
		}
	}
}

// Input: fizzbuzz(20)
// Output: 1  2  Fizz  4  Buzz  Fizz  7  8  Fizz  Buzz  11  Fizz  13  14  FizzBuzz  16  17  Fizz  19  Buzz

function InsertAt(arr, idx, n){

}

// Input: insertAt([1,2,3], 2, 7)
// Output: [1,2,7,3]

// Input: insertAt([1,2,3], 5, 20)
// Output: [1,2,3, undefined, undefined, 20]

// Example:  insertAt([1,2,3], -3, 20)
// Output: [1,2,3]