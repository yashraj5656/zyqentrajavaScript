"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Level3() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [level2Completed, setLevel2Completed] = useState(false);

  useEffect(() => {
    // Check subscription status
    setSubscribed(localStorage.getItem("subscribed") === "true");
    // Check Level 2 completion
    setLevel2Completed(localStorage.getItem("level2Completed") === "true");
  }, []);

  const lessons = [
    {
      title: "Understanding the DOM",
      description: (
        <div>
          <h4>🌐 What is the DOM?</h4>
          <p>
            The Document Object Model (DOM) is a tree-like structure representing your HTML page in JavaScript. It allows JavaScript to:
            <ul>
              <li>Select elements</li>
              <li>Change content/styles</li>
              <li>Add or remove elements</li>
              <li>Handle user interactions (clicks, inputs, etc.)</li>
            </ul>
            Example DOM tree for this HTML:
          </p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`<body>
  <h1 id="title">Hello World</h1>
  <p class="text">This is a paragraph.</p>
</body>`}
          </pre>
          <p>Becomes a tree: <code>document → body → h1, p</code>.</p>
        </div>
      ),
      task: "Log the document object to the console to inspect its structure.",
      check: (code) => code.includes("document") && code.includes("console.log"),
      error: "❌ Try again. Log the document object using console.log(document).",
      success: "✅ Correct! You inspected the DOM structure.",
    },
    {
      title: "DOM Selection with getElementById",
      description: (
        <div>
          <h4>🟢 getElementById()</h4>
          <p>
            Selects one element with a specific ID (fastest method). IDs are unique, so it returns one element or <code>null</code>.
          </p>
          <p><b>Syntax:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`document.getElementById("idName")`}
          </pre>
          <p><b>Example:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`// HTML: <h1 id="heading">Welcome!</h1>
let element = document.getElementById("heading");
console.log(element); // <h1 id="heading">Welcome!</h1>
element.style.color = "blue";`}
          </pre>
          <p><b>Key Points:</b> Fastest for ID lookup, returns one element or null.</p>
        </div>
      ),
      task: "Select the element with id='demo' and change its text color to blue.",
      check: (code) => code.includes("document.getElementById('demo')") && code.includes("style.color"),
      error: "❌ Try again. Use getElementById('demo') and set style.color to 'blue'.",
      success: "✅ Correct! You selected an element and changed its color.",
    },
    {
      title: "DOM Selection with querySelector",
      description: (
        <div>
          <h4>🟢 querySelector()</h4>
          <p>
            Selects the first element matching a CSS selector (e.g., #id, .class, tag). More flexible than <code>getElementById()</code>.
          </p>
          <p><b>Syntax:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`document.querySelector("cssSelector")`}
          </pre>
          <p><b>Example (Class selection):</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`// HTML: <p class="text">Paragraph 1</p>
let element = document.querySelector(".text");
console.log(element.innerText); // "Paragraph 1"`}
          </pre>
          <p><b>Key Points:</b> Returns first match, supports CSS selectors.</p>
        </div>
      ),
      task: "Use querySelector to select the first element with class='text' and log its innerText.",
      check: (code) => code.includes("document.querySelector('.text')") && (code.includes("innerText") || code.includes("textContent")),
      error: "❌ Try again. Use querySelector('.text') and log innerText or textContent.",
      success: "✅ Correct! You selected and logged the element's text.",
    },
    {
      title: "DOM Manipulation",
      description: (
        <div>
          <h4>🔥 DOM Manipulation</h4>
          <p>
            Change content, styles, classes, or attributes of DOM elements dynamically.
          </p>
          <p><b>Example (Change Content):</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`// HTML: <p id="para">Hello</p>
let para = document.getElementById("para");
para.textContent = "Hello World!";
para.innerHTML = "<span style='color:red'>Hello World!</span>";`}
          </pre>
          <p><b>Example (Add Class):</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`// CSS: .highlight { color: red; }
let text = document.getElementById("para");
text.classList.add("highlight");`}
          </pre>
          <p><b>Key Methods:</b> <code>textContent</code>, <code>innerHTML</code>, <code>style</code>, <code>classList.add/remove/toggle</code>.</p>
        </div>
      ),
      task: "Change the innerText of #demo to 'Hello DOM' and add a class 'highlight'.",
      check: (code) => (code.includes("innerText") || code.includes("textContent")) && code.includes("classList.add('highlight')"),
      error: "❌ Try again. Set innerText to 'Hello DOM' and add class 'highlight'.",
      success: "✅ Correct! You manipulated the DOM.",
    },
    {
      title: "Event Handling",
      description: (
        <div>
          <h4>🎯 Event Handling</h4>
          <p>
            Use <code>addEventListener</code> to respond to user actions like clicks or keypresses.
          </p>
          <p><b>Syntax:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`element.addEventListener("eventType", function(event) {
  // code
});`}
          </pre>
          <p><b>Example:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`// HTML: <button id="btn">Click Me</button>
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  btn.textContent = "Clicked!";
});`}
          </pre>
          <p><b>Key Events:</b> <code>click</code>, <code>input</code>, <code>keydown</code>.</p>
        </div>
      ),
      task: "Write code to listen for a click on #btn and change its innerText to 'Clicked!'.",
      check: (code) => code.includes("addEventListener") && code.includes("click") && (code.includes("innerText") || code.includes("textContent")),
      error: "❌ Try again. Use addEventListener for a 'click' event and set innerText to 'Clicked!'.",
      success: "✅ Correct! You handled a click event.",
    },
    {
      title: "Event Delegation",
      description: (
        <div>
          <h4>🔥 Event Delegation</h4>
          <p>
            Event bubbling allows events to propagate from child to parent. Event delegation uses a single listener on a parent to handle child events.
          </p>
          <p><b>Example:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`// HTML: <ul id="list"><li>Item 1</li></ul>
let list = document.getElementById("list");
list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log(event.target.textContent);
  }
});`}
          </pre>
          <p><b>Key Points:</b> Efficient for dynamic elements, uses <code>event.target</code>.</p>
        </div>
      ),
      task: "Attach one event listener to a parent with id='list' to log the text of clicked <li> elements.",
      check: (code) => code.includes("addEventListener") && code.includes("event.target") && code.includes("LI"),
      error: "❌ Try again. Use addEventListener on #list and check event.target.tagName === 'LI'.",
      success: "✅ Correct! You implemented event delegation.",
    },
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
        // Last lesson completed, unlock Level 4 and show completion message
        localStorage.setItem("level3Completed", "true");
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
        <h2 className="header">📘 Level 3: Master the DOM and Events</h2>
        <div>
          <h3>Subscription Required</h3>
          <p>
            To access Level 3, you need a SuperGrok subscription. Please subscribe to continue learning.
          </p>
          <Link href="/subscribe" className="btn">
            Subscribe Now
          </Link>
        </div>
      </div>
    );
  }

  if (!level2Completed) {
    return (
      <div className="lesson-page">
        <h2 className="header">📘 Level 3: Master the DOM and Events</h2>
        <div>
          <h3>Complete Level 2 First</h3>
          <p>
            You need to complete Level 2 before accessing Level 3. Go back and finish the Deep Dive into Functions lessons!
          </p>
          <Link href="/level2" className="btn" style={{ textDecoration: 'none' }}>
            Go to Level 2
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page">
      <h2 className="header">📘 Level 3: Master the DOM and Events</h2>

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
          <h2>🎉 Congrats! You completed Level 3</h2>
          <Link href="/level4" className="btn">
            Go to Level 4 ➡️
          </Link>
        </div>
      )}
    </div>
  );
}