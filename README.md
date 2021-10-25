# Mathematical Constants and Functions in ECMAScript

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

## The Global Object of ECMAScript for Mathematics [[top](#table-of-contents)]

A plenty of built-in objects in ECMAScript can be directly used as mathematical constants and functions.

### Value Properties [[top](#table-of-contents)]

| Value Properties | Description       | Notation | Value                |
| ---------------- | ----------------- | :------: | -------------------- |
| [`Infinity`]()   | positive Infinity |    +∞    | Infinity (+Infinity) |
| [`NaN`]()        | Not-a-Number      |   NaN    | NaN                  |

### Function Properties [[top](#table-of-contents)]

| Function Properties | Description                                            |    Argument     | Return           |
| ------------------- | ------------------------------------------------------ | :-------------: | ---------------- |
| [`isFinite()`]()    | determine whether a number is a finite number or not   |    _number_     | Boolean          |
| [`isNaN()`]()       | determine whether a value is NaN or not                |    _number_     | Boolean          |
| [`parseFloat()`]()  | parse an argument to a floating point number           |    _string_     | Number (float)   |
| [`parseInt()`]()    | parse an argument to an integer of the specified radix | _string, radix_ | Number (integer) |

### Constructor Properties [[top](#table-of-contents)]

- [BigInt]()
- [Numbers]()

#### BigInt

#### Numbers

### Other Properties [[top](#table-of-contents)]

- [Math]()

#### Math [[top](#table-of-contents)]

- `Math` is not a function object or constructor object
- All properties and methods of `Math` are static
- `Math` works with the `Number` type. It doesn't work with `BigInt`

| Properties                                     | Description                                                     |                Notation                | Value                 |
| ---------------------------------------------- | --------------------------------------------------------------- | :------------------------------------: | --------------------- |
| [`E`](https://tc39.es/ecma262/#sec-math.e)     | the base of the natural logarithms                              | <var style="font-style:italic">e</var> | 2.7182818284590452354 |
| [LN10](https://tc39.es/ecma262/#sec-math.ln10) | the natural logarithm of 10                                     |                                        | 2.302585092994046     |
| LN2                                            | the natural logarithm of 2                                      |                                        | 0.6931471805599453    |
| LOG10E                                         | the base-10 logarithm of <var style="font-style:italic">e</var> |                                        | 0.4342944819032518    |
| LOG2E                                          | the base-2 logarithm of <var style="font-style:italic">e</var>  |                                        | 1.4426950408889634    |
| PI                                             | the ratio of the circumference of a circle to its diameter      |                                        | 3.1415926535897932    |
| SQRT1_2                                        | the square root of ½                                            |                                        | 0.7071067811865476    |
| SQRT2                                          | the square root of 2                                            |                                        | 1.4142135623730951    |

## FAQ

## Contributing

## License

[MIT](https://github.com/shenlu89/es-math/blob/main/LICENSE)
