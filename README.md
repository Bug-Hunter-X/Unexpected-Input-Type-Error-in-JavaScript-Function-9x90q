# JavaScript Unexpected Input Handling Bug

This repository demonstrates a common JavaScript error related to unexpected input types. The `foo` function attempts to access the `length` property of the input `x`, which will throw an error if `x` is not an array or string. This example shows how to handle unexpected input using type checking and default values.

## Bug

The original code fails to handle cases where the input is not a string or an array, leading to a runtime error.

## Solution

The solution adds explicit type checking and provides a default return value when an unexpected input type is encountered.
