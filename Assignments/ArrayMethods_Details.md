# Array Methods



| Method Name       | Mutates Original Array? | Return Data Type |
|-------------------|-------------------------|------------------|
| map()             | No                      | Array            |
| filter()          | No                      | Array            |
| slice()           | No                      | Array            |
| concat()          | No                      | Array            |
| flat()            | No                      | Array            |
| flatMap()         | No                      | Array            |
| toSorted()        | No                      | Array            |
| toReversed()      | No                      | Array            |
| toSpliced()       | No                      | Array            |
| entries()         | No                      | Iterator         |
| keys()            | No                      | Iterator         |
| values()          | No                      | Iterator         |
| every()           | No                      | Boolean          |
| some()            | No                      | Boolean          |
| includes()        | No                      | Boolean          |
| indexOf()         | No                      | Number           |
| lastIndexOf()     | No                      | Number           |
| find()            | No                      | Element / undefined |
| findIndex()       | No                      | Number           |
| findLast()        | No                      | Element / undefined |
| findLastIndex()   | No                      | Number           |
| join()            | No                      | String           |
| reduce()          | No                      | Any              |
| reduceRight()     | No                      | Any              |



# JavaScript Array Methods – Mutability with Explanation

| Method        | Mutability                  | Return Type           | Chaining       | Description                      |
|---------------|----------------------------------------|------------------------|----------------|----------------------------------------------------|
| `push()`      | 🔁 Mutable – modifies original array   | Number             | ❌ No          | Adds item(s) to end                               |
| `pop()`       | 🔁 Mutable – removes from original array | Element          | ❌ No          | Removes last item                                 |
| `shift()`     | 🔁 Mutable – removes from original array | Element          | ❌ No          | Removes first item                                |
| `unshift()`   | 🔁 Mutable – adds to original array    | Number            | ❌ No          | Adds item(s) to start                             |
| `splice()`    | 🔁 Mutable – changes structure of array | Array (removed items) | ✅ Yes     | Adds/removes items                                |
| `reverse()`   | 🔁 Mutable – reorders original array   | Array                  | ✅ Yes     | Reverses array in place                           |
| `map()`       | ✅ Immutable – returns new transformed array | Array             | ✅ Yes     | Transforms each element                           |
| `filter()`    | ✅ Immutable – returns filtered new array | Array                | ✅ Yes  | Filters elements by condition                     |
| `slice()`     | ✅ Immutable – copies portion, doesn't change original | Array | ✅ Yes       | Extracts portion (copy)                           |
| `find()`      | ✅ Immutable – reads only, returns found value | Element / undefined | ❌ No  | Finds first match                                 |
| `includes()`  | ✅ Immutable – only checks, doesn’t modify | Boolean            | ❌ No       | Checks if value exists                            |
| `some()`      | ✅ Immutable – checks condition without changes | Boolean        | ❌ No      | Checks if any element passes condition            |
| `every()`     | ✅ Immutable – checks all, doesn’t mutate | Boolean             | ❌ No       | Checks if all elements pass condition             |
| `join()`      | ✅ Immutable – returns string version  | String                 | ❌ No       | Joins array into string                           |
| `reduce()`    | ✅ Immutable – aggregates without modifying | Any (custom)      | ❌ No       | Reduces to a single value                         |
| `fill()`      | 🔁 Mutable – overwrites elements directly | Array              | ✅ Yes      | Fills all or part of an array with a static value |

---

✅ **Note**: Use immutable methods for safer, side-effect-free programming, especially in frameworks like React.
