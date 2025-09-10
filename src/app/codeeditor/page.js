"use client";
import { useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";



export default function CodeEditor() {

  // Load Monaco only on client
const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false });
  // ✅ Tasks list
  const tasks = [
    "Print 'Hello World'",
    "Declare a variable using let",
    "Create a function that adds two numbers",
    "Loop through numbers 1 to 5",
    "Use an array and print its elements",
    "Write an object with name and age",
    "Check if a number is even or odd",
    "Create a class with a constructor",
    "Fetch data from an API (use fetch)",
    "Implement async/await function",
    "Use map() to double array values",
    "Write a try...catch block",
    "Implement a closure example",
    "Use destructuring on an object",
    "Build a simple promise",
    "Use localStorage to save data",
    "Handle errors in async code",
    "Implement debounce function",
    "Build a custom event listener",
    "Write a generator function",
  ];
  const [currentTask, setCurrentTask] = useState(0);

  // ✅ Starter code snippets for each task
  const starterCodes = useMemo(() => [
    `console.log("Hello World");`,
    `let x = 10;\nconsole.log(x);`,
    `function add(a, b) {\n  return a + b;\n}\nconsole.log(add(2,3));`,
    `for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}`,
    `let arr = [1,2,3,4,5];\narr.forEach(num => console.log(num));`,
    `let person = { name: "Alex", age: 25 };\nconsole.log(person);`,
    `let num = 7;\nconsole.log(num % 2 === 0 ? "Even" : "Odd");`,
    `class Person {\n  constructor(name) {\n    this.name = name;\n  }\n}\nlet p = new Person("Alex");\nconsole.log(p.name);`,
    `fetch("https://jsonplaceholder.typicode.com/posts/1")\n  .then(res => res.json())\n  .then(data => console.log(data));`,
    `async function getData() {\n  let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");\n  let data = await res.json();\n  console.log(data);\n}\ngetData();`,
    `let nums = [1,2,3];\nlet doubled = nums.map(n => n*2);\nconsole.log(doubled);`,
    `try {\n  throw new Error("Something went wrong!");\n} catch(err) {\n  console.log(err.message);\n}`,
    `function outer() {\n  let x = 10;\n  return function inner() {\n    console.log(x);\n  }\n}\nouter()();`,
    `let user = { name: "Alex", age: 25 };\nlet { name, age } = user;\nconsole.log(name, age);`,
    `let promise = new Promise((resolve) => {\n  setTimeout(() => resolve("Done!"), 1000);\n});\npromise.then(console.log);`,
    `localStorage.setItem("key", "value");\nconsole.log(localStorage.getItem("key"));`,
    `async function fetchData() {\n  try {\n    let res = await fetch("https://wrong.url");\n  } catch(err) {\n    console.log("Error:", err.message);\n  }\n}\nfetchData();`,
    `function debounce(fn, delay) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}\n\nconst log = debounce(() => console.log("Debounced!"), 500);\nlog();`,
    `document.addEventListener("myEvent", e => console.log("Custom Event Fired!"));\nlet event = new Event("myEvent");\ndocument.dispatchEvent(event);`,
    `function* generator() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\nlet gen = generator();\nconsole.log(gen.next().value);`,
  ], []);

  // ✅ State for code
  const [code, setCode] = useState(starterCodes[0]);
  const [output, setOutput] = useState("");

// 🔄 Update editor code when task changes
useEffect(() => {
  setCode(starterCodes[currentTask]);
}, [currentTask, starterCodes]);

  // ✅ Neon Cyberpunk Theme
  loader.init().then((monaco) => {
    monaco.editor.defineTheme("neon-night", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "comment", foreground: "6a9955" },
        { token: "keyword", foreground: "00f2ea", fontStyle: "bold" },
        { token: "identifier", foreground: "ffffff" },
        { token: "string", foreground: "a855f7" },
        { token: "number", foreground: "ffb86c" },
        { token: "delimiter", foreground: "00cba9" },
      ],
      colors: {
        "editor.background": "#0f0f0f",
        "editor.foreground": "#e0e0e0",
        "editor.lineHighlightBackground": "#111111",
        "editor.selectionBackground": "#00cba955",
        "editorCursor.foreground": "#00f2ea",
        "editorCursor.background": "#000000",
        "editor.selectionHighlightBackground": "#00f2ea33",
        "editorIndentGuide.background": "#333333",
        "editorLineNumber.foreground": "#555555",
        "editorLineNumber.activeForeground": "#00f2ea",
        "editorWhitespace.foreground": "#222222",
      },
    });
  });

  const handleRun = () => {
    let logs = [];
    try {
      const originalLog = console.log;
      console.log = (...args) => {
        logs.push(args.join(" "));
      };
      // eslint-disable-next-line no-eval
      eval(code);
      console.log = originalLog;
      setOutput(logs.join("\n") || "✅ Code ran successfully, no output.");
    } catch (err) {
      setOutput("❌ Error: " + err.message);
    }
  };

  return (
    <div className="glitch-form-wrapper">
      <div className="glitch-car">
        {/* Header */}
        <div className="card-header">
          <div className="card-title">
            <span>💻 JavaScript Editor</span>
          </div>
          <div className="card-dots"><span></span><span></span><span></span></div>
        </div>

        {/* Body */}
        <div className="card-body">
          {/* Task Row */}
          <div className="task-row">
            <p className="task-text">
              Task {currentTask + 1}: {tasks[currentTask]}
            </p>
            <button
              onClick={() => setCurrentTask((prev) => (prev + 1) % tasks.length)}
              className="task-button"
              data-text="Next"
            >
              Next ➝
            </button>
          </div>

          {/* Editor */}
          <Editor
            height="400px"
            theme="neon-night"
            defaultLanguage="javascript"
            value={code}
            onChange={(value) => setCode(value || "")}
            options={{
              fontSize: 15,
              fontFamily: '"Fira Code", Consolas, "Courier New", monospace',
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              cursorSmoothCaretAnimation: "on",
              cursorBlinking: "phase",
              renderLineHighlight: "all",
              smoothScrolling: true,
            }}
          />

          {/* Output Section */}
          <div className="card-body">
            <div className="card-header">
              <div className="card-title">
                <span> Output</span>
              </div>
              <button onClick={handleRun} className="task-button" data-text="Run_Code">
                ▶ Run Code
              </button>
            </div>
            <div className="card-body">
              <pre className="output-text">{output}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
