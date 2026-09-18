for(num = 1; num<=50; num++){
    if(num % 3 == 0 && num % 5 == 0)
        console.log("FizzBuzz")
    else if (num % 5 == 0)
        console.log("Buzz")
    else if (num % 3 == 0)
        console.log("fizz")
    else
        console.log(num)
}
