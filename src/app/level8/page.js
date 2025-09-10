"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function level8() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [level7Completed, setLevel7Completed] = useState(false);

  useEffect(() => {
    // Check subscription status
    setSubscribed(localStorage.getItem("subscribed") === "true");
    // Check Level 1 completion
    setLevel7Completed(localStorage.getItem("level1Completed") === "true");
  }, []);

  const lessons = [
    {
      title: "The Event Loop",
      description: (
        <div>
          <h4>⚙️ JavaScript is Single-Threaded</h4>
          <p>
            JS runs on one main thread (in the browser or Node.js). That thread executes code line by line inside the Call Stack. But JS can still handle async tasks (setTimeout, fetch, events) thanks to the Event Loop.
          </p>
          <h4>📦 Main Components</h4>
          <p><b>Call Stack:</b> Place where functions get executed. Works on LIFO (Last In, First Out).</p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`function greet() {
  console.log("Hello");
}
greet();`}
          </pre>
          <p><b>Web APIs / Background:</b> Provided by the browser or Node.js (setTimeout, fetch, DOM events). Handled outside the main thread.</p>
          <p><b>Callback Queue / Task Queue:</b> Stores callbacks waiting to run.</p>
          <p><b>Microtask Queue:</b> Stores Promises (.then, .catch) and MutationObserver callbacks. Runs before Task Queue.</p>
          <p><b>Event Loop:</b> Checks if Call Stack is empty, then pushes from Microtask Queue first, then Task Queue.</p>
          <p><b>Example Execution Flow:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");`}
          </pre>
          <p><b>Output:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`Start
End
Promise
Timeout`}
          </pre>
          <p><b>Why?</b> Start and End run first. Promise in Microtask Queue runs before setTimeout in Task Queue.</p>
          <p><b>Real-World Analogy:</b> Call Stack = Chef cooking orders. Web APIs = Assistants handling timers. Callback Queue = Completed tasks. Event Loop = Manager directing the chef.</p>
          <p><b>Key Points:</b> Explains async behavior in single-threaded JS. Helps debug timing issues.</p>
        </div>
      ),
      task: "Write code that demonstrates the event loop with setTimeout and Promise.",
      check: (code) => code.includes("setTimeout") && code.includes("Promise"),
      error: "❌ Try again. Use setTimeout and Promise to show event loop order.",
      success: "✅ Correct! You demonstrated the event loop."
    },
    {
      title: "Closures, Currying, and Memoization",
      description: (
        <div>
          <h4>🟢 Closures</h4>
          <p>
            A closure happens when a function “remembers” variables from its outer scope, even after the outer function finishes.
          </p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3`}
          </pre>
          <p><b>Use Cases:</b> Data privacy, event handlers, state tracking (counters, caching).</p>
          <h4>🟢 Currying</h4>
          <p>
            Currying transforms a multi-argument function into a series of single-argument functions.
          </p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`function curryAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(curryAdd(1)(2)(3)); // 6`}
          </pre>
          <p><b>ES6 Syntax:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`const curryAddES6 = a => b => c => a + b + c;
console.log(curryAddES6(1)(2)(3)); // 6`}
          </pre>
          <p><b>Use Cases:</b> Reusable functions with partial application, functional programming.</p>
          <h4>🟢 Memoization</h4>
          <p>
            Memoization caches results of expensive function calls to avoid recalculating for the same inputs.
          </p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`function slowSquare(n) {
  console.log("Calculating...");
  return n * n;
}

function memoize(fn) {
  const cache = {};
  return function(n) {
    if (cache[n] !== undefined) {
      console.log("Fetching from cache...");
      return cache[n];
    }
    cache[n] = fn(n);
    return cache[n];
  };
}

const fastSquare = memoize(slowSquare);

fastSquare(5); // Calculating... → 25
fastSquare(5); // Fetching from cache... → 25
fastSquare(6); // Calculating... → 36`}
          </pre>
          <p><b>Use Cases:</b> Optimizing calculations (factorial, Fibonacci), avoiding repeated API calls, performance in React.</p>
          <p><b>Summary:</b> Closures for remembering scope, Currying for single-arg chains, Memoization for caching results.</p>
        </div>
      ),
      task: "Write a closure or curried function with memoization.",
      check: (code) => code.includes("function") && code.includes("return function") && code.includes("cache"),
      error: "❌ Try again. Implement a closure, currying, or memoization example.",
      success: "✅ Correct! You used closures, currying, or memoization."
    },
    {
      title: "Functional Programming Concepts in JS",
      description: (
        <div>
          <h4>🟢 First-Class Functions</h4>
          <p>
            Functions are values — stored, passed, or returned.
          </p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`const greet = () => console.log("Hello!");

function run(fn) {
  fn();
}

run(greet); // Hello!`}
          </pre>
          <h4>🟢 Higher-Order Functions (HOFs)</h4>
          <p>
            Functions that take or return functions.
          </p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log); // 0 1 2`}
          </pre>
          <p>Built-in HOFs: .map(), .filter(), .reduce().</p>
          <h4>🟢 Pure Functions</h4>
          <p>
            Same input = same output, no side effects.
          </p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`// Pure
function add(a, b) {
  return a + b;
}

// Impure
let count = 0;
function increment() {
  count++;
  return count;
}`}
          </pre>
          <h4>🟢 Immutability</h4>
          <p>
            Don't change data; return new copies.
          </p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`const arr = [1, 2, 3];

// Immutable
const newArr = [...arr, 4];
console.log(newArr); // [1, 2, 3, 4]`}
          </pre>
          <h4>🟢 Function Composition</h4>
          <p>
            Combine small functions.
          </p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`const double = x => x * 2;
const square = x => x * x;

const doubleThenSquare = x => square(double(x));
console.log(doubleThenSquare(3)); // 36`}
          </pre>
          <h4>🟢 Declarative vs Imperative</h4>
          <p>
            Declarative: What to do. Imperative: How to do it.
          </p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`// Imperative
let doubled = [];
for (let i = 0; i < [1, 2, 3].length; i++) {
  doubled.push([1, 2, 3][i] * 2);
}

// Declarative
const doubled2 = [1, 2, 3].map(x => x * 2);`}
          </pre>
          <h4>🟢 Recursion</h4>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120`}
          </pre>
          <h4>🟢 Currying & Partial Application</h4>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`const add = a => b => a + b;
