## Event Loop

### Call Back Function

- Events Completes then action is called. ==> (Event Complete --> Action Executed)
- A Function takes an another function as an argument it's called Callback Function
- Callback function must have takes one function as an argument.

#### Deal with time function

- setTimeOut and setInterval

- **Recursion** function (The function call itself)

## Single thread and Multi thread

- threads are available inside core.
- core is inside the cpu.
- **One core equals to two thread**
- what is Process (**Running software is Process**)
- Process runs inside thread
- One thread runs only one Process
- **CPU Sheduling**
- CPU push one process to multiple task inside thread
- Two thread meets same time it create **Dead Lock**. Dead Lock only have multithread.
- JavaScript

### Asynchronous

- **Con-current** --> Multiple task are executing con-currently it is called Asynchronus in single thread

### Stack ==> First in last out / Last in first out

### Queue ==> First in first out / Last in last out

**Event Loop Practice website --> loupe**

- JS runs always Call Stack

- setTimeOut is part of Browser not a JS
- if you call setTimeOut callback stack throws web Apis. web apis get the setTimeOut and wait it's event complete.
- then web apis will throw the setTimeOut to callback queue.Callback Queue throws setTimeOut when call stack is free.
- **EventLoop** is checks the call stack is empty then it will throw **callbackqueue** items to call stack.

#### Interview Question

- Callback Queue have **two types**
- One is Normal Queue (setTimeOut, setInterval, Eventhandlers)
- Secone one is VIP Queue (Promises)

- Asynchronous functions are going to web apis
- Call Stack == **Main thread**

#### All Event Headlers are Asynchronous functions

## Promise - States

- Pending
- Fulfilled
- Rejected

## console.log() always return undefined

### Promise methods

1. .then
2. .catch
3. finally

\*\* Promise methods are always returns promise only

- then only accepts if resolve is returns.
- catch accepts if reject is returns. then redirect the then path.
- finally
