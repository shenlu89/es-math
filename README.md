# ECMAScript Mathematical Constants and Formulas

> A collection of mathematical constants and formulas implemented in ECMAScript, JavaScript and TypeScript with ES6+ features.

This standard is available in other languages too. See [Translation]() // todo translation directory for other languages README.md

## Table of Contents

- [The Globe Object of ECMAScript for Mathematics](#the-globe-object-of-ecmascript-for-mathematics)
  - [Value Properties](#value-properties)
  - [Function Properties](#function-properties)
  - [Constructor Properties](#constructor-properties)
    - [BigInt](#bigint)
    - [Numbers](#numbers)
  - [Other Properties](#other-properties)
    - [Math](#math)

---

## The Globe Object of ECMAScript for Mathematics

There are a plenty of built-in objects that can be treated as natural mathematical constants and formulas naturally.

---

### Value Properties

| Value Properties | Description       | Math Symol | Value                |
| ---------------- | ----------------- | ---------- | -------------------- |
| [Infinity]()     | positive Infinity | +∞         | Infinity (+Infinity) |
| [NaN]()          | Not-a-Number      | NaN        | NaN                  |

---

### Function Properties

| Function Properties | Description       | Math Symol | Value                   |
| ------------------- | ----------------- | ---------- | ----------------------- |
| [isFinite()]()      | positive Infinity | +∞         | Infinity (or +Infinity) |
| [isNaN()]()         | Not-a-Number      | NaN        | NaN                     |
| [parseFloat()]()    | positive Infinity | +∞         | Infinity (or +Infinity) |
| [parseInt()]()      | Not-a-Number      | NaN        | NaN                     |

---

### Constructor Properties

- [BigInt]()
- [Numbers]()

---

### Other Properties

- [Math]()

---

## Math

- `Math` is a function object or constructor object
- All properties and methods of `Math` are static
- `Math` works with the Number type. It doesn't work with `BigInt`

### Value Properties

| Value Properties                               | Description                                                | Math Symol   | Value                 |
| ---------------------------------------------- | ---------------------------------------------------------- | ------------ | --------------------- |
| [E](https://tc39.es/ecma262/#sec-math.e)       | the base of the natural logarithms                         | <var>e</var> | 2.7182818284590452354 |
| [LN10](https://tc39.es/ecma262/#sec-math.ln10) | the natural logarithm of 10                                |              | 2.302585092994046     |
| LN2                                            | the natural logarithm of 2                                 |              | 0.6931471805599453    |
| LOG10E                                         | the base-10 logarithm of <var>e</var>                      |              | 0.4342944819032518    |
| LOG2E                                          | the base-2 logarithm of <var>e</var>                       |              | 1.4426950408889634    |
| PI                                             | the ratio of the circumference of a circle to its diameter |              | 3.1415926535897932    |
| SQRT1_2                                        | the square root of ½                                       |              | 0.7071067811865476    |
| SQRT2                                          | the square root of 2                                       |              | 1.4142135623730951    |

### Function Properties

#### Number to Integer

| Function Properties | Description                                   | Math Symbol                     |
| ------------------- | --------------------------------------------- | ------------------------------- |
| round(x)            | Returns x rounded to its nearest integer      | \lfloor x + \frac{1}{2} \rfloor |
| ceil(x)             | Returns x rounded up to its nearest integer   | \lceil x \rceil                 |
| floor(x)            | Returns x rounded down to its nearest integer | \lfloor x \rfloor               |
| trunc(x)            | Returns the integer part of a number (x)      | \lfloor x + \frac{1}{2} \rfloor |

#### Trigonometric functions

| Function Properties | Description                                                                   | Alternative |
| ------------------- | ----------------------------------------------------------------------------- | ----------- |
| acos(x)             | Returns the arccosine of x, in radians                                        |             |
| acosh(x)            | Returns the hyperbolic arccosine of x                                         |             |
| asin(x)             | Returns the arcsine of x, in radians                                          |             |
| asinh(x)            | Returns the hyperbolic arcsine of x                                           |             |
| atan(x)             | Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians |             |
| atan2(y, x)         | Returns the arctangent of the quotient of its arguments                       |             |
| atanh(x)            | Returns the hyperbolic arctangent of x                                        |             |
| cos(x)              | Returns the cosine of x (x is in radians)                                     |             |
| cosh(x)             | Returns the hyperbolic cosine of x                                            |             |
| sin(x)              | Returns the sine of x (x is in radians)                                       |             |
| sinh(x)             | Returns the hyperbolic sine of x                                              |             |
| tan(x)              | Returns the tangent of an angle                                               |             |
| tanh(x)             | Returns the hyperbolic tangent of a number                                    |             |

#### Exponential function

| Function Properties | Description                                           | Alternative |
| ------------------- | ----------------------------------------------------- | ----------- |
| cbrt(x)             | Returns the cubic root of x                           |             |
| exp(x)              | Returns the value of Ex                               |             |
| log(x)              | Returns the natural logarithm (base E) of x           |             |
| pow(x, y)           | Returns the value of x to the power of y              | x \*\* y    |
| sign(x)             | Returns if x is negative, null or positive (-1, 0, 1) |             |
| sqrt(x)             | Returns the square root of x                          |             |

#### Maximum and Minimum

| Function Properties  | Description                               |
| -------------------- | ----------------------------------------- |
| max(x, y, z, ..., n) | Returns the number with the highest value |
| min(x, y, z, ..., n) | Returns the number with the lowest value  |

#### Others

| Function Properties | Description                             |
| ------------------- | --------------------------------------- |
| abs(x)              | Returns the absolute value of x         |
| random()            | Returns a random number between 0 and 1 |

## FAQ

## Translation

## Contributing

## License

[MIT](https://github.com/shenlu89/es-math/blob/main/LICENSE)
