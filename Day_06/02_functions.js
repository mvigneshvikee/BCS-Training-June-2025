var a = 50
var b = 40
 var c = a + b

 // Function => Declare once - Reuse many times

 // 1. Terms
 // 2. Working
 // 3. Default Value  ==> function sum(n1,n2=0)     -->  var result1 = sum(60, ) 
 // 4. Rest             ==> function sum(n1,n2=0, ...rss)   --> var result2 = sum(70, 100,80, 30, 50)
 // if we not giving return statement. the result will undefined. 
 // 
// sum-> function name
// function Declaration / Definition
// {}--> function body
// n1,n2 --> parameter
 function sum(n1,n2){      // function sum(n1,n2=0) ==> default value assigning. lets provide n2 value equal to 0
    var ans = n1 + n2
    return ans.toFixed(2);  // toFixed always returns string value
 }

 // 60,80 --> Arguments
 var result1 = sum(60, 80)  // Function Call
 var result2 = sum(70, 100)
 var result3 = sum(70.7511, 100.1213)

 // argument > parameter == ignore remaining values
 console.log(result1)
 console.log(result2)
 console.log(result3)
