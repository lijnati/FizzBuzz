// The Problem :
  //write a program that prints the number from 1 to 20
  //for multiples of 3 print "Fizz" instead of number
  //for multiples of 5 print "Buzz" instead of number
  //for numbers which are multiples of both 3 & 5 print "FizzBuzz"
  //for numbers not divisible by 3 or 5, or both, print the number as is.


  //pseudocode:

    //FOR LOOP:
    //Set counter to 1
    // Break when counter Reaches 20
    // Increment Counter by 1
        //IF number MOD 15 === 0
            //print 'FizzBuzz'
        //ELSE IF number MOD 3 === 0
           //print 'Fizz'
        //ELSE IF number MOD 5 ===0 
          //print 'Buzz'
        //ELSE 
          //print number
  
  for (let i = 1; i<=20; i++) {
     if(i % 15 === 0) {
       document.write('FizzBuzz');
       document.write("<br />");
     }
     else if (i % 3 === 0) {
        document.write('Fizz');
        document.write("<br />");
     }
     else if (i % 5 === 0) {
        document.write('Buzz');
        document.write("<br />");
     }
     else {
       document.write(i);
       document.write("<br />")
     }
  }