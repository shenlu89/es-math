# ECMAScript in Mathematics

![](https://img.shields.io/github/issues/shenlu89/es-math)
![](https://img.shields.io/github/stars/shenlu89/es-math)
![](https://img.shields.io/github/license/shenlu89/es-math)

A collection of mathematical constants and functions implemented by TypeScript.

## Table of Contents

- [ECMAScript Global Object for Mathematics](#the-globe-object-of-ecmascript-for-mathematics)
  - [Value Properties](#value-properties)
  - [Function Properties](#function-properties)
  - [Constructor Properties](#constructor-properties)
    - [BigInt](#bigint)
    - [Numbers](#numbers)
  - [Other Properties](#other-properties)
    - [Math](#math)
- [License](#license)

## ECMAScript Global Object for Mathematics [:top:](#table-of-contents)

A plenty of built-in objects in ECMAScript can be directly used as mathematical constants and functions.

### Value Properties [:top:](#table-of-contents)

| Value Properties | Description       |                     Notation                      | Value (Number)       |
| ---------------- | ----------------- | :-----------------------------------------------: | -------------------- |
| [`Infinity`](https://tc39.es/ecma262/#sec-value-properties-of-the-global-object-infinity)   | positive Infinity | ![](https://latex.codecogs.com/svg.image?+\infty) | Infinity (+Infinity) |
| [`NaN`](https://tc39.es/ecma262/#sec-value-properties-of-the-global-object-nan)        | Not a Number      |   ![](https://latex.codecogs.com/svg.image?NaN)   | NaN                  |

### Function Properties [:top:](#table-of-contents)

| Function Properties           | Description                                                                              | Return Type      |
| ----------------------------- | ---------------------------------------------------------------------------------------- | ---------------- |
| [`isFinite(number)`](https://tc39.es/ecma262/#sec-isfinite-number)        | determine whether a number is a finite number or not (`Number.isFinite(Number(number))`) | boolean          |
| [`isNaN(number)`](https://tc39.es/ecma262/#sec-isnan-number)           | determine whether a value is NaN or not (`Number(number) !== Number(number)`)            | boolean          |
| [`parseFloat(string)`](https://tc39.es/ecma262/#sec-parsefloat-string)      | parse an argument to a floating point number                                             | number (float)   |
| [`parseInt(string, radix)`](https://tc39.es/ecma262/#sec-parseint-string-radix) | parse an argument to an integer of the specified radix                                   | number (integer) |

### Constructor Properties [:top:](#table-of-contents)

- [**BigInt**](https://tc39.es/ecma262/#sec-bigint-constructor-number-value): A built-in object whose constructor returns a bigint primitive (or **BigInt**)to represent whole numbers larger than 2^53 - 1 ([`Number.MAX_SAFE_INTEGER`]()), which is the largest number JavaScript can represent with a number primitive (or Number value).
- [**Numbers**](https://tc39.es/ecma262/#sec-number-constructor): A primitive wrapper object used to represent and manipulate numbers and its type is a [double-precision 64-bit binary format IEEE 754](https://en.wikipedia.org/wiki/Floating-point_arithmetic)

#### BigInt [:top:](#table-of-contents)

| Function Properties         | Description                                       | Return Type |
| --------------------------- | ------------------------------------------------- | ----------- |
| [`asIntN(bits, bigint)`](https://tc39.es/ecma262/#sec-bigint.asintn)  | clamp a BigInt value to a signed integer value    | bigint      |
| [`asUintN(bits, bigint)`](https://tc39.es/ecma262/#sec-bigint.asuintn) | clamp a BigInt value to an unsigned integer value | bigint      |

#### Numbers [:top:](#table-of-contents)

| Value Properties            | Description                                                                                                           |                           Notation                           | Value (Number)          |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------: | ----------------------- |
| [`EPSILON`](https://tc39.es/ecma262/#sec-number.epsilon)               | the magnitude of the difference between 1 and the smallest value greater than 1, which is approximately 2^-52         | ![](https://latex.codecogs.com/svg.image?\varepsilon&space;) | 2.220446049250313e-16   |
| ~~[`NaN`]()~~               | the value identicial to the global `NaN`                                                                              |        ![](https://latex.codecogs.com/svg.image?NaN)         | NaN                     |
| [`MAX_SAFE_INTEGER`](https://tc39.es/ecma262/#sec-number.max_safe_integer)      | the maximum safe integer in JavaScript                                                                                |      ![](https://latex.codecogs.com/svg.image?2^{53}-1)      | 9007199254740991        |
| [`MAX_VALUE`](https://tc39.es/ecma262/#sec-number.max_value)             | the largest positive representable number                                                                             |     ![](https://latex.codecogs.com/svg.image?2^{1024}-1)     | 1.7976931348623157e+308 |
| [`MIN_SAFE_INTEGER`](https://tc39.es/ecma262/#sec-number.min_safe_integer)      | the minimum safe integer in JavaScript (-2^53 + 1)                                                                    |     ![](https://latex.codecogs.com/svg.image?-2^{53}+1)      | -9007199254740991       |
| [`MIN_VALUE`](https://tc39.es/ecma262/#sec-number.min_value)             | the smallest positive representable number—that is, the positive number closest to zero (without actually being zero) |     ![](https://latex.codecogs.com/svg.image?2^{-1074})      | 5e-324                  |
| [`NEGATIVE_INFINITY`](https://tc39.es/ecma262/#sec-number.negative_infinity)     | negative infinity                                                                                                     |      ![](https://latex.codecogs.com/svg.image?-\infty)       | -Infinity               |
| ~~[`POSITIVE_INFINITY`](https://tc39.es/ecma262/#sec-number.positive_infinity)~~ | the value identicial to the global `Infinity`                                                                         |      ![](https://latex.codecogs.com/svg.image?+\infty)       | Infinity (+Infinity)    |

| Function Properties               | Description                                                                                          | Return Type      |
| --------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------- |
| [`isFinite(number)`](https://tc39.es/ecma262/#sec-number.isfinite)            | determine whether the passed value is a finite number or not                                         | boolean          |
| [`isInteger(number)`](https://tc39.es/ecma262/#sec-number.isinteger)           | determine whether the passed value is an integer or not                                              | boolean          |
| [`isNaN(number)`](https://tc39.es/ecma262/#sec-number.isnan)               | determine whether the passed value is NaN or not (`typeof number === 'number' && number !== number`) | boolean          |
| [`isSafeInteger(number)`](https://tc39.es/ecma262/#sec-number.issafeinteger)       | determine whether the passed value is a safe integer (between -2^53 + 1 and 2^53 - 1) or not         | boolean          |
| ~~[`parseFloat(string)`](https://tc39.es/ecma262/#sec-number.parsefloat)~~      | the function identicial to the global `parseFloat`                                                   | number (float)   |
| ~~[`parseInt(string, radix)`](https://tc39.es/ecma262/#sec-number.parseint)~~ | the function identicial to the global `parseInt`                                                     | number (integer) |

> **Note**:
>
> 1. `Number.isFinite(number)` does not convert its argument to a Number before determining whether it is `Infinity` or not, which differs from the global `isFinite(number)` function. So `Number.isNaN(number)` does it as well.

### Other Properties [:top:](#table-of-contents)

- [**Math**](https://tc39.es/ecma262/#sec-math-object): A a built-in object that has properties and methods for mathematical constants and functions. It’s not a function object. `Math` works with the `Number` type. It doesn't work with `BigInt`.

#### Math [:top:](#table-of-contents)

| Value Properties                                 | Description                                                          |                           Notation                           | Value (Number)        |
| ------------------------------------------------ | -------------------------------------------------------------------- | :----------------------------------------------------------: | --------------------- |
| [`E`](https://tc39.es/ecma262/#sec-math.e)       | the base of the natural logarithms                                   |         ![](https://latex.codecogs.com/svg.image?e)          | 2.7182818284590452354 |
| [`LN10`](https://tc39.es/ecma262/#sec-math.ln10) | the natural logarithm of 10                                          |     ![](<https://latex.codecogs.com/svg.image?\ln(10)>)      | 2.302585092994046     |
| [`LN2`](https://tc39.es/ecma262/#sec-math.ln2)                                        | the natural logarithm of 2                                           |      ![](<https://latex.codecogs.com/svg.image?\ln(2)>)      | 0.6931471805599453    |
| [`LOG10E`](https://tc39.es/ecma262/#sec-math.log10e)                                     | the base-10 logarithm of ![](https://latex.codecogs.com/svg.image?e) |   ![](<https://latex.codecogs.com/svg.image?\log_{10}(e)>)   | 0.4342944819032518    |
| [`LOG2E`](https://tc39.es/ecma262/#sec-math.log2e)                                      | the base-2 logarithm of ![](https://latex.codecogs.com/svg.image?e)  |   ![](<https://latex.codecogs.com/svg.image?\log_{2}(e)>)    | 1.4426950408889634    |
| [`PI`](https://tc39.es/ecma262/#sec-math.pi)                                         | the ratio of the circumference of a circle to its diameter           |        ![](https://latex.codecogs.com/svg.image?\pi)         | 3.1415926535897932    |
| [`SQRT1_2`](https://tc39.es/ecma262/#sec-math.sqrt1_2)                                    | the square root of ½                                                 | ![](https://latex.codecogs.com/svg.image?\frac{1}{\sqrt{2}}) | 0.7071067811865476    |
| [`SQRT2`](https://tc39.es/ecma262/#sec-math.sqrt2)                                      | the square root of 2                                                 |      ![](https://latex.codecogs.com/svg.image?\sqrt{2})      | 1.4142135623730951    |

| Function Properties           | Description                                                                     |                                                                                Notation                                                                                | Return Type |
| ----------------------------- | ------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------: | ----------- |
| [`abs(x)`](https://tc39.es/ecma262/#sec-math.abs)                  | return the absolute value of _x_                                                |                                                 ![](https://latex.codecogs.com/svg.image?%5Cleft%7C%20x%20%5Cright%7C)                                                 | number      |
| [`acos(x)`](https://tc39.es/ecma262/#sec-math.acos)                 | return the inverse cosine of _x_                                                |                                                         ![](<https://latex.codecogs.com/svg.image?\arccos(x)>)                                                         | number      |
| [`acosh(x)`](https://tc39.es/ecma262/#sec-math.acosh)                | return the inverse hyperbolic cosine of _x_                                     |                                                  ![](<https://latex.codecogs.com/svg.image?\operatorname{arcosh}(x)>)                                                  | number      |
| [`asin(x)`](https://tc39.es/ecma262/#sec-math.asin)                 | return the inverse sine of _x_                                                  |                                                         ![](<https://latex.codecogs.com/svg.image?\arcsin(x)>)                                                         | number      |
| [`asinh(x)`](https://tc39.es/ecma262/#sec-math.asinh)                | return the inverse hyperbolic sine of _x_                                       |                                                  ![](<https://latex.codecogs.com/svg.image?\operatorname{arsinh}(x)>)                                                  | number      |
| [`atan(x)`](https://tc39.es/ecma262/#sec-math.atan)                 | return the inverse tangent of _x_                                               |                                                         ![](<https://latex.codecogs.com/svg.image?\arctan(x)>)                                                         | number      |
| [`atanh(x)`](https://tc39.es/ecma262/#sec-math.atanh)                | return the inverse hyperbolic tangent of _x_                                    |                                                 ![](<https://latex.codecogs.com/svg.image?\operatorname{arctanh}(x)>)                                                  | number      |
| [`atan2(y, x)`](https://tc39.es/ecma262/#sec-math.atan2)             | return the inverse tangent of the quotient _y / x_ of the arguments _y_ and _x_ |                                                    ![](<https://latex.codecogs.com/svg.image?arctan(\frac{y}{x})>)                                                     | number      |
| [`cbrt(x)`](https://tc39.es/ecma262/#sec-math.cbrt)                 | return the cube root of _x_                                                     |                                                         ![](https://latex.codecogs.com/svg.image?\sqrt[3]{x})                                                          | number      |
| [`ceil(x)`](https://tc39.es/ecma262/#sec-math.ceil)                 | return the smallest integer greater than or equal to _x_                        |                                                 ![](https://latex.codecogs.com/svg.image?\lceil&space;x&space;\rceil)                                                  | number      |
| [`clz32(x)`](https://tc39.es/ecma262/#sec-math.clz32)                | return the number of leading zero bits of the 32-bit integer _x_                |                                                                                                                                                                        | number      |
| [`cos(x)`](https://tc39.es/ecma262/#sec-math.cos)                  | return the cosine of _x_                                                        |                                                          ![](<https://latex.codecogs.com/svg.image?\cos(x)>)                                                           | number      |
| [`cosh(x)`](https://tc39.es/ecma262/#sec-math.cosh)                 | return the hyperbolic cosine of _x_                                             |                                              ![](https://latex.codecogs.com/svg.image?\frac{e^x&space;+&space;e^{-x}}{2})                                              | number      |
| [`exp(x)`](https://tc39.es/ecma262/#sec-math.exp)                  | return the exponential function of _x_                                          |                                                             ![](https://latex.codecogs.com/svg.image?e^x)                                                              | number      |
| [`expm1(x)`](https://tc39.es/ecma262/#sec-math.expm1)                | return the result of subtracting 1 from the exponential function of _x_         |                                                     ![](https://latex.codecogs.com/svg.image?e^x&space;-&space;1)                                                      | number      |
| [`floor(x)`](https://tc39.es/ecma262/#sec-math.floor)                | return the largest integer less than or equal to _x_                            |                                                ![](https://latex.codecogs.com/svg.image?\lfloor&space;x&space;\rfloor)                                                 | number      |
| [`fround(x)`](https://tc39.es/ecma262/#sec-math.fround)               | return the nearest single precision float representation of _x_                 |                                                                                                                                                                        | number      |
| [`hypot(...args)`](https://tc39.es/ecma262/#sec-math.hypot)          | return the square root of the sum of squares of its arguments.                  |                                                 ![](https://latex.codecogs.com/svg.image?\sqrt{\sum_{i=1}^{n}{x_n^2}})                                                 | number      |
| [`imul(x, y)`](https://tc39.es/ecma262/#sec-math.imul)              | return the result of the 32-bit integer multiplication of _x_ and _y_.          |                                                                                                                                                                        | number      |
| [`log(x)`](https://tc39.es/ecma262/#sec-math.log)                  | return the natural logarithm of _x_                                             |                                                           ![](<https://latex.codecogs.com/svg.image?\ln(x)>)                                                           | number      |
| [`log1p(x)`](https://tc39.es/ecma262/#sec-math.log1p)                | return the natural logarithm of 1 + _x_                                         |                                                      ![](<https://latex.codecogs.com/svg.image?%5Cln(1%20+%20x)>)                                                      | number      |
| [`log10(x)`](https://tc39.es/ecma262/#sec-math.log10)                | return the base 10 logarithm of _x_                                             |                                                      ![](https://latex.codecogs.com/svg.image?\log_{10}&space;x)                                                       | number      |
| [`log2(x)`](https://tc39.es/ecma262/#sec-math.log2)                 | return the base 2 logarithm of _x_                                              |                                                       ![](https://latex.codecogs.com/svg.image?\log_{2}&space;x)                                                       | number      |
| [`max(...args)`](https://tc39.es/ecma262/#sec-math.max)            | return the largest of the resulting values                                      | ![](<https://latex.codecogs.com/svg.image?%5Cmax%20%5Cleft%20%5C%7B%20f%5Cleft%20(%20x_1%20%5Cright%20)%20,...,f%5Cleft%20(%20x_n%20%5Cright%20)%20%5Cright%20%5C%7D>) | number      |
| [`min(...args)`](https://tc39.es/ecma262/#sec-math.min)            | return the smallest of the resulting values                                     | ![](<https://latex.codecogs.com/svg.image?%5Cmin%20%5Cleft%20%5C%7B%20f%5Cleft%20(%20x_1%20%5Cright%20)%20,...,f%5Cleft%20(%20x_n%20%5Cright%20)%20%5Cright%20%5C%7D>) | number      |
| ~~[`pow(base, exponent)`](https://tc39.es/ecma262/#sec-math.pow)~~ | return base _x_ to the exponent power _y_ (that is, _x_^_y_)                    |                                                             ![](https://latex.codecogs.com/svg.image?x^y)                                                              | number      |
| [`random()`](https://tc39.es/ecma262/#sec-math.random)                | return a pseudo-random number between 0 and 1                                   |      <img src="https://latex.codecogs.com/svg.image?x&space;\in&space;\left&space;(0,&space;1&space;&space;\right&space;]" title="x \in \left (0, 1 \right ]" />       | number      |
| [`round(x)`](https://tc39.es/ecma262/#sec-math.round)                | return the value of the number x rounded to the nearest integer                 |                                   ![](https://latex.codecogs.com/svg.image?\lfloor&space;x&space;+&space;\frac{1}{2}&space;\rfloor)                                    | number      |
| [`sign(x)`](https://tc39.es/ecma262/#sec-math.sign)                 | return the sign of the x, indicating whether x is positive, negative, or zero   |                                                          ![](https://latex.codecogs.com/svg.image?\pm&space;)                                                          | number      |
| [`sin(x)`](https://tc39.es/ecma262/#sec-math.sin)                  | return the sine of _x_                                                          |                                                         ![](https://latex.codecogs.com/svg.image?\sin&space;x)                                                         | number      |
| [`sinh(x)`](https://tc39.es/ecma262/#sec-math.sinh)                 | return the hyperbolic sine of _x_                                               |                                              ![](https://latex.codecogs.com/svg.image?\frac{e^x&space;-&space;e^{-x}}{2})                                              | number      |
| [`sqrt(x)`](https://tc39.es/ecma262/#sec-math.sqrt)                 | return the positive square root of _x_                                          |                                                           ![](https://latex.codecogs.com/svg.image?\sqrt{x})                                                           | number      |
| [`tan(x)`](https://tc39.es/ecma262/#sec-math.tan)                  | return the tangent of _x_                                                       |                                                          ![](<https://latex.codecogs.com/svg.image?\tan(x)>)                                                           | number      |
| [`tanh(x)`](https://tc39.es/ecma262/#sec-math.tanh)                 | return the hyperbolic tangent of _x_                                            |                                           ![](https://latex.codecogs.com/svg.image?\frac{e^{2x}&space;-&space;1}{e^{2x}+1})                                            | number      |
| ~~[`trunc(x)`](https://tc39.es/ecma262/#sec-math.trunc)~~            | return the integer portion of _x_, removing any fractional digits               |                                                                                                                                                                        | number      |

> **Note**:
>
> 1. `x ** y` is recommended to implement _x_ ^ _y_ instead of `Math.pow(x, y)`.
> 2. `~~x` is recommended to get the integer part of the given number instead of `Math.trunc(x)`.

## License [:top:](#table-of-contents)

[MIT](https://github.com/shenlu89/es-math/blob/main/LICENSE)
