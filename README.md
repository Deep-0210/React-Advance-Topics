1> Compound Components:
--> Compound components in React refer to a pattern where a group of components work together to achieve a common goal, typically by sharing some state or behavior. Unlike regular components, where each component is independent, compound components are designed to be used together as a cohesive unit.
--> In compound component we can add components inside one parent component and use only required component to acheive a goal.

2> Hoc(Higher Oredr Component):
--> In HOC we pass one component as a component and receive a component in return.
--> Will pass the component as a prop and will receive a prop in return.

3> Render props pattern:
--> Basic render prop: Pass a function as a prop in component
--> Render prop as a chid: We can pass children as a prop
--> Component injection: Pass component as a prop

4> Controlles vs unControlled component:
--> In React, Controlled Components are those in which form’s data is handled by the component’s state. It takes its current value through props and makes changes through callbacks like onClick, onChange, etc. A parent component manages its own state and passes the new values as props to the controlled component.
--> In unControlled component are manage by DOM itself. [Controlled VS Uncontrolled Components](https://www.geeksforgeeks.org/controlled-vs-uncontrolled-components-in-reactjs/)

5> Error Handling in React:
--> To handle errors in functional components, you can use the useEffect hook combined with a try-catch block. This method is more manual compared to error boundaries but can be useful for handling errors during data fetching or other side effects.

6> Error Boundaries:
--> Error boundaries are implemented using class components because only class components can implement the componentDidCatch lifecycle method. However, you can still use them in a project that primarily uses functional components.

7> Virtualization for rendering large lists:
--> List virtualization is a crucial optimization technique for React applications dealing with large lists of data. By rendering only the visible items and dynamically replacing off-screen items, list virtualization significantly improves performance, leading to faster load times and smoother scrolling experiences.

8> Lazy loading in React.js:
--> Lazy loading in React.js is a technique used to optimize the performance of a web application by loading components or resources only when they are needed, rather than loading everything upfront. This helps reduce the initial load time and improve the user experience by breaking the application into smaller chunks.

 **9. Redux:**

* Redux stores data in a centralized location called the Redux store.

- It has the 3 events:
    
    **createSlice:** 
    
    - It will help ful for the create the reducer in inside it we can write the business logic.

    - In side it we need to manage the thing 
        
        - name
        - initialState
        - reducers
