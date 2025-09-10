"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

export default function Level4() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [level3Completed, setLevel3Completed] = useState(false);

  useEffect(() => {
    // Check subscription status
    setSubscribed(localStorage.getItem("subscribed") === "true");
    // Check Level 3 completion
    setLevel3Completed(localStorage.getItem("level3Completed") === "true");
  }, []);

  const lessons = [
    {
      title: "Callbacks",
      description: (
        <div>
          <h4>🟢 Callbacks</h4>
          <p>
            A callback is a function passed as an argument to another function, executed later.
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
            {`function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    callback("Data received ✅");
  }, 2000);
}

fetchData(function(result) {
  console.log(result);
});`}
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
            {`Fetching data...
(Data received after 2 seconds)`}
          </pre>
          <p><b>⚠️ Problem:</b> Callback Hell (nested callbacks make code messy).</p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`doStep1(() => {
  doStep2(() => {
    doStep3(() => {
      console.log("All steps done!");
    });
  });
});`}
          </pre>
        </div>
      ),
      task: "Write a function that accepts a callback and calls it.",
      check: (code) => code.includes("function") && code.includes("callback("),
      error: "❌ Try again. Define a function that accepts a parameter 'callback' and calls it.",
      success: "✅ Correct! You used a callback function."
    },
    {
      title: "Promises",
      description: (
        <div>
          <h4>🟢 Promises</h4>
          <p>
            A Promise represents a value that may be available now, later, or never. It has three states: <b>pending</b>, <b>fulfilled</b> (resolve), or <b>rejected</b> (reject).
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
            {`let myPromise = new Promise((resolve, reject) => {
  let success = true;
  setTimeout(() => {
    if (success) {
      resolve("✅ Data fetched!");
    } else {
      reject("❌ Error fetching data");
    }
  }, 2000);
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.log(error))
  .finally(() => console.log("Done!"));`}
          </pre>
        </div>
      ),
      task: "Create a Promise that resolves with 'done'.",
      check: (code) => code.includes("new Promise") && code.includes("resolve"),
      error: "❌ Try again. Create a new Promise and call resolve('done').",
      success: "✅ Correct! You created a Promise."
    },
    {
      title: "Async/Await",
      description: (
        <div>
          <h4>🟢 Async/Await</h4>
          <p>
            Async/await is syntactic sugar over Promises, making asynchronous code look synchronous. Use <code>async</code> before a function and <code>await</code> to pause until a Promise resolves.
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
            {`function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("✅ Data received!"), 2000);
  });
}

async function getData() {
  console.log("Fetching...");
  let result = await fetchData();
  console.log(result);
  console.log("Done!");
}

getData();`}
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
            {`Fetching...
(Data received after 2 sec)
Done!`}
          </pre>
        </div>
      ),
      task: "Write an async function that awaits a Promise.",
      check: (code) => code.includes("async function") && code.includes("await"),
      error: "❌ Try again. Define an async function and use await with a Promise.",
      success: "✅ Correct! You used async/await."
    },
    {
      title: "HTTP Requests with fetch()",
      description: (
        <div>
          <h4>🌐 HTTP Requests with fetch()</h4>
          <p>
            The <code>fetch()</code> API is built into JavaScript for making HTTP requests. It returns a Promise.
          </p>
          <p><b>GET Example:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));`}
          </pre>
          <p><b>Async/Await Example:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`async function getPost() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
