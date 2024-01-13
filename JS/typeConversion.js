/* There are two types of conversion:
   Implicit: JS automatically convert the type
   Explicit: manually convert the type */

// * Implicit
// number + numeric string = numeric string
let rando = 2 + "3"; // 23

// bool + numeric string = string
rando = true + "3"; // true3

// Numeric strings with - / * converts to number
rando = "4" - "2"; // 2 (number)
rando = "4" * "2"; // 8 (number)
rando = "4" / "2"; // 2 (number)

rando = "Bruce" - "Wayne"; // NaN (Not A Number)

// Number +/- bool is treated as 1(true) or 0(false)
rando = 5 - false; // 5
rando = 5 - true; // 4
rando = "5" - true; // 4

// Null is treated as 0
rando = 5 - null; // 5

// Undefined with number, bool or null returns NaN
rando = undefined + 5; // NaN
rando = undefined + true; // NaN
rando = undefined + null; // NaN
rando = undefined + "bruce"; // undefinedbruce

// * Explicit
// Convert type to NUMBER
rando = Number("5"); // number (5)
rando = Number(false); // number (0)
rando = Number(""); // number (0)
rando = parseInt("5"); // number (0)
rando = parseFloat("5.67"); // number (0)

// Convert type to STRING
rando = String(true); // true
rando = String(null); // null
rando = String(5); // 5
rando = String(undefined); // undefined
const obj = {
    rand: 4,
    rand2: "fsafs",
    rand3: true,
};
rando = String(obj); // [object Object]
// Alternative way (got to be inside parenthesis)
rando = (500).toString();

// Convert type to BOOL
/* null, undefined, 0, '', NaN default to 0
   any other value will be 1, even zero between quotes*/
rando = Boolean(10); // true
rando = Boolean("  "); // true

console.log(rando);
