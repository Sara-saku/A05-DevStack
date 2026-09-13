

DevStack

DevStack is a technology stack builder built with React,
TypeScript, and Tailwind CSS.

It allows users to explore different development technologies, add
technologies to their personal stack, remove individual technologies,
and clear the entire stack. Technology information is loaded dynamically
from a JSON file.

Live Demo:

My deployed project link here:

Technology that I have used....
//**React

*TypeScript

*Tailwind CSS

*React Toastify

*Vite

*JSON

*Git & GitHub

*React-icon
*//

📂 Project Structure

public/
└── technologies.json
src/
├── assets/
├── Components/
│   ├── banner.tsx
│   ├── nav.tsx
│   ├── TechnologySection.tsx
│   ├── TechnologyCard.tsx
│   ├── YourStack.tsx
│   └── Footer.tsx
├── Types/
│   └── technology.ts
├── App.tsx
├── index.css
└── main.tsx

features about my project
1.Show a loading message/spinner while the JSON data is being fetched.
2.Tostify allarts.
3.Add & Remove Technologies


*React Questions & Answers:

1. What is JSX, and why is it used in React?
ans:JSX stands for javascript.It is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. jsx allows us to write html like ui code in js/ts which makes react component easier to build and understand.

2. What is the difference between props and state?
ans:Props are a data we used it parent component to child component.State is a data that is managed inside a component can changed over time

3. What does the useState hook do, and where did you use it in this project?
ans: useState lets us store data that can change. In this project, I used it to store and update the user's selected technologies in the Your Stack section.

4. What does the useEffect hook do, and why did you need it to load the JSON data? 
ans:useEffect is commonly used fathching data. it usedto after component render to jesonAPI for data fetch.

5. Why does every item in a .map() list need a unique key prop? 
ans:key is a unique identity for every list item, it helps to react for track change list item.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).
ans:It helps React to know which item was changed, added, or removed. 

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent? 
ans:In React data usually moves between parent and child using props.