const add5 = add(5);
console.log(add5(10)); // 15`}
          </pre>
          <h4>🟢 Lazy Evaluation</h4>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`function* lazyRange(limit) {
  let i = 0;
  while (i < limit) {
    yield i++;
  }
}

for (let num of lazyRange(3)) {
  console.log(num); // 0, 1, 2
}`}
          </pre>
          <h4>🟢 Side-Effect Management</h4>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`// Pure logic
function calculatePrice(price, tax) {
  return price + price * tax;
}

// Side effect isolated
function printResult() {
  console.log(calculatePrice(100, 0.2));
}`}
          </pre>
          <p><b>Summary:</b> First-Class Functions, HOFs, Pure Functions, Immutability, Composition, Declarative style, Recursion, Currying, Lazy Evaluation, Side-effect management.</p>
        </div>
      ),
      task: "Write a pure function or higher-order function example.",
      check: (code) => code.includes("function") && code.includes("return"),
      error: "❌ Try again. Write a pure or higher-order function.",
      success: "✅ Correct! You used a functional programming concept."
    },
    {
      title: "Proxy, Reflect, and Typed Arrays",
      description: (
        <div>
          <h4>🟢 Proxy</h4>
          <p>
            A Proxy intercepts and customizes operations on objects (e.g., get, set).
          </p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`const user = { name: "Alice", age: 25 };

const proxyUser = new Proxy(user, {
  get(target, prop) {
    console.log(\`Getting \${prop}\`);
    return target[prop];
  },
  set(target, prop, value) {
    console.log(\`Setting \${prop} = \${value}\`);
    target[prop] = value;
    return true;
  }
});

console.log(proxyUser.name); // Getting name → "Alice"
proxyUser.age = 30; // Setting age = 30`}
          </pre>
          <p><b>Use Cases:</b> Data validation, logging, auto-updating UIs (e.g., Vue.js).</p>
          <h4>🟢 Reflect</h4>
          <p>
            Reflect provides standardized methods for object operations, often used with Proxy.
          </p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`const person = { name: "Bob", age: 20 };

const proxy = new Proxy(person, {
  get(target, prop) {
    console.log(\`Accessing \${prop}\`);
    return Reflect.get(target, prop);
  },
  set(target, prop, value) {
    if (prop === "age" && value < 0) {
      throw new Error("Age cannot be negative!");
    }
    return Reflect.set(target, prop, value);
  }
});

console.log(proxy.name); // Accessing name → "Bob"
proxy.age = 25; // works
// proxy.age = -5; // Error`}
          </pre>
          <p><b>Why use Reflect?</b> Standardized operations, avoids errors with direct access.</p>
          <h4>🟢 Typed Arrays</h4>
          <p>
            Typed Arrays handle binary data efficiently (e.g., Int8Array, Float32Array).
          </p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);

