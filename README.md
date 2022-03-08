# PicSome online shop

*Order some picture and we'll deliver the printed versions for you.*

Learning **ReactRouter**.


## Overview

### The Goal

User should be able to:

-   [x] Select your favorite photos
-   [x] Add pictures to the cart
-   [x] Place an order

### Website to the current version

[Website](arturfriedrich.github.io/picsome/)

## Screenshot

![Screen Shot 2022-03-08 at 9 01 42](https://user-images.githubusercontent.com/67378210/157192966-98d2495d-2207-419b-b761-629bf411ef7e.png)
![Screen Shot 2022-03-08 at 9 02 02](https://user-images.githubusercontent.com/67378210/157192996-95a4c8d1-d7eb-44f5-b724-ccebd7836406.png)

## My process

### Built with

-   React
-   HTML markup
-   CSS
-   Javascript

### What I learned

-   How to setup a multi-page application with React Router



```jsx
<Switch>
    <Route exact path="/">
        <Photos />
    </Route>

    <Route path="/cart">
        <Cart />
    </Route>
</Switch>
```


## Installation

Clone this repository and install the dependencies...

```bash
npm install react-confetti
```

To run locally then start [Rollup](https://rollupjs.org)

```bash
npm run dev
```

## Author

-   GitHub - [@arturfriedrich](https://www.github.com/arturfriedrich)
-   Twitter - [@arturfriedrich7](https://twitter.com/arturfriedrich7)

## Acknowledgements

-   [Scrimba](https://scrimba.com) - The base app is from a tutorial





