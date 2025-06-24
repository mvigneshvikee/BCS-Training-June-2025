
# 🛡️ Marvel-Themed JavaScript Assessment

---

## ⭐ Easy

<details>
<summary>1. Hero ID Formatter (⭐)</summary>

### Task

Prompt the user for a hero’s name. Convert it to lowercase and uppercase. Display both on separate lines.

#### Example 1

**Input**: `"BlackPanther"`
**Output**:

```
blackpanther  
BLACKPANTHER
```


#### Example 2

**Input**: `"  ScarletWitch "`
**Output**:

```
scarletwitch  
SCARLETWITCH
```
# Answer 
```js
const heroName = prompt("Enter a Hero name: ")

console.log(heroName.toLowerCase())
console.log(heroName.toUpperCase())
```
</details>

---

<details>
<summary>2. Suit Version Type Check (⭐)</summary>

### Task

Tony inputs the suit version as a string. Convert it to number and log the type before and after conversion.

#### Example 1

**Input**: `"85"`
**Output**:

```
string  
number
```

#### Example 2

**Input**: `"007"`
**Output**:

```
string  
number
```
# Answer
```js
const suitVersion = prompt("Enter a Iron Man Suit Version:")
const typeChange = parseInt(suitVersion)
console.log(typeof(suitVersion))
console.log(typeof(typeChange))
```

</details>

---

<details>
<summary>3. Hulk Smash Echo (⭐)</summary>

### Task

Ask the user for a sound effect (e.g., `"Smash!"`) and echo it 3 times in a single line.

#### Example 1

**Input**: `"Smash!"`
**Output**:

```
Smash!Smash!Smash!
```

#### Example 2

**Input**: `"Boom "`
**Output**:

```
Boom Boom Boom 
```
# Answer 
```js
var soundEffect = prompt("Enter a Sound Effect:")
console.log(soundEffect.repeat(3))
```

</details>

---

## ⭐⭐⭐ Medium

<details>
<summary>4. Stark Credits Calculator (⭐⭐⭐)</summary>

### Task

Prompt for two separate Stark wallet balances (as strings). Convert both to numbers and display the total credits.

#### Example 1

**Input**: `"1000"`, `"5000"`
**Output**:

```
Your total balance is 6000 credits.
```

#### Example 2

**Input**: `"250"`, `"250"`
**Output**:

```
Your total balance is 500 credits.
```
# Answer
```js
const wallet1 = +prompt("Enter a First Stark Balance Value:")
const wallet2 = +prompt("Enter a Second Stark Balance Value:")

const result = wallet1 + wallet2

console.log(`Your total balance is ${result} credits.`)
```
</details>

---

<details>
<summary>5. Shield Temperature Scanner (⭐⭐⭐)</summary>

### Task

Prompt for the shield’s surface temperature in Celsius.

* > 120 → "🔥 Overheated!"
* < -10 → "❄️ Frozen!"
* Else → "🛡️ Stable."

#### Example 1

**Input**: `130`
**Output**:

```
🔥 Overheated!
```

#### Example 2

**Input**: `25`
**Output**:

```
🛡️ Stable.
```

# Answer
```js

var celsius = + prompt("Enter a Shield Surface temperature:")
if (celsius > 120){
    console.log("🔥 Overheated!")
}else if (celsius < 10){
    console.log("❄️ Frozen!")
}else{
    console.log("🛡️ Stable.")
}
```

</details>

---

<details>
<summary>6. Infinity Stone Energy Rank (⭐⭐⭐)</summary>

### Task

Prompt for the power level (0–100) of an infinity stone.
Rank:

* 90+ → "Legendary 💎"
* 60–89 → "Potent ⚡"
* <60 → "Weak 🪨"

#### Example 1

**Input**: `95`
**Output**:

```
Legendary 💎
```

#### Example 2

**Input**: `58`
**Output**:

```
Weak 🪨
```
# Answer 

```js
var powerLevel = +prompt("Enter a Power level of Infinity Stone:")
if (powerLevel > 90){
    console.log("Legendary 💎")
}else if (powerLevel < 60){
    console.log("Weak 🪨")
}else{
    console.log("Potent ⚡")
}
```
</details>

---

<details>
<summary>7. Stark Email Generator (⭐⭐⭐)</summary>

### Task

Prompt for a name. Trim and convert it to lowercase. Output the Stark Industries email.

#### Example 1

**Input**: `" Peter "`
**Output**:

```
peter@starkindustries.com
```

#### Example 2

**Input**: `"WARMachine"`
**Output**:

```
warmachine@starkindustries.com
```
# Answer 

```js
var mail = prompt("Enter a Name:").toLowerCase().trim()
console.log(`${mail}@starkindustries.com`)
```
</details>

---

<details>
<summary>8. Jarvis Access Gate (⭐⭐⭐)</summary>

### Task

Prompt for an access code (number).

* 1000–1999 → “Access granted”
* Exactly 1700 → “⚠️ Override mode activated”
* Else → “Access denied”

#### Example 1

**Input**: `1024`
**Output**:

```
Access granted
```

#### Example 2

**Input**: `1700`
**Output**:

```
⚠️ Override mode activated
```

# Answer 
```js
var num = +prompt("Enter a Access code:")

if (num == 1700){
    console.log("⚠️ Override mode activated")
}else if (num >= 1000 && num <=1999){
    console.log("Access granted")
}else{
    console.log("Access denied")
}
```

</details>

---

## ⭐⭐⭐⭐ Hard

<details>
<summary>9. Speed Duel – Quicksilver vs Hawkeye (⭐⭐⭐⭐)</summary>

### Task

Prompt for their speeds. Log who is faster and by how much (in km/h).

#### Example 1

**Input**: `180`, `90`
**Output**:

```
Quicksilver is faster than Hawkeye by 90 km/h.
```

#### Example 2

**Input**: `150`, `160`
**Output**:

```
Hawkeye is faster than Quicksilver by 10 km/h.
```
# Answer 
```js
var quicksilverSpeed = +prompt("Enter a Quiksilver speed:")
var hawkeyeSpeed = +prompt("Enter a Hawkeye speed:")

var result = Math.abs(quicksilverSpeed - hawkeyeSpeed)
if (quicksilverSpeed > hawkeyeSpeed){
    console.log(`Quicksilver is faster than Hawkeye by ${result} km/h.`)
}else{
    console.log(`Hawkeye is faster than Quicksilver by ${result} km/h.`)
}
```
</details>

---

<details>
<summary>10. S.H.I.E.L.D. Agent Validation (⭐⭐⭐⭐)</summary>

### Task

Prompt for a name. Normalize the input (trim + lowercase).
Validate against allowed agents: `"natasha"`, `"clint"`, `"nick"`.

* If match → "🛡️ Access granted"
* Else → "⛔ Unauthorized"

#### Example 1

**Input**: `"  NiCk "`
**Output**:

```
🛡️ Access granted
```

#### Example 2

**Input**: `"tony"`
**Output**:

```
⛔ Unauthorized
```
# Answer 
```js
var agentName = prompt("Enter a Agent Name:").trim().toLowerCase()

if (agentName == "natasha" || agentName =="clint" || agentName == "nick"){
    console.log("🛡️ Access granted")
}else{
    console.log("⛔ Unauthorized")
}
```
</details>