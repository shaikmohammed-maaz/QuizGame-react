export const questionData = [
{
    question: "What's the purpose of 'State' in React apps?",
    options: [
      "It's data that's passed to other components",
      "It's data that, when changed, causes React to re-evaluate a component",
      "It's data that, when changed, always causes React to re-evaluate all components in the app",
      "It's data that, when changed, can't be passed to components anymore",
    ],
    answer: "It's data that, when changed, causes React to re-evaluate a component",
    description : "It's data that, when changed, causes React to re-evaluate a component. State allows you to manage dynamic data within a component. When this data changes, React re-renders the component with the updated information, ensuring your UI reflects the latest state.",
  },
  {
    question: "There are two 'Rules of Hooks'. Which of the following statements is NOT TRUE according to those rules?",
    options: [
      "You must not call React Hooks next to other Hooks.",
      "You must not call React Hooks outside of the component function.",
      "You must not call React Hooks inside of if statements.",
      "You must not call React Hooks inside of nested functions.",
    ],
    answer: "You must not call React Hooks next to other Hooks.",
    description: "You must not call React Hooks inside of if statements. Hooks rely on the component's state and lifecycle, and using them conditionally within if statements can lead to unexpected behavior. Always call Hooks at the top level of your component function.",
  },
  {
    question: "What's the idea behind 'derived state' / 'computed values'?",
    options: [
      "It's an older pattern that shouldn't be used anymore - use state instead.",
      "Computed values are values that should be managed as separate state which is then derived from other state values.",
      "Computed values are values that shouldn't be managed as separate state since they can be derived from other state.",
    ],
    answer:"Computed values are values that shouldn't be managed as separate state since they can be derived from other state.",
    description: "Computed values are values that shouldn't be managed as separate state since they can be derived from other state. This avoids unnecessary state updates and improves performance. You can use functions or libraries like `React.memo` to memoize these calculations and prevent re-renders unless the underlying data they depend on actually changes.",
  },
  {
    question: "What's the most common way to handle user input in React?",
    options: [
      "Using the 'document.getElementById' method directly in your component.",
      "Using event handlers attached to HTML elements within the JSX code.",
      "There's no specific way - you can handle user input however you like.",
      "Using separate JavaScript functions outside of your React components.",
    ],
    answer:"Using event handlers attached to HTML elements within the JSX code.",
    description: "Using event handlers attached to HTML elements within the JSX code. React provides a declarative way to handle user interactions by attaching event handlers (like `onClick` or `onChange`) to specific elements. These handlers are triggered when the user interacts with the element, allowing you to capture input data and update your component's state accordingly.",
  },
  {
    question: "What does JSX stand for in React?",
    options: [
      "JavaScript XML",
      "JavaScript Syntax Extension",
      "Just Some XML",
      "JavaScript Style XML",
    ],
    answer:"JavaScript Syntax Extension",
    description: "JavaScript Syntax Extension (JSX). JSX allows you to write HTML-like structures within your JavaScript code, making it easier to visualize the UI components you're building. However, JSX is transformed into regular JavaScript function calls before execution in the browser.",
  },
]