getPost();`}
          </pre>
          <p><b>POST Example:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "New Post",
    body: "This is the content",
    userId: 1
  })
})
.then(response => response.json())
.then(data => console.log("Created:", data))
.catch(error => console.error("Error:", error));`}
          </pre>
        </div>
      ),
      task: "Write code using fetch('https://jsonplaceholder.typicode.com/todos/1').",
      check: (code) => code.includes("fetch("),
      error: "❌ Try again. Use fetch('https://jsonplaceholder.typicode.com/todos/1').",
      success: "✅ Correct! You used the fetch() API."
    },
    {
      title: "Handling API Responses and JSON",
      description: (
        <div>
          <h4>📦 Handling API Responses and JSON</h4>
          <p>
            APIs often return JSON data. Use <code>response.json()</code> with <code>fetch()</code> to parse it, or access <code>response.data</code> with Axios. Always check for errors.
          </p>
          <p><b>Fetch Example with Error Handling:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`async function getPost() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!response.ok) {
      throw new Error("HTTP Error: " + response.status);
    }
    let data = await response.json();
    console.log("Post:", data);
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}
getPost();`}
          </pre>
          <p><b>Working with JSON:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`let jsonString = '{"id":1,"name":"Alice","skills":["JS","React"]}';
let user = JSON.parse(jsonString);
console.log(user.name); // "Alice"
console.log(user.skills[0]); // "JS"

let obj = { id: 2, name: "Bob" };
let json = JSON.stringify(obj);
console.log(json); // {"id":2,"name":"Bob"}`}
          </pre>
          <p><b>Key Points:</b> Use <code>JSON.parse()</code> for strings to objects, <code>JSON.stringify()</code> for objects to strings.</p>
        </div>
      ),
      task: "Use response.json() and console.log the data.",
      check: (code) => code.includes("json(") || code.includes(".json()"),
      error: "❌ Try again. Use response.json() and log the parsed data.",
      success: "✅ Correct! You handled a JSON response."
    },
    {
      title: "HTTP Requests with Axios",
      description: (
        <div>
          <h4>🌐 HTTP Requests with Axios</h4>
          <p>
            Axios is a popular library for HTTP requests, automatically parsing JSON and throwing errors for bad HTTP status codes.
          </p>
          <p><b>GET Example:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`axios.get("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => console.log(response.data))
  .catch(error => console.error("Error:", error));`}
          </pre>
          <p><b>Async/Await Example:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`async function getPost() {
  try {
    let response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error);
  }
}
getPost();`}
          </pre>
          <p><b>POST Example:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`axios.post("https://jsonplaceholder.typicode.com/posts", {
  title: "New Post",
  body: "This is the content",
  userId: 1
})
.then(response => console.log("Created:", response.data))
.catch(error => console.error("Error:", error));`}
          </pre>
          <p><b>Error Handling:</b></p>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {`async function getPost() {
  try {
    let response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log(response.data);
  } catch (error) {
    if (error.response) {
      console.error("API Error:", error.response.status, error.response.data);
    } else if (error.request) {
      console.error("Network Error: No response received");
    } else {
      console.error("Error:", error.message);
    }
  }
}
getPost();`}
          </pre>
        </div>
      ),
      task: "Use axios.get('https://jsonplaceholder.typicode.com/posts/1') to fetch data.",
      check: (code) => code.includes("axios.get"),
      error: "❌ Try again. Use axios.get('https://jsonplaceholder.typicode.com/posts/1').",
      success: "✅ Correct! You used Axios to fetch data."
    }
  ];



  const handleNext = () => {
    if (currentLesson < lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
      setCode("");
      setMessage("");
      setApiData(null);
    }
  };

  const handlePrev = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
      setCode("");
      setMessage("");
      setApiData(null);
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
          setApiData(null);
        }, 1000);
      } else {
        // Last lesson completed, unlock Level 5 and show completion message
        localStorage.setItem("level4Completed", "true");
        setTimeout(() => {
          setCurrentLesson(currentLesson + 1); // Increment to lessons.length
          setCode("");
          setMessage("");
          setApiData(null);
        }, 1000);
      }
    } else {
      setMessage(lessons[currentLesson].error);
    }
  };

  // Fake API fetch (fetch method)
  const fetchAPI = async () => {
    setLoading(true);
    setApiData(null);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      if (!res.ok) {
        throw new Error(`HTTP Error: ${res.status}`);
      }
      const data = await res.json();
      setApiData(data);
    } catch (err) {
      setApiData({ error: "❌ Failed to fetch API with fetch()" });
    }
    setLoading(false);
  };

  // Fake API fetch (axios method)
  const axiosAPI = async () => {
    setLoading(true);
    setApiData(null);
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
      setApiData(res.data);
    } catch (err) {
      setApiData({ error: "❌ Failed to fetch API with axios" });
    }
    setLoading(false);
  };

  if (!subscribed) {
    return (
      <div className="lesson-page" style={{ padding: "2rem", color: "white" }}>
        <h2 className="header">📘 Level 4: Work with Asynchronous JavaScript</h2>
        <div>
          <h3>Subscription Required</h3>
          <p>
            To access Level 4, you need a SuperGrok subscription. Please subscribe to continue learning.
          </p>
          <Link href="/subscribe" className="btn" >
            Subscribe Now
          </Link>
        </div>
      </div>
    );
  }

  if (!level3Completed) {
    return (
      <div className="lesson-page" style={{ padding: "2rem", color: "white" }}>
        <h2 className="header">📘 Level 4: Work with Asynchronous JavaScript</h2>
        <div>
          <h3>Complete Level 3 First</h3>
          <p>
            You need to complete Level 3 before accessing Level 4. Go back and finish the Master the DOM and Events lessons!
          </p>
          <Link href="/level3" className="btn" >
            Go to Level 3
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page" style={{ padding: "2rem", color: "white" }}>
      <h2 className="header">📘 Level 4: Work with Asynchronous JavaScript</h2>

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
                  setApiData(null);
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

          {(lessons[currentLesson].title === "HTTP Requests with fetch()" ||
            lessons[currentLesson].title === "Handling API Responses and JSON" ||
            lessons[currentLesson].title === "HTTP Requests with Axios") && (
            <div style={{ marginTop: "2rem" }}>
              <h3>🌐 API Playground</h3>
              <button onClick={fetchAPI} className="btn" >
                Fetch with fetch()
              </button>
              <button
                onClick={axiosAPI}
                className="btn"
                style={{ ...btnStyle, marginLeft: "10px", background: "#2196f3" }}
              >
                Fetch with Axios
              </button>
              {loading && <p>⏳ Fetching data...</p>}
              {apiData && (
                <pre
                  style={{
                    background: "#111",
                    padding: "1rem",
                    borderRadius: "8px",
                    marginTop: "1rem",
                    textAlign: "left",
                    overflowX: "auto",
                  }}
                >
                  {JSON.stringify(apiData, null, 2)}
                </pre>
              )}
            </div>
          )}
        </div>
      ) : (
        <div>
          <h2>🎉 Congrats! You completed Level 4</h2>
          <Link href="/level5" className="btn" >
            Go to Level 5 ➡️
          </Link>
        </div>
      )}
    </div>
  );
}

