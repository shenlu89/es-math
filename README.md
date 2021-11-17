# ECMAScript in Mathematics

![](https://img.shields.io/github/issues/shenlu89/es-math)
![](https://img.shields.io/github/stars/shenlu89/es-math)
![](https://img.shields.io/github/license/shenlu89/es-math)

> A collection of mathematical constants and functions implemented by JavaScript (ESNext).

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
| [`Infinity`]()   | positive Infinity | ![](https://latex.codecogs.com/svg.image?+\infty) | Infinity (+Infinity) |
| [`NaN`]()        | Not a Number      |   ![](https://latex.codecogs.com/svg.image?NaN)   | NaN                  |

### Function Properties [:top:](#table-of-contents)

| Function Properties           | Description                                                                              | Return Type      |
| ----------------------------- | ---------------------------------------------------------------------------------------- | ---------------- |
| [`isFinite(number)`]()        | determine whether a number is a finite number or not (`Number.isFinite(Number(number))`) | boolean          |
| [`isNaN(number)`]()           | determine whether a value is NaN or not (`Number(number) !== Number(number)`)            | boolean          |
| [`parseFloat(string)`]()      | parse an argument to a floating point number                                             | number (float)   |
| [`parseInt(string, radix)`]() | parse an argument to an integer of the specified radix                                   | number (integer) |

### Constructor Properties [:top:](#table-of-contents)

- [**BigInt**](): A built-in object whose constructor returns a bigint primitive (or **BigInt**)to represent whole numbers larger than 2^53 - 1 ([`Number.MAX_SAFE_INTEGER`]()), which is the largest number JavaScript can represent with a number primitive (or Number value).
- [**Numbers**](): A primitive wrapper object used to represent and manipulate numbers and its type is a [double-precision 64-bit binary format IEEE 754](https://en.wikipedia.org/wiki/Floating-point_arithmetic)

#### BigInt [:top:](#table-of-contents)

| Function Properties         | Description                                       | Return Type |
| --------------------------- | ------------------------------------------------- | ----------- |
| [`asIntN(bits, bigint)`]()  | clamp a BigInt value to a signed integer value    | bigint      |
| [`asUintN(bits, bigint)`]() | clamp a BigInt value to an unsigned integer value | bigint      |

#### Numbers [:top:](#table-of-contents)

| Value Properties            | Description                                                                                                           |                           Notation                           | Value (Number)          |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------: | ----------------------- |
| [`EPSILON`]()               | the magnitude of the difference between 1 and the smallest value greater than 1, which is approximately 2^-52         | ![](https://latex.codecogs.com/svg.image?\varepsilon&space;) | 2.220446049250313e-16   |
| ~~[`NaN`]()~~               | the value identicial to the global `NaN`                                                                              |        ![](https://latex.codecogs.com/svg.image?NaN)         | NaN                     |
| [`MAX_SAFE_INTEGER`]()      | the maximum safe integer in JavaScript                                                                                |      ![](https://latex.codecogs.com/svg.image?2^{53}-1)      | 9007199254740991        |
| [`MAX_VALUE`]()             | the largest positive representable number                                                                             |     ![](https://latex.codecogs.com/svg.image?2^{1024}-1)     | 1.7976931348623157e+308 |
| [`MIN_SAFE_INTEGER`]()      | the minimum safe integer in JavaScript (-2^53 + 1)                                                                    |     ![](https://latex.codecogs.com/svg.image?-2^{53}+1)      | -9007199254740991       |
| [`MIN_VALUE`]()             | the smallest positive representable number—that is, the positive number closest to zero (without actually being zero) |     ![](https://latex.codecogs.com/svg.image?2^{-1074})      | 5e-324                  |
| [`NEGATIVE_INFINITY`]()     | negative infinity                                                                                                     |      ![](https://latex.codecogs.com/svg.image?-\infty)       | -Infinity               |
| ~~[`POSITIVE_INFINITY`]()~~ | the value identicial to the global `Infinity`                                                                         |      ![](https://latex.codecogs.com/svg.image?+\infty)       | Infinity (+Infinity)    |

| Function Properties               | Description                                                                                          | Return Type      |
| --------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------- |
| [`isFinite(number)`]()            | determine whether the passed value is a finite number or not                                         | boolean          |
| [`isInteger(number)`]()           | determine whether the passed value is an integer or not                                              | boolean          |
| [`isNaN(number)`]()               | determine whether the passed value is NaN or not (`typeof number === 'number' && number !== number`) | boolean          |
| [`isSafeInteger(number)`]()       | determine whether the passed value is a safe integer (between -2^53 + 1 and 2^53 - 1) or not         | boolean          |
| ~~[`parseFloat(string)`]()~~      | the function identicial to the global `parseFloat`                                                   | number (float)   |
| ~~[`parseInt(string, radix)`]()~~ | the function identicial to the global `parseInt`                                                     | number (integer) |

> **Note**:
>
> 1. `Number.isFinite(number)` does not convert its argument to a Number before determining whether it is `Infinity` or not, which differs from the global `isFinite(number)` function. So `Number.isNaN(number)` does it as well.

### Other Properties [:top:](#table-of-contents)

- [**Math**](): A a built-in object that has properties and methods for mathematical constants and functions. It’s not a function object. `Math` works with the `Number` type. It doesn't work with `BigInt`.

#### Math [:top:](#table-of-contents)

| Value Properties                                 | Description                                                          |                           Notation                           | Value (Number)        |
| ------------------------------------------------ | -------------------------------------------------------------------- | :----------------------------------------------------------: | --------------------- |
| [`E`](https://tc39.es/ecma262/#sec-math.e)       | the base of the natural logarithms                                   |         ![](https://latex.codecogs.com/svg.image?e)          | 2.7182818284590452354 |
| [`LN10`](https://tc39.es/ecma262/#sec-math.ln10) | the natural logarithm of 10                                          |     ![](<https://latex.codecogs.com/svg.image?\ln(10)>)      | 2.302585092994046     |
| [`LN2`]()                                        | the natural logarithm of 2                                           |      ![](<https://latex.codecogs.com/svg.image?\ln(2)>)      | 0.6931471805599453    |
| [`LOG10E`]()                                     | the base-10 logarithm of ![](https://latex.codecogs.com/svg.image?e) |   ![](<https://latex.codecogs.com/svg.image?\log_{10}(e)>)   | 0.4342944819032518    |
| [`LOG2E`]()                                      | the base-2 logarithm of ![](https://latex.codecogs.com/svg.image?e)  |   ![](<https://latex.codecogs.com/svg.image?\log_{2}(e)>)    | 1.4426950408889634    |
| [`PI`]()                                         | the ratio of the circumference of a circle to its diameter           |        ![](https://latex.codecogs.com/svg.image?\pi)         | 3.1415926535897932    |
| [`SQRT1_2`]()                                    | the square root of ½                                                 | ![](https://latex.codecogs.com/svg.image?\frac{1}{\sqrt{2}}) | 0.7071067811865476    |
| [`SQRT2`]()                                      | the square root of 2                                                 |      ![](https://latex.codecogs.com/svg.image?\sqrt{2})      | 1.4142135623730951    |

| Function Properties           | Description                                                                     |                                                                                Notation                                                                                | Return Type |
| ----------------------------- | ------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------: | ----------- |
| [`abs(x)`]()                  | return the absolute value of _x_                                                |                                                 ![](https://latex.codecogs.com/svg.image?%5Cleft%7C%20x%20%5Cright%7C)                                                 | number      |
| [`acos(x)`]()                 | return the inverse cosine of _x_                                                |                                                         ![](<https://latex.codecogs.com/svg.image?\arccos(x)>)                                                         | number      |
| [`acosh(x)`]()                | return the inverse hyperbolic cosine of _x_                                     |                                                  ![](<https://latex.codecogs.com/svg.image?\operatorname{arcosh}(x)>)                                                  | number      |
| [`asin(x)`]()                 | return the inverse sine of _x_                                                  |                                                         ![](<https://latex.codecogs.com/svg.image?\arcsin(x)>)                                                         | number      |
| [`asinh(x)`]()                | return the inverse hyperbolic sine of _x_                                       |                                                  ![](<https://latex.codecogs.com/svg.image?\operatorname{arsinh}(x)>)                                                  | number      |
| [`atan(x)`]()                 | return the inverse tangent of _x_                                               |                                                         ![](<https://latex.codecogs.com/svg.image?\arctan(x)>)                                                         | number      |
| [`atanh(x)`]()                | return the inverse hyperbolic tangent of _x_                                    |                                                 ![](<https://latex.codecogs.com/svg.image?\operatorname{arctanh}(x)>)                                                  | number      |
| [`atan2(y, x)`]()             | return the inverse tangent of the quotient _y / x_ of the arguments _y_ and _x_ |                                                    ![](<https://latex.codecogs.com/svg.image?arctan(\frac{y}{x})>)                                                     | number      |
| [`cbrt(x)`]()                 | return the cube root of _x_                                                     |                                                         ![](https://latex.codecogs.com/svg.image?\sqrt[3]{x})                                                          | number      |
| [`ceil(x)`]()                 | return the smallest integer greater than or equal to _x_                        |                                                 ![](https://latex.codecogs.com/svg.image?\lceil&space;x&space;\rceil)                                                  | number      |
| [`clz32(x)`]()                | return the number of leading zero bits of the 32-bit integer _x_                |                                                                                                                                                                        | number      |
| [`cos(x)`]()                  | return the cosine of _x_                                                        |                                                          ![](<https://latex.codecogs.com/svg.image?\cos(x)>)                                                           | number      |
| [`cosh(x)`]()                 | return the hyperbolic cosine of _x_                                             |                                              ![](https://latex.codecogs.com/svg.image?\frac{e^x&space;+&space;e^{-x}}{2})                                              | number      |
| [`exp(x)`]()                  | return the exponential function of _x_                                          |                                                             ![](https://latex.codecogs.com/svg.image?e^x)                                                              | number      |
| [`expm1(x)`]()                | return the result of subtracting 1 from the exponential function of _x_         |                                                     ![](https://latex.codecogs.com/svg.image?e^x&space;-&space;1)                                                      | number      |
| [`floor(x)`]()                | return the largest integer less than or equal to _x_                            |                                                ![](https://latex.codecogs.com/svg.image?\lfloor&space;x&space;\rfloor)                                                 | number      |
| [`fround(x)`]()               | return the nearest single precision float representation of _x_                 |                                                                                                                                                                        | number      |
| [`hypot(...args)`]()          | return the square root of the sum of squares of its arguments.                  |                                                 ![](https://latex.codecogs.com/svg.image?\sqrt{\sum_{i=1}^{n}{x_n^2}})                                                 | number      |
| [`imul(x, y)`]()              | return the result of the 32-bit integer multiplication of _x_ and _y_.          |                                                                                                                                                                        | number      |
| [`log(x)`]()                  | return the natural logarithm of _x_                                             |                                                           ![](<https://latex.codecogs.com/svg.image?\ln(x)>)                                                           | number      |
| [`log1p(x)`]()                | return the natural logarithm of 1 + _x_                                         |                                                      ![](<https://latex.codecogs.com/svg.image?%5Cln(1%20+%20x)>)                                                      | number      |
| [`log10(x)`]()                | return the base 10 logarithm of _x_                                             |                                                      ![](https://latex.codecogs.com/svg.image?\log_{10}&space;x)                                                       | number      |
| [`log2(x)`]()                 | return the base 2 logarithm of _x_                                              |                                                       ![](https://latex.codecogs.com/svg.image?\log_{2}&space;x)                                                       | number      |
| [`max(...args)`]()            | return the largest of the resulting values                                      | ![](<https://latex.codecogs.com/svg.image?%5Cmax%20%5Cleft%20%5C%7B%20f%5Cleft%20(%20x_1%20%5Cright%20)%20,...,f%5Cleft%20(%20x_n%20%5Cright%20)%20%5Cright%20%5C%7D>) | number      |
| [`min(...args)`]()            | return the smallest of the resulting values                                     | ![](<https://latex.codecogs.com/svg.image?%5Cmin%20%5Cleft%20%5C%7B%20f%5Cleft%20(%20x_1%20%5Cright%20)%20,...,f%5Cleft%20(%20x_n%20%5Cright%20)%20%5Cright%20%5C%7D>) | number      |
| ~~[`pow(base, exponent)`]()~~ | return base _x_ to the exponent power _y_ (that is, _x_^_y_)                    |                                                             ![](https://latex.codecogs.com/svg.image?x^y)                                                              | number      |
| [`random()`]()                | return a pseudo-random number between 0 and 1                                   |      <img src="https://latex.codecogs.com/svg.image?x&space;\in&space;\left&space;(0,&space;1&space;&space;\right&space;]" title="x \in \left (0, 1 \right ]" />       | number      |
| [`round(x)`]()                | return the value of the number x rounded to the nearest integer                 |                                   ![](https://latex.codecogs.com/svg.image?\lfloor&space;x&space;+&space;\frac{1}{2}&space;\rfloor)                                    | number      |
| [`sign(x)`]()                 | return the sign of the x, indicating whether x is positive, negative, or zero   |                                                          ![](https://latex.codecogs.com/svg.image?\pm&space;)                                                          | number      |
| [`sin(x)`]()                  | return the sine of _x_                                                          |                                                         ![](https://latex.codecogs.com/svg.image?\sin&space;x)                                                         | number      |
| [`sinh(x)`]()                 | return the hyperbolic sine of _x_                                               |                                              ![](https://latex.codecogs.com/svg.image?\frac{e^x&space;-&space;e^{-x}}{2})                                              | number      |
| [`sqrt(x)`]()                 | return the positive square root of _x_                                          |                                                           ![](https://latex.codecogs.com/svg.image?\sqrt{x})                                                           | number      |
| [`tan(x)`]()                  | return the tangent of _x_                                                       |                                                          ![](<https://latex.codecogs.com/svg.image?\tan(x)>)                                                           | number      |
| [`tanh(x)`]()                 | return the hyperbolic tangent of _x_                                            |                                           ![](https://latex.codecogs.com/svg.image?\frac{e^{2x}&space;-&space;1}{e^{2x}+1})                                            | number      |
| ~~[`trunc(x)`]()~~            | return the integer portion of _x_, removing any fractional digits               |                                                                                                                                                                        | number      |

> **Note**:
>
> 1. `x ** y` is recommended to implement _x_ ^ _y_ instead of `Math.pow(x, y)`.
> 2. `~~x` is recommended to get the integer part of the given number instead of `Math.trunc(x)`.

## License [:top:](#table-of-contents)

[MIT](https://github.com/shenlu89/es-math/blob/main/LICENSE)
