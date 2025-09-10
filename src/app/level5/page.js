"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Level5() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [level4Completed, setLevel4Completed] = useState(false);

  useEffect(() => {
    // Check subscription status
    setSubscribed(localStorage.getItem("subscribed") === "true");
    // Check Level 4 completion
    setLevel4Completed(localStorage.getItem("level4Completed") === "true");
  }, []);

  const lessons = [
    {
      title: "Prototype Basics",
      description: (
        <div>
          <h4>🟢 Prototype Basics</h4>
          <p>
            Every JavaScript object has a hidden <code>[[Prototype]]</code> property (accessible via <code>__proto__</code>), which is another object it inherits properties and methods from.
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
            {`let person = {
  greet: function() {
    console.log("Hello!");
  }
};

let student = {};
student.__proto__ = person;

student.greet(); // "Hello!"`}
          </pre>
          <p><b>Key Points:</b></p>
          <ul>
            <li>If a property/method isn’t found on an object, JavaScript checks its prototype.</li>
            <li><code>__proto__</code> links an object to its prototype (avoid direct use in production).</li>
          </ul>
        </div>
      ),
      task: "Create an object that inherits a method from another object using __proto__.",
      check: (code) => code.includes(".__proto__") && code.includes("="),
      error: "❌ Try again. Set an object's __proto__ to another object with a method.",
      success: "✅ Correct! You used __proto__ for inheritance."
    },
    {
      title: "Functions and prototype",
      description: (
        <div>
          <h4>🟢 Functions and prototype</h4>
          <p>
            Functions in JavaScript are objects and automatically get a <code>.prototype</code> property. Methods added to <code>.prototype</code> are shared by all instances created by the constructor function.
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
            {`function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log("Hi, my name is " + this.name);
};

let alice = new Person("Alice");
let bob = new Person("Bob");

alice.sayHello(); // "Hi, my name is Alice"
bob.sayHello(); // "Hi, my name is Bob"`}
          </pre>
          <p><b>Key Points:</b></p>
          <ul>
            <li><code>.prototype</code> is used to define shared methods.</li>
            <li>All instances share the same method, saving memory.</li>
          </ul>
        </div>
      ),
      task: "Create a constructor function and add a method to its prototype.",
      check: (code) =>
        code.includes("function") &&
        code.includes(".prototype") &&
        code.includes("="),
      error: "❌ Try again. Define a constructor function and add a method to its .prototype.",
      success: "✅ Correct! You used the prototype property."
    },
    {
      title: "Prototype Chain",
      description: (
        <div>
          <h4>🟢 Prototype Chain</h4>
          <p>
            If a property or method isn’t found on an object, JavaScript looks up the <b>prototype chain</b> until it reaches <code>null</code>.
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
            {`let arr = [1, 2, 3];

console.log(arr.toString()); // From Array.prototype
console.log(arr.hasOwnProperty("length")); // From Object.prototype`}
          </pre>
          <p><b>Chain:</b> <code>arr → Array.prototype → Object.prototype → null</code></p>
          <p><b>Key Points:</b></p>
          <ul>
            <li>The prototype chain enables inheritance across multiple levels.</li>
            <li>Methods like <code>toString</code> come from <code>Object.prototype</code>.</li>
          </ul>
        </div>
      ),
      task: "Create an array and call a method from Array.prototype (e.g., toString).",
      check: (code) => code.includes("[]") && code.includes(".toString("),
      error: "❌ Try again. Create an array and call its toString() method.",
      success: "✅ Correct! You accessed a method via the prototype chain."
    },
    {
      title: "Inheritance with Prototypes",
      description: (
        <div>
          <h4>🟢 Inheritance with Prototypes</h4>
          <p>
            Objects can inherit from other objects using <code>Object.create</code> and constructor calls to set up the prototype chain.
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
            {`function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(this.name + " makes a noise.");
};

function Dog(name) {
  Animal.call(this, name); // Call parent constructor
}

Dog.prototype = Object.create(Animal.prototype); // Inherit
Dog.prototype.constructor = Dog; // Fix constructor

Dog.prototype.speak = function() {
  console.log(this.name + " barks!");
};

let dog = new Dog("Buddy");
dog.speak(); // "Buddy barks!"`}
          </pre>
          <p><b>Key Points:</b></p>
          <ul>
            <li><code>Object.create</code> sets up prototype inheritance.</li>
            <li><code>.constructor</code> must be fixed after setting the prototype.</li>
          </ul>
        </div>
      ),
      task: "Create a parent and child constructor with prototype inheritance.",
      check: (code) => code.includes("Object.create") && code.includes(".constructor"),
      error: "❌ Try again. Use Object.create and set .constructor for inheritance.",
      success: "✅ Correct! You implemented prototype inheritance."
    },
    {
      title: "Modern Class Syntax",
      description: (
        <div>
          <h4>🟢 Modern Class Syntax</h4>
          <p>
            ES6 introduced the <code>class</code> keyword, a cleaner syntax for prototypes. It’s still prototype-based under the hood.
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
            {`class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(\`\${this.name} makes a noise.\`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(\`\${this.name} barks!\`);
  }
}

let d = new Dog("Charlie");
d.speak(); // "Charlie barks!"`}
          </pre>
          <p><b>Key Points:</b></p>
          <ul>
            <li>Classes simplify prototype-based inheritance.</li>
            <li>Use <code>extends</code> for inheritance.</li>
          </ul>
        </div>
      ),
      task: "Create a class with a constructor and a method, then extend it.",
      check: (code) => code.includes("class") && code.includes("extends"),
      error: "❌ Try again. Define a class with a constructor and extend it with another class.",
      success: "✅ Correct! You used modern class syntax."
    },
    {
      title: "Classes, Constructors, and Instances",
      description: (
        <div>
          <h4>🟢 Classes, Constructors, and Instances</h4>
          <p>
            A <b>class</b> is a blueprint for objects. A <b>constructor</b> initializes properties when an instance is created with <code>new</code>. An <b>instance</b> is an object created from a class.
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
            {`class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(\`Hi, I'm \${this.name}, and I'm \${this.age} years old.\`);
  }
}

let person1 = new Person("Alice", 25);
let person2 = new Person("Bob", 30);

person1.greet(); // "Hi, I'm Alice, and I'm 25 years old."
person2.greet(); // "Hi, I'm Bob, and I'm 30 years old."
console.log(person1 === person2); // false`}
          </pre>
          <p><b>Key Points:</b></p>
          <ul>
            <li><code>constructor</code> runs on <code>new</code>.</li>
            <li>Each instance has its own properties but shares methods.</li>
          </ul>
        </div>
      ),
      task: "Create a class with a constructor and create an instance using 'new'.",
      check: (code) =>
        code.includes("class") &&
        code.includes("constructor(") &&
        code.includes("new "),
      error: "❌ Try again. Define a class with a constructor and create an instance with new.",
      success: "✅ Correct! You created a class and instance."
    },
    {
      title: "Encapsulation",
      description: (
        <div>
          <h4>🟢 Encapsulation</h4>
          <p>
            Encapsulation bundles data and methods, hiding implementation details using private fields (<code>#</code>) and getters/setters for controlled access.
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
            {`class BankAccount {
  #balance;

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(\`Deposited: \${amount}\`);
  }

  getBalance() {
    return this.#balance;
  }
}

let acc = new BankAccount("Alice", 1000);
acc.deposit(500);
console.log(acc.getBalance()); // 1500
// console.log(acc.#balance); // ❌ Error`}
          </pre>
          <p><b>Key Points:</b></p>
          <ul>
            <li>Private fields (<code>#</code>) restrict direct access.</li>
            <li>Use getters to expose data safely.</li>
          </ul>
        </div>
      ),
      task: "Create a class with a private field (#balance) and a getter method.",
      check: (code) => code.includes("#") || code.includes("get "),
      error: "❌ Try again. Define a class with a private field (#) and a getter method.",
      success: "✅ Correct! You implemented encapsulation."
    },
    {
      title: "Polymorphism",
      description: (
        <div>
          <h4>🟢 Polymorphism</h4>
          <p>
            Polymorphism allows different classes to define the same method with different behaviors, typically through inheritance and method overriding.
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
            {`class Animal {
  speak() {
    console.log("This animal makes a sound.");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks 🐶");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows 🐱");
  }
}

let animals = [new Dog(), new Cat()];
animals.forEach(animal => animal.speak());
// Dog barks 🐶
// Cat meows 🐱`}
          </pre>
          <p><b>Key Points:</b></p>
          <ul>
            <li>Override parent methods for custom behavior.</li>
            <li>Polymorphism enables flexible code with shared interfaces.</li>
          </ul>
        </div>
      ),
      task: "Create two classes with the same method name but different outputs.",
      check: (code) =>
        code.includes("class") && code.match(/(\w+)\s*\(\)/g)?.length >= 2,
      error: "❌ Try again. Define two classes with the same method name but different implementations.",
      success: "✅ Correct! You demonstrated polymorphism."
    },
    {
      title: "Abstraction",
      description: (
        <div>
          <h4>🟢 Abstraction</h4>
          <p>
            Abstraction hides complex implementation details, exposing only essential functionality. In JavaScript, this is simulated by defining base class methods that subclasses must override.
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
            {`class Vehicle {
  start() {
    throw new Error("start() must be implemented by subclass");
  }
}

class Car extends Vehicle {
  start() {
    console.log("Car engine starts 🚗");
  }
}

class Bike extends Vehicle {
  start() {
    console.log("Bike engine starts 🏍️");
  }
}

let v1 = new Car();
let v2 = new Bike();

v1.start(); // Car engine starts 🚗
v2.start(); // Bike engine starts 🏍️`}
          </pre>
          <p><b>Key Points:</b></p>
          <ul>
            <li>Use base classes to define abstract methods.</li>
            <li>Subclasses provide concrete implementations.</li>
          </ul>
        </div>
      ),
      task: "Create a base class with a method that child classes override.",
      check: (code) => code.includes("extends") && code.includes("class"),
      error: "❌ Try again. Define a base class and a child class that overrides a method.",
      success: "✅ Correct! You implemented abstraction."
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
        // Last lesson completed, unlock Level 6 and show completion message
        localStorage.setItem("level5Completed", "true");
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
        <h2 className="header">📘 Level 5: Learn Object-Oriented Programming (OOP)</h2>
        <div>
          <h3>Subscription Required</h3>
          <p>
            To access Level 5, you need a SuperGrok subscription. Please subscribe to continue learning.
          </p>
          <Link href="/subscribe" className="btn" >
            Subscribe Now
          </Link>
        </div>
      </div>
    );
  }

  if (!level4Completed) {
    return (
      <div className="lesson-page" style={{ padding: "2rem", color: "white" }}>
        <h2 className="header">📘 Level 5: Learn Object-Oriented Programming (OOP)</h2>
        <div>
          <h3>Complete Level 4 First</h3>
          <p>
            You need to complete Level 4 before accessing Level 5. Go back and finish the Work with Asynchronous JavaScript lessons!
          </p>
          <Link href="/level4" className="btn" >
            Go to Level 4
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page" style={{ padding: "2rem", color: "white" }}>
      <h2 className="header">📘 Level 5: Learn Object-Oriented Programming (OOP)</h2>

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
          <h2>🎉 Congrats! You completed Level 5</h2>
          <Link href="/level6" className="btn" >
            Go to Level 6 ➡️
          </Link>
        </div>
      )}
    </div>
  );
}

