# ECMAScript in Mathematics

> A collection of mathematical constants and functions implemented by JavaScript and TypeScript (ESNext).

## Table of Contents

- [The Globe Object of ECMAScript for Mathematics](#the-globe-object-of-ecmascript-for-mathematics)
  - [Value Properties](#value-properties)
  - [Function Properties](#function-properties)
  - [Constructor Properties](#constructor-properties)
    - [BigInt](#bigint)
    - [Numbers](#numbers)
  - [Other Properties](#other-properties)
    - [Math](#math)

## The Global Object of ECMAScript for Mathematics [⬆](#table-of-contents)

A plenty of built-in objects in ECMAScript can be directly used as mathematical constants and functions.

### Value Properties [⬆](#table-of-contents)

| Value Properties | Description       | Notation | Value                |
| ---------------- | ----------------- | :------: | -------------------- |
| [`Infinity`]()   | positive Infinity |    +∞    | Infinity (+Infinity) |
| [`NaN`]()        | Not-a-Number      |   NaN    | NaN                  |

### Function Properties [⬆](#table-of-contents)

| Function Properties           | Description                                            | Return           |
| ----------------------------- | ------------------------------------------------------ | ---------------- |
| [`isFinite(number)`]()        | determine whether a number is a finite number or not   | boolean          |
| [`isNaN(number)`]()           | determine whether a value is NaN or not                | boolean          |
| [`parseFloat(string)`]()      | parse an argument to a floating point number           | number (float)   |
| [`parseInt(string, radix)`]() | parse an argument to an integer of the specified radix | number (integer) |

### Constructor Properties [⬆](#table-of-contents)

- [BigInt]()
- [Numbers]()

#### BigInt

| Function Properties         | Description                                        | Notation | Return |
| --------------------------- | -------------------------------------------------- | :------: | ------ |
| [`asIntN(bits, bigint)`]()  | clamps a BigInt value to a signed integer value    |          | bigint |
| [`asUintN(bits, bigint)`]() | clamps a BigInt value to an unsigned integer value |          | bigint |

#### Numbers

### Other Properties [⬆](#table-of-contents)

- [Math]()

#### Math [⬆](#table-of-contents)

- `Math` is not a function object or constructor object
- All properties and methods of `Math` are static
- `Math` works with the `Number` type. It doesn't work with `BigInt`

| Value Properties                                 | Description                                                     |                Notation                | Value                 |
| ------------------------------------------------ | --------------------------------------------------------------- | :------------------------------------: | --------------------- |
| [`E`](https://tc39.es/ecma262/#sec-math.e)       | the base of the natural logarithms                              | <var style="font-style:italic">e</var> | 2.7182818284590452354 |
| [`LN10`](https://tc39.es/ecma262/#sec-math.ln10) | the natural logarithm of 10                                     |                                        | 2.302585092994046     |
| [`LN2`]()                                        | the natural logarithm of 2                                      |                                        | 0.6931471805599453    |
| [`LOG10E`]()                                     | the base-10 logarithm of <var style="font-style:italic">e</var> |                                        | 0.4342944819032518    |
| [`LOG2E`]()                                      | the base-2 logarithm of <var style="font-style:italic">e</var>  |                                        | 1.4426950408889634    |
| [`PI`]()                                         | the ratio of the circumference of a circle to its diameter      |                                        | 3.1415926535897932    |
| [`SQRT1_2`]()                                    | the square root of ½                                            |                                        | 0.7071067811865476    |
| [`SQRT2`]()                                      | the square root of 2                                            |                                        | 1.4142135623730951    |

| Function Properties      | Description | Notation | Return |
| ------------------------ | ----------- | :------: | ------ |
| [`abs(x)`]()             |             |          |        |
| [`acos(x)`]()            |             |          |        |
| [`acosh(x)`]()           |             |          |        |
| [`asin(x)`]()            |             |          |        |
| [`asinh(x)`]()           |             |          |        |
| [`atan(x)`]()            |             |          |        |
| [`atanh(x)`]()           |             |          |        |
| [`atan2(y,x)`]()         |             |          |        |
| [`cbrt(x)`]()            |             |          |        |
| [`ceil(x)`]()            |             |          |        |
| [`clz32(x)`]()           |             |          |        |
| [`cos(x)`]()             |             |          |        |
| [`cosh(x)`]()            |             |          |        |
| [`exp(x)`]()             |             |          |        |
| [`expm1(x)`]()           |             |          |        |
| [`floor(x)`]()           |             |          |        |
| [`fround(x)`]()          |             |          |        |
| [`hypot(...args)`]()     |             |          |        |
| [`imul(x,y)`]()          |             |          |        |
| [`log(x)`]()             |             |          |        |
| [`log1p(x)`]()           |             |          |        |
| [`log10(x)`]()           |             |          |        |
| [`log2(x)`]()            |             |          |        |
| [`max(...args)`]()       |             |          |        |
| [`min(...args)`]()       |             |          |        |
| [`pow(base,exponent)`]() |             |          |        |
| [`random()`]()           |             |          |        |
| [`round(x)`]()           |             |          |        |
| [`sign(x)`]()            |             |          |        |
| [`sin(x)`]()             |             |          |        |
| [`sinh(x)`]()            |             |          |        |
| [`sqrt(x)`]()            |             |          |        |
| [`tan(x)`]()             |             |          |        |
| [`tanh(x)`]()            |             |          |        |
| [`trunc(x)`]()           |             |          |        |

## License

[MIT](https://github.com/shenlu89/es-math/blob/main/LICENSE)
