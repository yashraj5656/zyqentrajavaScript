"use client";
import { useState } from "react"; // Removed useEffect
import Link from "next/link";

export default function Level1() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const lessons = [
    {
      title: "Variables",
      description: (
        <div>
          <h4>Types of Variable Declarations</h4>

          <p>
            <b>🔹 var (Old Way)</b>
            <br />
            Introduced in ES3 (1995). <br />
            Function-scoped → Only available inside the function where it is
            declared. <br />
            Can be redeclared and reassigned. <br />
            Hoisted (moved to the top of the scope automatically), but initialized as{" "}
            <code>undefined</code>.
          </p>

          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`var x = 10;
var x = 20; // ✅ redeclaration allowed
x = 30;     // ✅ reassignment allowed
console.log(x); // 30`}
          </pre>

          <p>
            ⚠️ <b>Problem:</b> Works weirdly with block scope:
          </p>

          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`if (true) {
  var test = "hello";
}
console.log(test); // "hello" (still accessible outside block 😬)`}
          </pre>

          <p>
            <b>🔹 let (Modern Way)</b>
            <br />
            Introduced in ES6 (2015). <br />
            Block-scoped → Only accessible inside {`{ }`}. <br />
            Cannot be redeclared in the same scope, but can be reassigned.
          </p>

          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`let y = 10;
y = 20; // ✅ reassignment allowed
// let y = 30; ❌ redeclaration not allowed
console.log(y); // 20`}
          </pre>

          <p>
            <b>🔹 const (Constant)</b>
            <br />
            Introduced in ES6 (2015). <br />
            Block-scoped. <br />
            Cannot be redeclared or reassigned. <br />
            Must be initialized when declared.
          </p>

          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`const z = 100;
// z = 200; ❌ cannot reassign
console.log(z); // 100`}
          </pre>
        </div>
      ),
      task: "Declare a variable (e.g., let x = 5;).",
      check: (code) =>
        /let\s+\w+\s*=/.test(code) ||
        /const\s+\w+\s*=/.test(code) ||
        /var\s+\w+\s*=/.test(code),
      error: "❌ Try again. Use let, const, or var to declare a variable.",
      success: "✅ Correct! You created a variable.",
    },
    {
      title: "Data Types",
      description: (
        <div>
          <h4>Data Types in JavaScript</h4>
          <p>JavaScript has two categories of data types:</p>

          <p>
            <b>🔹 Primitive Types (immutable, stored directly)</b>
            <br />
            <b>Number</b> → Integers & floating-point <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`let age = 25;
let price = 19.99;`}
            </pre>

            <b>String</b> → Text enclosed in " ", ' ', or `backticks` <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`let name = "Alex";
let message = \`Hello, \${name}!\`; // template literal`}
            </pre>

            <b>Boolean</b> → true / false <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`let isOnline = true;
let isDarkMode = false;`}
            </pre>

            <b>Undefined</b> → A variable declared but not assigned any value <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`let x;
console.log(x); // undefined`}
            </pre>

            <b>Null</b> → Intentional "empty" value <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`let y = null;
console.log(y); // null`}
            </pre>

            <b>Symbol (ES6)</b> → Unique and immutable identifier <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`let id = Symbol("id");`}
            </pre>

            <b>BigInt (ES11/ES2020)</b> → For very large numbers beyond Number limit <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`let big = 123456789012345678901234567890n;`}
            </pre>

            <b>🔹 Non-Primitive (Reference) Types</b>
            <br />
            <b>Object</b> → Collection of key-value pairs <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`let person = { name: "Alex", age: 25 };`}
            </pre>

            <b>Array</b> → Ordered list <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`let colors = ["red", "blue", "green"];`}
            </pre>

            <b>Function</b> → Reusable block of code <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`function greet() { return "Hello!"; }`}
            </pre>

            <p>👉 Everything else (like Date, RegExp, etc.) is an object.</p>
          </p>
        </div>
      ),
      task: "Declare a variable with a primitive data type (e.g., let x = 42; or let name = 'John';).",
      check: (code) =>
        /(let|const|var)\s+\w+\s*=\s*((\d+(\.\d+)?)|(['"].*['"])|true|false|null|undefined|Symbol\s*\(.+\)|.*n\s*;|{.*}|\[.*\]|function\s+\w*\s*\(.*\)\s*{.*})/.test(code),
      error: "❌ Try again. Declare a variable with a primitive data type (e.g., number, string, boolean, null, undefined, Symbol, or BigInt).",
      success: "✅ Correct! You declared a variable with a valid data type.",
    },
    {
      title: "Type Conversion",
      description: (
        <div>
          <h4>Type Conversion in JavaScript</h4>
          <p>Sometimes we need to convert values between types. There are two ways:</p>

          <p>
            <b>🔹 Explicit Conversion (done manually)</b>
            <br />
            <b>Convert to String</b> <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`let num = 100;
console.log(String(num));   // "100"
console.log(num.toString()); // "100"`}
            </pre>

            <b>Convert to Number</b> <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`console.log(Number("123"));   // 123
console.log(Number("abc"));   // NaN (Not a Number)
console.log(parseInt("50px")); // 50
console.log(parseFloat("3.14")); // 3.14`}
            </pre>

            <b>Convert to Boolean</b> <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`console.log(Boolean(0));     // false
console.log(Boolean(""));    // false
console.log(Boolean(123));   // true
console.log(Boolean("hi"));  // true`}
            </pre>

            <b>🔹 Implicit Conversion (Type Coercion by JS)</b>
            <br />
            JavaScript automatically converts values in some cases. <br />
            <b>String Conversion</b> <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`console.log("5" + 2); // "52" (number → string)`}
            </pre>

            <b>Number Conversion</b> <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`console.log("5" - 2); // 3 ("5" → number)
console.log("10" * "2"); // 20`}
            </pre>

            <b>Boolean Conversion</b> <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`console.log(2 == "2");   // true (string "2" → number 2)
console.log(2 === "2");  // false (strict comparison, no conversion)`}
            </pre>

            <b>🔹 Special Cases</b> <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`console.log(Number(null));      // 0
console.log(Number(undefined)); // NaN
console.log(Number(true));      // 1
console.log(Number(false));     // 0`}
            </pre>

            <p>
              ✅ <b>Best Practice:</b> Use explicit conversion (Number(), String(), Boolean()) instead of relying on implicit coercion, because coercion can cause bugs.
            </p>
          </p>
        </div>
      ),
      task: "Perform an explicit type conversion (e.g., let x = String(42); or let y = Number('123');).",
      check: (code) =>
        /(let|const|var)\s+\w+\s*=\s*(String\s*\(.+\)|Number\s*\(.+\)|Boolean\s*\(.+\)|\w+\.toString\s*\(\)|parseInt\s*\(.+\)|parseFloat\s*\(.+\))/.test(code),
      error: "❌ Try again. Use an explicit conversion method like String(), Number(), Boolean(), toString(), parseInt(), or parseFloat().",
      success: "✅ Correct! You performed an explicit type conversion.",
    },
    {
      title: "Operators",
      description: (
        <div>
          <h4>Operators in JavaScript</h4>
          <p>Operators are symbols that perform actions on values (operands).</p>

          <p>
            <b>🔹 Arithmetic Operators</b>
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`let a = 10, b = 3;
console.log(a + b); // 13 (Addition)
console.log(a - b); // 7  (Subtraction)
console.log(a * b); // 30 (Multiplication)
console.log(a / b); // 3.333... (Division)
console.log(a % b); // 1 (Remainder)
console.log(a ** b); // 1000 (Exponentiation)`}
            </pre>

            <b>🔹 Assignment Operators</b>
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`let x = 5;
x += 3; // x = x + 3 → 8
x -= 2; // x = x - 2 → 6
x *= 4; // 24
x /= 6; // 4`}
            </pre>

            <b>🔹 Comparison Operators</b>
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`console.log(5 == "5");   // true  (loose equality, type conversion)
console.log(5 === "5");  // false (strict equality, no conversion)
console.log(10 != 5);    // true
console.log(10 > 5);     // true
console.log(10 <= 5);    // false`}
            </pre>

            <b>🔹 Logical Operators</b>
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`console.log(true && false); // false (AND)
console.log(true || false); // true (OR)
console.log(!true);         // false (NOT)`}
            </pre>

            <b>🔹 Ternary Operator (shorthand for if/else)</b>
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result); // Adult`}
            </pre>
          </p>
        </div>
      ),
      task: "Use an operator (e.g., let x = 5 + 3; or let y = 10 > 5;).",
      check: (code) =>
        /(let|const|var)\s+\w+\s*=\s*.*(\+|-|\*|\/|%|\*\*|==|===|!=|!==|>|<|>=|<=|&&|\|\||\?|\:).*/.test(code),
      error: "❌ Try again. Use an arithmetic, assignment, comparison, logical, or ternary operator.",
      success: "✅ Correct! You used an operator.",
    },
    {
      title: "Control Flow",
      description: (
        <div>
          <h4>Control Flow in JavaScript</h4>
          <p>Control flow means deciding the order in which code runs.</p>

          <p>
            <b>🔹 if / else if / else</b>
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`let marks = 85;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}`}
            </pre>

            <b>🔹 switch</b>
            <br />
            Useful when checking multiple possible values.
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Unknown Day");
}`}
            </pre>

            <b>🔹 for Loop</b>
            <br />
            Used when you know how many times to repeat.
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}`}
            </pre>
            Looping through an array:
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`let fruits = ["apple", "banana", "mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}`}
            </pre>

            <b>🔹 while Loop</b>
            <br />
            Used when you don’t know exact repetitions, but repeat until a condition is false.
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`let i = 1;
while (i <= 5) {
  console.log("While count: " + i);
  i++;
}`}
            </pre>

            <b>🔹 do...while Loop</b>
            <br />
            Runs at least once, even if condition is false.
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`let j = 1;
do {
  console.log("Do count: " + j);
  j++;
} while (j <= 5);`}
            </pre>

            <b>🔹 Loop Control Statements</b>
            <br />
            <b>break</b> → exit loop immediately
            <br />
            <b>continue</b> → skip current iteration, move to next
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skip 3
  if (i === 5) break;    // stop at 5
  console.log(i);
}
// Output: 1, 2, 4`}
            </pre>
            <p>
              ✅ <b>Quick Recap:</b> Operators → Arithmetic, Assignment, Comparison, Logical, Ternary; Control Flow → if, switch, for, while, do...while; Loop Control → break, continue
            </p>
          </p>
        </div>
      ),
      task: "Write a control flow statement (e.g., an if statement, for loop, or switch).",
      check: (code) =>
        /(if\s*\(.+\)\s*{)|(switch\s*\(.+\)\s*{)|(for\s*\(.+\)\s*{)|(while\s*\(.+\)\s*{)|(do\s*{.*}\s*while\s*\(.+\);)/.test(code),
      error: "❌ Try again. Write a control flow statement like if, switch, for, while, or do...while.",
      success: "✅ Correct! You wrote a control flow statement.",
    },
    {
      title: "Functions",
      description: (
        <div>
          <h4>Functions in JavaScript</h4>
          <p>A function is a block of reusable code that performs a task.</p>

          <p>
            <b>🔹 Function Declaration</b>
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`function greet(name) {
  return \`Hello, \${name}!\`;
}
console.log(greet("Alex")); // Hello, Alex!`}
            </pre>

            <b>🔹 Function Expression</b>
            <br />
            A function can be stored inside a variable.
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`const add = function(a, b) {
  return a + b;
};
console.log(add(5, 3)); // 8`}
            </pre>

            <b>🔹 Arrow Function (ES6+)</b>
            <br />
            Shorter syntax.
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`const multiply = (a, b) => a * b;
console.log(multiply(4, 2)); // 8`}
            </pre>

            <b>🔹 Default Parameters</b>
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`function sayHello(name = "Guest") {
  return \`Hello, \${name}\`;
}
console.log(sayHello()); // Hello, Guest`}
            </pre>
          </p>
        </div>
      ),
      task: "Define a function (e.g., function sayHi() { return 'Hi'; } or const add = (a, b) => a + b;).",
      check: (code) =>
        /(function\s+\w+\s*\(.+\)\s*{)|(const|let|var)\s+\w+\s*=\s*\(.+\)\s*=>\s*.+|(const|let|var)\s+\w+\s*=\s*function\s*\(.+\)\s*{/.test(code),
      error: "❌ Try again. Define a function using a function declaration, function expression, or arrow function.",
      success: "✅ Correct! You defined a function.",
    },
    {
      title: "Scope",
      description: (
        <div>
          <h4>Scope in JavaScript</h4>
          <p>Scope decides where variables and functions are accessible.</p>

          <p>
            <b>🔹 Global Scope</b>
            <br />
            Declared outside any function or block → accessible everywhere.
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`let globalVar = "I am global";

function test() {
  console.log(globalVar); // accessible
}
test();
console.log(globalVar); // accessible`}
            </pre>

            <b>🔹 Function Scope</b>
            <br />
            Variables declared with var, let, or const inside a function are accessible only inside that function.
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`function example() {
  let localVar = "I am local";
  console.log(localVar); // works
}
// console.log(localVar); ❌ Error`}
            </pre>

            <b>🔹 Block Scope (ES6+)</b>
            <br />
            let and const are block-scoped → only exist inside { }.
            <br />
            var ignores block scope.
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}
// console.log(a); ❌ Error
// console.log(b); ❌ Error
console.log(c); // ✅ 30 (var ignores block scope)`}
            </pre>

            <b>🔹 Lexical Scope (Closures)</b>
            <br />
            A function can access variables of its outer function.
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`function outer() {
  let outerVar = "I am outer";

  function inner() {
    console.log(outerVar); // inner can access outer
  }
  inner();
}
outer();`}
            </pre>
          </p>
        </div>
      ),
      task: "Demonstrate scope by declaring a variable inside a function or block (e.g., function test() { let x = 5; }).",
      check: (code) =>
        /(function\s+\w+\s*\(.+\)\s*{\s*(let|const|var)\s+\w+\s*=)|(if\s*\(.+\)\s*{\s*(let|const)\s+\w+\s*=)/.test(code),
      error: "❌ Try again. Declare a variable inside a function or block to demonstrate scope.",
      success: "✅ Correct! You demonstrated scope.",
    },
    {
      title: "Hoisting",
      description: (
        <div>
          <h4>Hoisting in JavaScript</h4>
          <p>Hoisting = JavaScript moves variable & function declarations to the top of their scope before execution.</p>
          <p>⚠️ But initialization is not hoisted for let & const.</p>

          <p>
            <b>🔹 Hoisting with var</b>
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`console.log(x); // undefined (declaration hoisted, value not)
var x = 10;`}
            </pre>
            JS interprets it like:
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`var x;     // declaration at top
console.log(x); // undefined
x = 10;`}
            </pre>

            <b>🔹 Hoisting with let and const</b>
            <br />
            They are hoisted but stay in the Temporal Dead Zone (TDZ) until initialized.
            <br />
            Accessing before declaration → Error.
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`console.log(y); // ❌ ReferenceError
let y = 5;`}
            </pre>

            <b>🔹 Hoisting with Functions</b>
            <br />
            Function Declarations → fully hoisted
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`sayHi(); // ✅ works
function sayHi() {
  console.log("Hi!");
}`}
            </pre>
            Function Expressions → not hoisted
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`sayHello(); // ❌ TypeError: sayHello is not a function
var sayHello = function() {
  console.log("Hello!");
};`}
            </pre>

            <p>
              ✅ <b>Summary:</b>
              <br />
              Functions → reusable blocks of code (declaration, expression, arrow).
              <br />
              Scope → determines variable visibility (global, function, block, lexical).
              <br />
              Hoisting → declarations move to top:
              <br />
              var → hoisted, initialized as undefined.
              <br />
              let / const → hoisted but in TDZ.
              <br />
              Function declarations → fully hoisted.
              <br />
              Function expressions → behave like variables (var, let, const).
              <br />
              <b>Best Practice:</b> Use const / let instead of var. Declare variables at the top of their scope. Use function declarations when possible for cleaner hoisting.
            </p>
          </p>
        </div>
      ),
      task: "Demonstrate hoisting by declaring a function or variable (e.g., function sayHi() { console.log('Hi'); } or var x = 10;).",
      check: (code) =>
        /(function\s+\w*\s*\(.*\)\s*{)/.test(code) || // function declaration
        /(var\s+\w+\s*=)/.test(code) ||              // var variable
        /(let\s+\w+\s*=)/.test(code) ||              // let variable
        /(const\s+\w+\s*=)/.test(code),               // const variable
      
      error: "❌ Try again. Declare a function or a var variable to demonstrate hoisting.",
      success: "✅ Correct! You demonstrated hoisting.",
    },
    {
      title: "Arrays",
      description: (
        <div>
          <h4>Arrays in JavaScript</h4>
          <p>An array is an ordered collection of values. You can store numbers, strings, booleans, objects, functions, or even other arrays inside an array.</p>

          <p>
            <b>🔹 Creating Arrays</b>
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "mango"];
let mixed = [1, "apple", true, null];`}
            </pre>

            <b>🔹 Accessing Array Elements</b>
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "mango"`}
            </pre>

            <b>🔹 Array Length</b>
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`console.log(fruits.length); // 3`}
            </pre>

            <b>🔹 Modifying Arrays</b>
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`fruits[1] = "orange"; // replace
fruits.push("grape"); // add at end
fruits.unshift("kiwi"); // add at beginning
fruits.pop(); // remove last
fruits.shift(); // remove first`}
            </pre>

            <b>🔹 Iterating Arrays</b>
            <br />
            Using for loop
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}`}
            </pre>
            Using for...of
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`for (let fruit of fruits) {
  console.log(fruit);
}`}
            </pre>
            Using forEach
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`fruits.forEach(fruit => console.log(fruit));`}
            </pre>

            <b>🔹 Useful Array Methods</b>
            <br />
            <table style={{ border: "1px solid #0f0", borderCollapse: "collapse" }}>
              <tr style={{ border: "1px solid #0f0" }}>
                <th style={{ border: "1px solid #0f0", padding: "5px" }}>Method</th>
                <th style={{ border: "1px solid #0f0", padding: "5px" }}>Description</th>
                <th style={{ border: "1px solid #0f0", padding: "5px" }}>Example</th>
              </tr>
              <tr style={{ border: "1px solid #0f0" }}>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>push()</td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>Add element at end</td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}><code>fruits.push("pear")</code></td>
              </tr>
              <tr style={{ border: "1px solid #0f0" }}>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>pop()</td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>Remove last element</td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}><code>fruits.pop()</code></td>
              </tr>
              <tr style={{ border: "1px solid #0f0" }}>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>shift()</td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>Remove first element</td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}><code>fruits.shift()</code></td>
              </tr>
              <tr style={{ border: "1px solid #0f0" }}>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>unshift()</td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>Add element at beginning</td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}><code>fruits.unshift("kiwi")</code></td>
              </tr>
              <tr style={{ border: "1px solid #0f0" }}>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>indexOf()</td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>Find index of element</td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}><code>fruits.indexOf("mango")</code></td>
              </tr>
              <tr style={{ border: "1px solid #0f0" }}>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>includes()</td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>Check if array contains element</td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}><code>fruits.includes("apple")</code></td>
              </tr>
              <tr style={{ border: "1px solid #0f0" }}>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>slice()</td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>Return portion of array</td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}><code>fruits.slice(1,3)</code></td>
              </tr>
              <tr style={{ border: "1px solid #0f0" }}>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>splice()</td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>Add/remove elements at index</td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}><code>fruits.splice(1, 1, "orange")</code></td>
              </tr>
              <tr style={{ border: "1px solid #0f0" }}>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>map()</td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>Transform each element</td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}><code>numbers.map(n =&gt; n*2)</code></td>
              </tr>
              <tr style={{ border: "1px solid #0f0" }}>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>filter()</td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>Filter elements based on condition</td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}><code>numbers.filter(n =&gt; n&gt;2)</code></td>
              </tr>
              <tr style={{ border: "1px solid #0f0" }}>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>reduce()</td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>Reduce to a single value</td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}><code>numbers.reduce((a,b)=&gt;a+b,0)</code></td>
              </tr>
            </table>
          </p>
        </div>
      ),
      task: "Create or manipulate an array (e.g., let arr = [1, 2, 3]; or arr.push(4);).",
      check: (code) =>
        /(let|const|var)\s+\w+\s*=\s*\[.*\]|\w+\.(push|pop|shift|unshift|indexOf|includes|slice|splice|map|filter|reduce)\s*\(.+\)/.test(code),
      error: "❌ Try again. Create an array or use an array method like push, pop, shift, unshift, indexOf, includes, slice, splice, map, filter, or reduce.",
      success: "✅ Correct! You worked with an array.",
    },
    {
      title: "Objects",
      description: (
        <div>
          <h4>Objects in JavaScript</h4>
          <p>An object is a collection of key-value pairs. Each key is a string (or symbol), and values can be anything.</p>

          <p>
            <b>🔹 Creating Objects</b>
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`let person = {
  name: "Alex",
  age: 25,
  isStudent: true
};`}
            </pre>

            <b>🔹 Accessing Object Properties</b>
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`console.log(person.name);  // "Alex"
console.log(person["age"]); // 25`}
            </pre>

            <b>🔹 Modifying Objects</b>
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`person.age = 26;        // modify
person.city = "Delhi";  // add new property
delete person.isStudent; // delete property`}
            </pre>

            <b>🔹 Iterating Objects</b>
            <br />
            Using for...in
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`for (let key in person) {
  console.log(key, person[key]);
}
// Output:
// name Alex
// age 26
// city Delhi`}
            </pre>
            Using Object.keys / Object.values / Object.entries
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`console.log(Object.keys(person));   // ["name","age","city"]
console.log(Object.values(person)); // ["Alex",26,"Delhi"]
console.log(Object.entries(person));// [["name","Alex"],["age",26],["city","Delhi"]]`}
            </pre>
          </p>
        </div>
      ),
      task: "Create or manipulate an object (e.g., let obj = { key: 'value' }; or obj.key = 'newValue';).",
      check: (code) =>
        /(let|const|var)\s+\w+\s*=\s*{.*}|\w+\.\w+\s*=|\w+\[\s*['"].+['"]\s*\]\s*=|delete\s+\w+\.\w+/.test(code),
      error: "❌ Try again. Create an object, modify a property, or delete a property.",
      success: "✅ Correct! You worked with an object.",
    },
    {
      title: "Arrays of Objects",
      description: (
        <div>
          <h4>Arrays of Objects in JavaScript</h4>
          <p>Often you combine arrays and objects for complex data.</p>

          <p>
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`let students = [
  { name: "Alex", age: 25 },
  { name: "Ravi", age: 22 },
  { name: "Sita", age: 24 }
];

students.forEach(student => {
  console.log(\`\${student.name} is \${student.age} years old\`);
});`}
            </pre>

            <p>
              ✅ <b>Summary:</b>
              <br />
              Array → ordered collection of items, use indices, many built-in methods.
              <br />
              Object → unordered collection of key-value pairs, perfect for structured data.
              <br />
              Arrays of objects → used for lists of structured data (like database records).
              <br />
              <b>Tip:</b> Use arrays for lists. Use objects for descriptive data with properties.
            </p>
          </p>
        </div>
      ),
      task: "Create an array of objects (e.g., let arr = [{ key: 'value' }, { key: 'value2' }];).",
      check: (code) =>
        /(let|const|var)\s+\w+\s*=\s*\[\s*{.*},\s*{.*}\s*\]/.test(code),
      error: "❌ Try again. Create an array containing at least two objects.",
      success: "✅ Correct! You created an array of objects.",
    },
  ];

  const handlePrev = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
      setCode("");
      setMessage("");
    }
  };

  const handleNext = () => {
    if (currentLesson < lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
      setCode("");
      setMessage("");
    }
  };

  const checkCode = () => {
    if (lessons[currentLesson].check(code)) {
      setMessage(lessons[currentLesson].success);
      if (currentLesson < lessons.length - 1) {
        setTimeout(() => {
          setCurrentLesson(currentLesson + 1);
          setCode("");
          setMessage("");
        }, 1000);
      } else {
        // Last lesson completed, unlock Level 2 and show completion message
        localStorage.setItem("level1Completed", "true");
        setTimeout(() => {
          setCurrentLesson(currentLesson + 1); // Increment to lessons.length
          setCode("");
          setMessage("");
        }, 1000);
      }
    } else {
      setMessage(lessons[currentLesson].error);
    }
  };

  return (
    <div className="lesson-page">
      <h2 className="header">🚀 Level 1: JavaScript Basics</h2>

      {currentLesson < lessons.length ? (
        <div>
          <div className="nav-buttons">
            <button
              onClick={handlePrev}
              disabled={currentLesson === 0}
              className="btn"
            >
              ⬅ Previous
            </button>
           {/*<button
              onClick={handleNext}
              
              className="btn"
            >
              ⬅ Next
            </button>*/}
          </div>

          <h3>{lessons[currentLesson].title}</h3>
          <div className="lesson-description">{lessons[currentLesson].description}</div>
          <p className="task">
            <b>Task:</b> {lessons[currentLesson].task}
          </p>

          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="💻 Type your code here..."
            className="code-input"
            style={{
              width: "100%",
              height: "120px",
              background: "#111",
              color: "#0f0",
              fontFamily: "monospace",
              fontSize: "1rem",
              padding: "10px",
              borderRadius: "8px",
              marginTop: "1rem",
            }}
          />
          <div className="action-buttons">
            <button onClick={checkCode} className="btn">
              Check Code
            </button>
          </div>
          <p
            className={message.includes("❌") ? "error-message" : "success-message"}
          >
            {message}
          </p>
        </div>
      ) : (
        <div>
          <h2>🎉 Congrats! You completed Level 1</h2>
          <Link href="/level2" className="btn">
            Go to Level 2 ➡️
          </Link>
        </div>
      )}
    </div>
  );
}