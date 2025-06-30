## Presentation 
- Carbon.nov.sh ==> website (Code conver to pic format)
- Google Slides

*** Coding Arrangement format ***
- Early Return 
- Edge Case / Corner Case
- General Case

 *** ctrl + Shift + p to open run in inspect snippet=
### Day 07 
# Truthy / Falsy(8 values)
- if a value converted into a boolean its a truthy.  Other are Falsy. 
- n JavaScript, a truthy value is any value that is considered true when evaluated in a Boolean context—like inside an if statement or a logical expression.
- Here’s the twist: JavaScript doesn’t require a value to be exactly true to treat it as truthy.
### Here are a few common examples of truthy values:
- Non-empty strings (e.g., "hello")
- Numbers other than 0 (e.g., 42, -1)
- Objects (even empty ones: {})
- Arrays (even empty ones: [])
- The special value true itself, of course
```js
    // Without truthy concept
    if (name !== null && name !== undefined && name !== "") {
        // do something
    }

    // With truthy concept
    if (name) {
        // do something
    }
```
---
 ## Falsy
- In JavaScript, a falsy value is one that evaluates to false when used in a Boolean context—like in an if statement or with logical operators.
- Here’s the exclusive club of falsy values (there are only seven!):
- false – literally, the Boolean false
- 0 – zero
- -0 – negative zero (quirky but different from 0)
- "" – empty string
- null – represents “no value”
- undefined – the default for unassigned variables
- NaN – stands for “Not a Number,” usually from invalid number operations


*** Refer falsy table in mdn file *** 

- cannot read properties of undefined / null

## Optional Chaining ?.

## Ternary Operator  ? :
- operands 
```js
let score = 85;
let grade = (score >= 90) ? "A" :
            (score >= 75) ? "B" :
            (score >= 60) ? "C" : "F";

console.log(grade); // "B"
```
### Binary operator 
- 1. Mathematical operators --> +,-,*,/,%
- 2. relational operators --> 
- 3. Logical operators


- 4. unary operator 
        - 1. ++
        - 2. --
        - 3. !
## Shorthand 

## nullish  coalescing  ??  ==>  
 - null 
 - undefined 
    - Get only These two values nullish allow falsy value.
- The ?? operator returns the right-hand operand when the left-hand operand is null or undefined — but not for other falsy values like 0, false, or "".



 ***  Refer joshwcomeau.com ***

- Defensive code ==> error adikama iruka suthi code panrathu. Error contain panrathuku 

## Arrow Function 
- implicit return 

