"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Level7() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [level6Completed, setLevel6Completed] = useState(false);

  useEffect(() => {
    // Check subscription status
    setSubscribed(localStorage.getItem("subscribed") === "true");
    // Check Level 1 completion
    setLevel6Completed(localStorage.getItem("level1Completed") === "true");
  }, []);

  const lessons = [
    {
      title: "try...catch Blocks",
      description: (
        <div>
          <h4>🟢 What is try...catch?</h4>
          <p>
            In JavaScript, errors stop code execution if not handled. try...catch is used to handle errors gracefully without crashing your program.
          </p>
          <p><b>Basic Syntax:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`try {
  // Code that might throw an error
} catch (error) {
  // Handle the error
}`}
          </pre>
          <p><b>Example 1: Simple Error Handling</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`try {
  let result = 10 / x; // ❌ x is not defined
  console.log(result);
} catch (error) {
  console.log("Something went wrong!");
  console.log("Error message:", error.message);
}`}
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
            {`Something went wrong!
Error message: x is not defined`}
          </pre>
          <p><b>Example 2: finally Block</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`try {
  console.log("Start");
  let result = JSON.parse("{ bad json }"); // ❌ invalid JSON
} catch (error) {
  console.log("Error caught:", error.message);
} finally {
  console.log("This runs no matter what!");
}`}
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
Error caught: Unexpected token b in JSON at position 2
This runs no matter what!`}
          </pre>
          <p><b>Example 3: Throwing Custom Errors</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed!");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log("Custom Error:", error.message);
}`}
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
            {`Custom Error: Division by zero is not allowed!`}
          </pre>
          <p><b>Example 4: Nested try...catch</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`try {
  try {
    let num = Number("hello"); // NaN but no error
    if (isNaN(num)) throw new Error("Not a number!");
  } catch (innerError) {
    console.log("Inner Catch:", innerError.message);
  }

  console.log(10 / 2); // ✅ Works fine
} catch (outerError) {
  console.log("Outer Catch:", outerError.message);
}`}
          </pre>
          <p><b>Example 5: With Async Code</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`async function fetchData() {
  try {
    let response = await fetch("https://invalid-url.com"); // ❌ invalid
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Fetch failed:", error.message);
  }
}

fetchData();`}
          </pre>
          <p><b>Summary:</b></p>
          <ul>
            <li>try → put risky code here.</li>
            <li>catch → handles errors if they occur.</li>
            <li>finally → always runs, useful for cleanup.</li>
            <li>throw → create your own errors.</li>
            <li>Works beautifully with async/await for handling API errors.</li>
          </ul>
        </div>
      ),
      task: "Wrap a piece of code inside try...catch that throws an error and logs it.",
      check: (code) => code.includes("try") && code.includes("catch") && code.includes("throw"),
      error: "❌ Try again. Use try...catch to wrap code that throws an error and log it.",
      success: "✅ Correct! You used try...catch to handle an error."
    },
    {
      title: "Handle Errors Gracefully in Async Code",
      description: (
        <div>
          <h4>🟢 Problem with Async Errors</h4>
          <p>
            Errors in async code can break things if not handled properly.
          </p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`setTimeout(() => {
  throw new Error("Something went wrong!");
}, 1000);`}
          </pre>
          <p>This error cannot be caught with try...catch because it happens asynchronously.</p>
          <h4>🟢 Handling Errors with Callbacks</h4>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`function fetchData(callback) {
  setTimeout(() => {
    const error = true; // simulate error
    if (error) {
      callback("Failed to fetch data", null);
    } else {
      callback(null, { name: "Alice" });
    }
  }, 1000);
}

fetchData((err, data) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("Data:", data);
  }
});`}
          </pre>
          <p>Return errors as the first argument in the callback.</p>
          <h4>🟢 Handling Errors with Promises (.catch)</h4>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Server not responding"), 1000);
  });
}

fetchData()
  .then(data => console.log("Data:", data))
  .catch(err => console.error("Promise Error:", err));`}
          </pre>
          <h4>🟢 Handling Errors with async/await + try...catch</h4>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`async function getUser() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!response.ok) throw new Error("HTTP Error " + response.status);
    
    let user = await response.json();
    console.log("User:", user);
  } catch (error) {
    console.error("Async Error:", error.message);
  } finally {
    console.log("Request finished ✅");
  }
}

