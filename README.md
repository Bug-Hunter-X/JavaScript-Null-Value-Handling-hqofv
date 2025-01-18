# JavaScript Null Value Handling

This repository demonstrates a common JavaScript error related to null value handling and how to solve it.

## The Problem:

In JavaScript, if you attempt mathematical operations involving `null` values, the result is not always intuitive.  This can lead to unexpected results and bugs in your code.

## The Solution:

Always explicitly check for `null` values before performing operations.  The best practice is to handle `null` cases separately, often by returning a default value or throwing an error.

## How to Run:

1. Clone this repository.
2. Open `bug.js` to see the flawed code that doesn't handle `null` values properly.
3. Open `bugSolution.js` to see the improved code that handles `null` values correctly.