view[0] = 42;
view[1] = 100;

console.log(view); // Int32Array(2) [42, 100]`}
          </pre>
          <p><b>Difference from normal arrays:</b> Fixed size, one data type, faster for numeric ops.</p>
          <p><b>Use Cases:</b> Image processing, WebGL, files/streams.</p>
          <p><b>Summary:</b> Proxy for intercepting object behavior, Reflect for standardized manipulation, Typed Arrays for binary/numeric data.</p>
        </div>
      ),
      task: "Create a Proxy for an object or a Typed Array example.",
      check: (code) => code.includes("new Proxy") || code.includes("new ArrayBuffer"),
      error: "❌ Try again. Use new Proxy or new ArrayBuffer for a Typed Array.",
      success: "✅ Correct! You used Proxy, Reflect, or Typed Arrays."
    }
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
        // Last lesson completed, unlock Level 3 and show completion message
        localStorage.setItem("level8Completed", "true");
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

  // Remove the useEffect that sets level1Completed, as it's not needed for Level 2
  // The completion is handled in checkCode

  if (!subscribed) {
    return (
      <div className="lesson-page">
        <h2 className="header">🚀 Level 2: Deep Dive into Functions</h2>
        <div>
          <h3>Subscription Required</h3>
          <p>
            To access Level 2, you need a SuperGrok subscription. Please subscribe to continue learning.
          </p>
          <Link href="/subcribe" className="btn">
            Subscribe Now
          </Link>
        </div>
      </div>
    );
  }




  return (
    <div className="lesson-page" style={{ padding: "2rem", color: "white" }}>
      <h2 className="header">📘 Level 8: Advanced JavaScript Concepts</h2>

      {currentLesson < lessons.length ? (
        <div>
          {/* Navigation Buttons */}
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
              disabled={currentLesson === lessons.length - 1}
              className="btn"
              
            >
              Next ➡
            </button>*/}
          </div>

          {/* Lesson Content */}
          <h3>{lessons[currentLesson].title}</h3>
          <div className="lesson-description">{lessons[currentLesson].description}</div>
          <p className="task">
            <b>Task:</b> {lessons[currentLesson].task}
          </p>

          {/* Code Input Area */}
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
          <h2>🎉 Congrats! You completed Level 8</h2>
          <Link href="/certificate" className="btn" >
            Get the Certificate ➡️
          </Link>
        </div>
      )}
    </div>
  );
}