getUser();`}
          </pre>
          <h4>🟢 Graceful Error Handling Strategies</h4>
          <p><b>Fallback values:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`async function safeGetUser() {
  try {
    let res = await fetch("https://invalid-url.com");
    return await res.json();
  } catch {
    return { name: "Guest", role: "Visitor" }; // fallback
  }
}`}
          </pre>
          <p><b>Retry on failure:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      let res = await fetch(url);
      if (!res.ok) throw new Error("Bad response");
      return await res.json();
    } catch (err) {
      console.log(\`Retry \${i + 1} failed:\`, err.message);
    }
  }
  throw new Error("All retries failed!");
}`}
          </pre>
          <p><b>Centralized Error Handling:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`function handleError(fn) {
  return (...args) => fn(...args).catch(err => console.error("Caught:", err));
}

const safeFetch = handleError(async function() {
  let res = await fetch("https://wrong.url");
  let data = await res.json();
  console.log(data);
});

safeFetch();`}
          </pre>
          <p><b>Summary:</b></p>
          <ul>
            <li>try...catch works best with async/await.</li>
            <li>Use .catch() for Promises.</li>
            <li>With callbacks, always return errors as the first argument.</li>
            <li>Graceful strategies: fallback values, retries, centralized error handling.</li>
          </ul>
        </div>
      ),
      task: "Write an async function with try...catch that handles a rejected Promise.",
      check: (code) => code.includes("async") && code.includes("try") && code.includes("catch"),
      error: "❌ Try again. Define an async function with try...catch to handle a rejected Promise.",
      success: "✅ Correct! You handled an async error."
    },
    {
      title: "Debug Code Using Browser DevTools",
      description: (
        <div>
          <h4>🟢 Open DevTools</h4>
          <p>
            Chrome/Edge: F12 or Ctrl + Shift + I (Windows) / Cmd + Option + I (Mac). Go to the Console and Sources tabs.
          </p>
          <h4>🟢 Use the Console</h4>
          <p>
            The console helps inspect variables, errors, and log messages.
          </p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`let a = 5;
let b = 10;
console.log("Sum is:", a + b); // Debug log
console.warn("Warning message"); // Yellow warning
console.error("Error message"); // Red error`}
          </pre>
          <p><b>Tips:</b></p>
          <ul>
            <li>Type variables in the Console to see their value.</li>
            <li>Use <code>console.table(data)</code> for arrays/objects.</li>
            <li>Use <code>console.group()</code> / <code>console.groupEnd()</code> for structured logs.</li>
          </ul>
          <h4>🟢 Set Breakpoints</h4>
          <p>
            Breakpoints stop code at specific lines for stepping through execution.
          </p>
          <p>In Sources tab, click line number → adds breakpoint. Reload page → pauses.</p>
          <p><b>Then:</b></p>
          <ul>
            <li>Hover variables to see values.</li>
            <li>Inspect scope (local, closure, global).</li>
            <li>Use buttons: Continue (▶️), Step Over (⏭), Step Into (⬇️), Step Out (⬆️).</li>
          </ul>
          <h4>🟢 Conditional Breakpoints</h4>
          <p>Right-click a line → Add Conditional Breakpoint (e.g., pause if <code>count Greater Then 10</code>).</p>
          <h4>🟢 Debugging Events</h4>
          <p>
            In Sources  Event Listener Breakpoints, check "click" to pause on click events.
          </p>
          <h4>🟢 Watch Expressions</h4>
          <p>
            In Watch panel, add variables like <code>user.name</code> or expressions like <code>arr.length Greater Then 5</code>.
          </p>
          <h4>🟢 Debugging Async Code</h4>
          <p>
            Check "Async" in Call Stack to see async stack traces. Use <code>debugger;</code> keyword to pause.
          </p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`function calc(x) {
  debugger; // Pauses here
  return x * 2;
}

console.log(calc(5));`}
          </pre>
          <h4>🟢 Network & API Debugging</h4>
          <p>
            In Network Tab, see requests, responses, headers, and status codes for fetch/Axios calls.
          </p>
          <h4>🟢 Performance Debugging</h4>
          <p>
            Performance Tab: Record page load, CPU, memory. Memory Tab: Track leaks.
          </p>
          <h4>🟢 Real-World Debug Workflow</h4>
          <ul>
            <li>Check console logs/errors.</li>
            <li>Add <code>console.log()</code> to track values.</li>
            <li>Set breakpoints in Sources.</li>
            <li>Step through code.</li>
            <li>Inspect API calls in Network.</li>
            <li>Use conditional breakpoints for loops/events.</li>
          </ul>
          <p><b>Example Debug Session:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`document.querySelector("#btn").addEventListener("click", () => {
  let num = parseInt(document.querySelector("#input").value);
  console.log("User entered:", num);
  debugger; // stop here to inspect num
  alert(num * 2);
});`}
          </pre>
        </div>
      ),
      task: "Write code that logs variables and explain how you’d debug with DevTools.",
      check: (code) => code.includes("console.log"),
      error: "❌ Try again. Write code with console.log to log variables for debugging.",
      success: "✅ Correct! You used console.log for debugging."
    },
    {
      title: "Understand Common JavaScript Errors",
      description: (
        <div>
          <h4>🟢 Common JavaScript Errors</h4>
          <p><b>SyntaxError:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`// ❌ Missing closing parenthesis
console.log("Hello World";`}
          </pre>
          <p><b>Fix:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`console.log("Hello World");`}
          </pre>
          <p>Common causes: Missing ) or , wrong quotes, reserved keywords as variables.</p>
          <p><b>ReferenceError:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`console.log(username); // ❌ username is not defined`}
          </pre>
          <p><b>Fix:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`let username = "Alice";
console.log(username);`}
          </pre>
          <p>Common causes: Typos, accessing before declaration, wrong scope.</p>
          <p><b>TypeError:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`let num = 42;
num.toUpperCase(); // ❌ numbers don’t have toUpperCase()`}
          </pre>
          <p><b>Fix:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`let str = "hello";
console.log(str.toUpperCase()); // "HELLO"`}
          </pre>
          <p>Common causes: Methods on wrong types, functions on undefined.</p>
          <p><b>RangeError:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`let arr = new Array(-5); // ❌ Array length can’t be negative`}
          </pre>
          <p><b>Fix:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`let arr = new Array(5);`}
          </pre>
          <p>Other example: <code>(123.456).toFixed(100);</code> // ❌ too many decimals.</p>
          <p><b>EvalError (rare):</b> Incorrect use of eval(). Avoid eval in modern JS.</p>
          <p><b>URIError:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`decodeURIComponent("%"); // ❌ invalid URI escape sequence`}
          </pre>
          <p><b>Fix:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`decodeURIComponent("%20"); // space`}
          </pre>
          <p><b>InternalError (browser-specific):</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`function recurse() {
  recurse();
}
recurse(); // ❌ "Maximum call stack size exceeded"`}
          </pre>
          <p><b>Fix:</b> Add base cases in recursion.</p>
          <h4>🟢 How to Handle These Errors</h4>
          <p><b>Use try...catch:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`try {
  let num = 10;
  num.toUpperCase();
} catch (error) {
  console.error("Caught an error:", error.message);
}`}
          </pre>
          <p><b>Use typeof / ?. (optional chaining):</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`let user = null;
console.log(user?.name); // undefined, no error`}
          </pre>
          <p><b>Debug in DevTools:</b> Check console logs, breakpoints, call stack.</p>
          <p><b>Summary:</b></p>
          <ul>
            <li>SyntaxError → Code written incorrectly.</li>
            <li>ReferenceError → Variable doesn’t exist.</li>
            <li>TypeError → Wrong type of value used.</li>
            <li>RangeError → Value out of range.</li>
            <li>URIError → Invalid encoding in URI functions.</li>
            <li>InternalError → Usually recursion / engine limit.</li>
          </ul>
        </div>
      ),
      task: "Write code that triggers a TypeError and explain how to fix it.",
      check: (code) => code.includes("null") || code.includes("undefined"),
      error: "❌ Try again. Write code that triggers a TypeError (e.g., null.toString()).",
      success: "✅ Correct! You demonstrated a TypeError."
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
        localStorage.setItem("level7Completed", "true");
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
      <div className="lesson-page">
        <h2 className="header">🚀 Level 2: Deep Dive into Functions</h2>
        <div>
          <h3>Subscription Required</h3>
          <p>
            To access Level 2, you need a SuperGrok subscription. Please subscribe to continue learning.
          </p>
          <Link href="/subscribe" className="btn">
            Subscribe Now
          </Link>
        </div>
      </div>
    );
  }



  return (
    <div className="lesson-page" style={{ padding: "2rem", color: "white" }}>
      <h2 className="header">🐞 Level 7: Error Handling & Debugging</h2>

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
          <h2>🎉 Congrats! You completed Level 7</h2>
          <Link href="/level8" className="btn" >
            Go to Level 8 ➡️
          </Link>
        </div>
      )}
    </div>
  );
}


