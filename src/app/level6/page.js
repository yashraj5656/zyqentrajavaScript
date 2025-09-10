"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Level6() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [level5Completed, setLevel5Completed] = useState(false);

  useEffect(() => {
    // Check subscription status
    setSubscribed(localStorage.getItem("subscribed") === "true");
    // Check Level 5 completion
    setLevel5Completed(localStorage.getItem("level5Completed") === "true");
  }, []);

  const lessons = [
    {
      title: "Destructuring, Spread & Rest Operators",
      description: (
        <div>
          <h4>🟢 Destructuring</h4>
          <p>
            Destructuring lets you unpack values from arrays or objects into variables easily.
          </p>
          <p><b>Array Destructuring:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`const colors = ["red", "green", "blue"];

const [first, second, third] = colors;
console.log(first);  // red
console.log(second); // green
console.log(third);  // blue`}
          </pre>
          <p>Skip elements:</p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`const [first,, third] = colors;
console.log(first); // red
console.log(third); // blue`}
          </pre>
          <p>Default values:</p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`const [x = "default", y = "default"] = ["hello"];
console.log(x); // hello
console.log(y); // default`}
          </pre>
          <p><b>Object Destructuring:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`const person = { name: "Alice", age: 25, city: "Delhi" };

const { name, age } = person;
console.log(name); // Alice
console.log(age);  // 25`}
          </pre>
          <p>Rename variables:</p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`const { name: fullName, city: location } = person;
console.log(fullName); // Alice
console.log(location); // Delhi`}
          </pre>
          <p>Default values:</p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`const { country = "India" } = person;
console.log(country); // India`}
          </pre>
          <h4>🟢 Spread Operator (...)</h4>
          <p>
            The spread operator expands an array, object, or string into individual elements.
          </p>
          <p><b>Spread in Arrays:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

const combined = [...nums1, ...nums2];
console.log(combined); // [1, 2, 3, 4, 5, 6]`}
          </pre>
          <p>Copy arrays:</p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`const copy = [...nums1];
console.log(copy); // [1, 2, 3]`}
          </pre>
          <p><b>Spread in Objects:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }`}
          </pre>
          <p>Overriding values:</p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`const user = { name: "Alice", age: 25 };
const updated = { ...user, age: 26 };
console.log(updated); // { name: "Alice", age: 26 }`}
          </pre>
          <h4>🟢 Rest Operator (...)</h4>
          <p>
            The rest operator collects multiple values into a single array or object (opposite of spread).
          </p>
          <p><b>Rest in Arrays:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [20, 30, 40]`}
          </pre>
          <p><b>Rest in Functions:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10`}
          </pre>
          <p><b>Summary:</b></p>
          <ul>
            <li>Destructuring → Extract values from arrays/objects.</li>
            <li>Spread (...) → Expands arrays/objects.</li>
            <li>Rest (...) → Collects multiple elements into one.</li>
            <li>Spread breaks things apart; rest groups things together.</li>
          </ul>
        </div>
      ),
      task: "Create an object and use destructuring to extract its properties.",
      check: (code) => code.includes("{") && code.includes("}") && code.includes("="),
      error: "❌ Try again. Use destructuring to extract properties from an object (e.g., { name } = obj).",
      success: "✅ Correct! You used destructuring, spread, or rest."
    },
    {
      title: "Template Literals & Default Parameters",
      description: (
        <div>
          <h4>🟢 Template Literals</h4>
          <p>
            Template literals use backticks (<code>`</code>) for multiline strings and embedded expressions.
          </p>
          <p><b>Basic Usage:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`const name = "Alice";
const greeting = \`Hello, \${name}!\`;
console.log(greeting); // Hello, Alice!`}
          </pre>
          <p><b>Multi-line Strings:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`const poem = \`Roses are red,
Violets are blue,
JavaScript is fun,
And so are you.\`;

console.log(poem);`}
          </pre>
          <p><b>Expressions Inside:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`const a = 10, b = 20;
console.log(\`The sum of \${a} and \${b} is \${a + b}.\`); // The sum of 10 and 20 is 30.`}
          </pre>
          <p><b>Tagged Templates (Advanced):</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => 
    result + str + (values[i] ? values[i].toUpperCase() : ""), "");
}

const user = "alice";
const age = 25;

