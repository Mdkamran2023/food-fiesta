# Redux Toolkit
- Redux Toolkit is a library that provides a set of tools to simplify common Redux use cases. It includes utilities to simplify several Redux patterns, including store setup, defining reducers, immutable update logic, and even creating entire “slices” of state at once. RTK is a hooks-based incarnation of Redux that simplifies Redux development, with quality of life improvements, like the ability to write mutable state updates in reducers which are converted to immutable state updates behind the scenes using a library called Immer, and auto-generated actions from the reducers themselves.

# Redux
-  It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. 
-  It centralizes your application’s state and logic, and lets you debug and trace your changes with the Redux DevTools. 
-   Redux Toolkit is our official recommended approach for writing Redux logic.
-    It wraps around the Redux core, and contains packages and functions that we think are essential for building a Redux app.
-     Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications. 
- RTK includes utilities that help simplify many common use cases, including store setup, creating reducers and writing immutable update logic, and even creating entire “slices” of state at once. 

# Important to be noted
  ## How to write data to redux store
- when u hit the add button it dispatches an action function which calls reducer function which updates the slices of Redux Store
- useDispatch hook for dispatching an action

## How to read data
- for reading data we need to be subscribed using useSelector hook....


# Testing
 
 [Testing](https://www.twilio.com/en-us/blog/unit-integration-end-to-end-testing-difference)

## Unit Testing:
- What it is: Unit testing focuses on verifying individual components or functions within your codebase. These components are tested in isolation, without any external dependencies.
- Purpose: To validate that each unit (such as a function or method) behaves correctly according to its specifications.
- Environment: Typically executed in a local environment on your own device.
- Example: Testing a specific function that calculates the total price of items in a shopping cart.
  
## Integration Testing:
- What it is: Integration testing examines how different units or modules interact with each other when combined. It ensures that the integrated parts work seamlessly together.
- Purpose: To identify issues related to data flow, communication, and interactions between components.
Environment: Usually conducted in a development (dev) environment, which is a shared hosted version of your code.
- Example: Testing the interaction between a payment gateway module and an order processing module.


## End-to-End (E2E) Testing:
- What it is: E2E testing evaluates the entire application from start to finish, simulating real user scenarios. It covers multiple components, databases, and external services.
- Purpose: To validate the overall functionality, user experience, and system behavior.
- Environment: Performed in a staging environment (a close copy of production) or directly in production.
- Example: Testing the complete user journey, including login, adding items to the cart, and checking out.
Remember, the balance between these testing types depends on your project’s context. As a general rule of thumb, consider a 70/20/10 split:

 ## 70%: Unit tests (for computation-heavy or data-centric projects).
### 20%: Integration tests (for projects with many integrations).
 ####  10%: E2E tests (for complex user interfaces)




 # setting up testing in our app
 - Install React Testing Library
 - Installed jest
 - Installed Babel dependencies &
 - created babel.confog.js
 - configure Parcel Config file to disable default babel transpilation.
 - jest Configuration (npx jest --init)
 - install jsdom library
 -  install  @babel/preset-react  -- to make JSX work in test cases
 -  include  @babel/preset-react  inside my babel config
 - install @testing-library/jest-dom
  