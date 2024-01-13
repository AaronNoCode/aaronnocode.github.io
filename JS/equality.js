// * Equality

/* == allows coercion (same visual value but different type is OK 'cause 
    JS converts second variable to the first's type and then compares)

   === doesn't allow coercion (got to be same visual value and type 
    in order to be OK cause JS doesn't convert anything) */

const a = "testy";
const b = "testy";
console.log(a == b); // true
console.log(a === b); // true

const c = "10";
const d = 10;
console.log(c == d); // true
console.log(c === d); // false (one is string and other is number)

// null, undefined, '', false, 0 are treated as equals with ==, but not with ===
const e = null;
const f = undefined;
console.log(c == d); // true
console.log(c === d); // false