console.log(highlight\`Name: \${user}, Age: \${age}\`); // Name: ALICE, Age: 25`}
          </pre>
          <h4>🟢 Default Parameters</h4>
          <p>
            Default parameters assign fallback values to function arguments if not provided.
          </p>
          <p><b>Simple Default:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`function greet(name = "Guest") {
  return \`Hello, \${name}!\`;
}

console.log(greet("Alice")); // Hello, Alice!
console.log(greet()); // Hello, Guest!`}
          </pre>
          <p><b>Multiple Defaults:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`function calculateArea(width = 10, height = 5) {
  return width * height;
}

console.log(calculateArea(20, 30)); // 600
console.log(calculateArea(15)); // 75`}
          </pre>
          <p><b>Default with Expressions:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`function makeId(name, id = name.length) {
  return \`\${name}-\${id}\`;
}

console.log(makeId("Alice")); // Alice-5`}
          </pre>
          <p><b>Summary:</b></p>
          <ul>
            <li>Template Literals → Use backticks for interpolation, multi-line, and expressions.</li>
            <li>Default Parameters → Fallback values for missing arguments.</li>
          </ul>
        </div>
      ),
      task: "Write a function with a default parameter and call it without arguments.",
      check: (code) => code.includes("=") && code.includes("function") && code.includes("()"),
      error: "❌ Try again. Define a function with a default parameter and call it without arguments.",
      success: "✅ Correct! You used template literals and default parameters."
    },
    {
      title: "Modules (import/export)",
      description: (
        <div>
          <h4>🟢 Modules (import/export)</h4>
          <p>
            Modules split code into multiple files for better organization. Use <code>export</code> to share code and <code>import</code> to use it.
          </p>
          <p><b>Named Export:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`// mathUtils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;`}
          </pre>
          <p><b>Import Named Exports:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`// main.js
import { add, subtract } from "./mathUtils.js";

console.log(add(5, 3)); // 8`}
          </pre>
          <p><b>Import All:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`import * as math from "./mathUtils.js";
console.log(math.add(5, 3)); // 8`}
          </pre>
          <p><b>Default Export:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`// greeting.js
export default function greet(name) {
  return \`Hello, \${name}!\`;
}`}
          </pre>
          <p><b>Import Default Export:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`import greet from "./greeting.js";
console.log(greet("Alice")); // Hello, Alice!`}
          </pre>
          <p><b>Mixing Default + Named:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`// user.js
export default function sayHello(name) {
  return \`Hi, \${name}\`;
}
export const age = 25;

// main.js
import sayHello, { age } from "./user.js";
console.log(sayHello("Bob")); // Hi, Bob
console.log(age); // 25`}
          </pre>
          <p><b>Key Points:</b></p>
          <ul>
            <li>Modules prevent global scope pollution.</li>
            <li>Use <code>type="module"</code> in HTML scripts.</li>
            <li>In Node.js, use .mjs or "type": "module" in package.json.</li>
          </ul>
        </div>
      ),
      task: "Write a small module that exports a function and import it in another file.",
      check: (code) => code.includes("export") && code.includes("import"),
      error: "❌ Try again. Use export to define a function and import to use it.",
      success: "✅ Correct! You used ES6 modules."
    },
    {
      title: "Map, Set, and Symbol",
      description: (
        <div>
          <h4>🟢 Map</h4>
          <p>
            A <code>Map</code> is a collection of key-value pairs where keys can be any type (unlike objects, which use strings or symbols).
          </p>
          <p><b>Creating a Map:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`const myMap = new Map();

myMap.set("name", "Alice");
myMap.set(42, "Answer to life");
myMap.set({ id: 1 }, "Object Key");

console.log(myMap.get("name")); // Alice
console.log(myMap.get(42)); // Answer to life
console.log(myMap.has("name")); // true
console.log(myMap.size); // 3`}
          </pre>
          <p><b>Iterating Over a Map:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

for (let [key, value] of map) {
  console.log(\`\${key} = \${value}\`);
}
// a = 1
// b = 2
// c = 3`}
          </pre>
          <p><b>Difference from Object:</b></p>
          <ul>
            <li>Map keys can be any type; object keys are strings or symbols.</li>
            <li>Map has built-in methods like <code>set</code>, <code>get</code>, <code>has</code>.</li>
          </ul>
          <h4>🟢 Set</h4>
          <p>
            A <code>Set</code> is a collection of unique values, with no duplicates allowed.
          </p>
          <p><b>Creating a Set:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2); // ignored (duplicate)
mySet.add("Hello");

console.log(mySet); // Set { 1, 2, 'Hello' }
console.log(mySet.has(2)); // true
console.log(mySet.size); // 3`}
          </pre>
          <p><b>Converting Between Array and Set:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`const nums = [1, 2, 2, 3, 4, 4];
const uniqueNums = [...new Set(nums)];
console.log(uniqueNums); // [1, 2, 3, 4]`}
          </pre>
          <p><b>Iterating Over a Set:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`const letters = new Set(["a", "b", "c"]);

for (let letter of letters) {
  console.log(letter);
}
// a
// b
// c`}
          </pre>
          <h4>🟢 Symbol</h4>
          <p>
            A <code>Symbol</code> is a unique, immutable primitive used as unique object property keys to prevent conflicts.
          </p>
          <p><b>Creating a Symbol:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`const sym1 = Symbol("id");
const sym2 = Symbol("id");

console.log(sym1 === sym2); // false (each symbol is unique)`}
          </pre>
          <p><b>Using Symbols as Object Keys:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`const user = {
  name: "Alice",
  age: 25,
};

const secretId = Symbol("id");
user[secretId] = 12345;

console.log(user[secretId]); // 12345
console.log(Object.keys(user)); // ['name', 'age'] (Symbol is hidden)`}
          </pre>
          <p><b>Hidden Properties:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`for (let key in user) {
  console.log(key); // name, age (Symbol not shown!)
}

console.log(Object.getOwnPropertySymbols(user)); // [Symbol(id)]`}
          </pre>
          <p><b>Summary:</b></p>
          <ul>
            <li><code>Map</code> → Stores key-value pairs with any key type.</li>
            <li><code>Set</code> → Stores unique values, no duplicates.</li>
            <li><code>Symbol</code> → Unique identifiers for object properties.</li>
          </ul>
        </div>
      ),
      task: "Create a Set with unique values and a Symbol for a property.",
      check: (code) => code.includes("new Set") && code.includes("Symbol("),
      error: "❌ Try again. Use new Set and Symbol for an object property.",
      success: "✅ Correct! You used Map, Set, and Symbol."
    }
  ];



  const handleNext = () => {
    if (currentLesson < lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
      setCode("");
      setMessage("");
    }
  };

  const handlePrev = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
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
        // Last lesson completed, unlock next level and show completion message
        localStorage.setItem("level6Completed", "true");
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

  if (!subscribed) {
    return (
      <div className="lesson-page" style={{ padding: "2rem", color: "white" }}>
        <h2 className="header">📘 Level 6: Advanced JavaScript Concepts</h2>
        <div>
          <h3>Subscription Required</h3>
          <p>
            To access Level 6, you need a SuperGrok subscription. Please subscribe to continue learning.
          </p>
          <Link href="/subscribe" className="btn" >
            Subscribe Now
          </Link>
        </div>
      </div>
    );
  }

  if (!level5Completed) {
    return (
      <div className="lesson-page" style={{ padding: "2rem", color: "white" }}>
        <h2 className="header">📘 Level 6: Advanced JavaScript Concepts</h2>
        <div>
          <h3>Complete Level 5 First</h3>
          <p>
            You need to complete Level 5 before accessing Level 6. Go back and finish the Learn Object-Oriented Programming lessons!
          </p>
          <Link href="/level5" className="btn" >
            Go to Level 5
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page" style={{ padding: "2rem", color: "white" }}>
      <h2 className="header">📘 Level 6: Advanced JavaScript Concepts</h2>

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
              onClick={() => {
                if (currentLesson < lessons.length - 1) {
                  setCurrentLesson(currentLesson + 1);
                  setCode("");
                  setMessage("");
                }
              }}
              disabled={currentLesson === lessons.length - 1}
              className="btn"
              
            >
              Next ➡
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
            <button onClick={checkCode} className="btn" >
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
          <h2>🎉 Congrats! You completed Level 6</h2>
          <Link href="/level7" className="btn" >
            Back to Level 7 ➡️
          </Link>
        </div>
      )}
    </div>
  );
}

