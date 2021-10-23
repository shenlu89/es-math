# Mathematics Specification

A programming specification for mathematics in JavaScript

## Math

- **Math** is a `built-in` object that has properties and methods for mathematical constants and functions. It’s not a function object.
- **Math** works with the Number type. It doesn't work with `BigInt`.

### Static properties (Constants)

| Constants | Description                         | Math Symol | Value |
| --------- | ----------------------------------- | ---------- | ----- |
| E         | Returns Euler's number              |            |       |
| PI        | Returns PI                          |            |       |
| SQRT2     | Returns the square root of 2        |            |       |
| SQRT1_2   | Returns the square root of 1/2      |            |       |
| LN2       | Returns the natural logarithm of 2  |            |       |
| LN10      | Returns the natural logarithm of 10 |            |       |
| LOG2E     | Returns base 2 logarithm of E       |            |       |
| LOG10E    | Returns base 10 logarithm of E      |            |       |

### Static methods

#### Number to Integer

| Method   | Description                                   | Math Symbol                     |
| -------- | --------------------------------------------- | ------------------------------- |
| round(x) | Returns x rounded to its nearest integer      | \lfloor x + \frac{1}{2} \rfloor |
| ceil(x)  | Returns x rounded up to its nearest integer   | \lceil x \rceil                 |
| floor(x) | Returns x rounded down to its nearest integer | \lfloor x \rfloor               |
| trunc(x) | Returns the integer part of a number (x)      | \lfloor x + \frac{1}{2} \rfloor |

#### Trigonometric functions

| Method      | Description                                                                   | Alternative |
| ----------- | ----------------------------------------------------------------------------- | ----------- |
| acos(x)     | Returns the arccosine of x, in radians                                        |             |
| acosh(x)    | Returns the hyperbolic arccosine of x                                         |             |
| asin(x)     | Returns the arcsine of x, in radians                                          |             |
| asinh(x)    | Returns the hyperbolic arcsine of x                                           |             |
| atan(x)     | Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians |             |
| atan2(y, x) | Returns the arctangent of the quotient of its arguments                       |             |
| atanh(x)    | Returns the hyperbolic arctangent of x                                        |             |
| cos(x)      | Returns the cosine of x (x is in radians)                                     |             |
| cosh(x)     | Returns the hyperbolic cosine of x                                            |             |
| sin(x)      | Returns the sine of x (x is in radians)                                       |             |
| sinh(x)     | Returns the hyperbolic sine of x                                              |             |
| tan(x)      | Returns the tangent of an angle                                               |             |
| tanh(x)     | Returns the hyperbolic tangent of a number                                    |             |

#### Exponential function

| Method    | Description                                           | Alternative |
| --------- | ----------------------------------------------------- | ----------- |
| cbrt(x)   | Returns the cubic root of x                           |             |
| exp(x)    | Returns the value of Ex                               |             |
| log(x)    | Returns the natural logarithm (base E) of x           |             |
| pow(x, y) | Returns the value of x to the power of y              |             |
| sign(x)   | Returns if x is negative, null or positive (-1, 0, 1) |             |
| sqrt(x)   | Returns the square root of x                          |             |

#### Maximum and Minimum

| Method               | Description                               | Alternative |
| -------------------- | ----------------------------------------- | ----------- |
| max(x, y, z, ..., n) | Returns the number with the highest value |             |
| min(x, y, z, ..., n) | Returns the number with the lowest value  |             |

#### Others

| Method   | Description                             | Alternative |
| -------- | --------------------------------------- | ----------- |
| abs(x)   | Returns the absolute value of x         |             |
| random() | Returns a random number between 0 and 1 |             |
