"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Level2() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [level1Completed, setLevel1Completed] = useState(false);

  useEffect(() => {
    // Check subscription status
    setSubscribed(localStorage.getItem("subscribed") === "true");
    // Check Level 1 completion
    setLevel1Completed(localStorage.getItem("level1Completed") === "true");
  }, []);
  const lessons = [
    {
      title: "Arrow Functions & Function Expressions",
      description: (
        <div>
          <h4>Arrow Functions & Function Expressions</h4>
          <p>
            Functions can be written as expressions or arrow functions for
            shorter syntax.
          </p>

          <p>
            <b>🔹 Function Expressions</b>
            <br />
            A Function Expression is when you define a function inside an
            expression and assign it to a variable.
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`const greet = function(name) {
  return "Hello, " + name + "!";
};`}
            </pre>
            Key Points:
            <ul>
              <li>
                <b>Anonymous or Named</b>
              </li>
              <li>
                Anonymous:
                <pre
                  style={{
                    background: "#222",
                    color: "#0f0",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                >
                  {`const greet = function(name) {
  return "Hello, " + name + "!";
};`}
                </pre>
                (most common).
              </li>
              <li>
                Named:
                <pre
                  style={{
                    background: "#222",
                    color: "#0f0",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                >
                  {`const greet = function greetFunc(name) {
  return "Hello, " + name + "!";
};`}
                </pre>
              </li>
              <li>
                <b>Not Hoisted</b>
              </li>
              <li>
                Unlike function declarations, function expressions are not
                hoisted.
              </li>
              <li>You cannot call them before defining.</li>
            </ul>
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`sayHi(); // ❌ Error
const sayHi = function() {
  console.log("Hi!");
};`}
            </pre>
            <b>Use Cases</b>
            <br />
            When you want to assign a function to a variable, pass it as an
            argument, or return it from another function (common in functional
            programming).
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`const numbers = [1, 2, 3];
const squares = numbers.map(function(num) {
  return num * num;
});
console.log(squares); // [1, 4, 9]`}
            </pre>
          </p>

          <p>
            <b>🔹 Arrow Functions</b>
            <br />
            Arrow Functions (introduced in ES6) are a shorter way to write
            functions.
            <br />
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`const greet = (name) => {
  return "Hello, " + name + "!";
};`}
            </pre>
            Shorter Variations:
            <ul>
              <li>
                One parameter, one line → parentheses + return can be skipped:
              </li>
              <pre
                style={{
                  background: "#222",
                  color: "#0f0",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              >
                {`const greet = name => "Hello, " + name + "!";
console.log(greet("Alex")); // Hello, Alex!`}
              </pre>
              <li>Multiple parameters → need parentheses:</li>
              <pre
                style={{
                  background: "#222",
                  color: "#0f0",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              >
                {`const add = (a, b) => a + b;
console.log(add(5, 3)); // 8`}
              </pre>
              <li>No parameters → must use empty parentheses:</li>
              <pre
                style={{
                  background: "#222",
                  color: "#0f0",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              >
                {`const sayHi = () => "Hi there!";`}
              </pre>
            </ul>
          </p>

          <p>
            <b>🔹 Differences Between Function Expressions & Arrow Functions</b>
            <br />
            <table
              style={{ border: "1px solid #0f0", borderCollapse: "collapse" }}
            >
              <tr style={{ border: "1px solid #0f0" }}>
                <th style={{ border: "1px solid #0f0", padding: "5px" }}>
                  Feature
                </th>
                <th style={{ border: "1px solid #0f0", padding: "5px" }}>
                  Function Expression
                </th>
                <th style={{ border: "1px solid #0f0", padding: "5px" }}>
                  Arrow Function
                </th>
              </tr>
              <tr style={{ border: "1px solid #0f0" }}>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>
                  Syntax
                </td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>
                  Longer
                </td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>
                  Short & concise
                </td>
              </tr>
              <tr style={{ border: "1px solid #0f0" }}>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>
                  <code>this</code> binding
                </td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>
                  Has its own <code>this</code> (depends on how it’s called)
                </td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>
                  Does not bind <code>this</code> (inherits from outer scope)
                </td>
              </tr>
              <tr style={{ border: "1px solid #0f0" }}>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>
                  <code>arguments</code> object
                </td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>
                  Available
                </td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>
                  ❌ Not available
                </td>
              </tr>
              <tr style={{ border: "1px solid #0f0" }}>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>
                  Hoisting
                </td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>
                  Not hoisted
                </td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>
                  Not hoisted
                </td>
              </tr>
              <tr style={{ border: "1px solid #0f0" }}>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>
                  Best Use
                </td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>
                  When you need dynamic <code>this</code> or <code>arguments</code>
                </td>
                <td style={{ border: "1px solid #0f0", padding: "5px" }}>
                  For callbacks, concise functions
                </td>
              </tr>
            </table>
          </p>

          {/* ... the rest of your lessons remain unchanged, just keep fixing <pre> blocks the same way ... */}
        </div>
      ),
      task: "Write an arrow function (e.g., const add = (a,b) => a+b;).",
      check: (code) =>
        /const\s+\w+\s*=\s*\(.*\)\s*=>/.test(code) ||
        /function\s*\(.*\)\s*\{.*\}/.test(code),
      error: "❌ Try again. Use an arrow function or function expression.",
      success: "✅ Great! You wrote a function expression.",
    },
    // ⬆️ Keep your next lessons ("Callback Functions", "Closures & Call Stack", etc.)
    // unchanged except for fixing {{ }} inside <pre> blocks
  ];

  // ----------------
  // Component Logic
  // ----------------
 


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
        // Last lesson completed, unlock Level 3 and show completion message
        localStorage.setItem("level2Completed", "true");
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
        <h2 className="header"> Level 2: Deep Dive into Functions</h2>
        <div>
          <h3>Subscription Required</h3>
          <p>
            To access Level 2, you need a subscription. Please subscribe to continue learning.
          </p><div><br></br></div>
          <Link href="/subscribe" className="btn" style={{ textDecoration: 'none' }}>
            Subscribe Now
          </Link>
        </div>
      </div>
    );
  }

  if (!level1Completed) {
    return (
      <div className="lesson-page">
        <h2 className="header">🚀 Level 2: Deep Dive into Functions</h2>
        <div>
          <h3>Complete Level 1 First</h3>
          <p>
            You need to complete Level 1 before accessing Level 2. Go back and finish the JavaScript Basics lessons!
          </p>
          <Link href="/level1" className="btn">
            Go to Level 1
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page">
      <h2 className="header">🚀 Level 2: Deep Dive into Functions</h2>

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
              ⬅ next
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
          <h2>🎉 Congrats! You completed Level 2</h2>
          <Link href="/level3" className="btn">
            Go to Level 3 ➡️
          </Link>
        </div>
      )}
    </div>
  );
}