/**
 * ======================
 * Author: Shen Lu
 * Name: ECMAScript in Mathematics
 * License: MIT
 * URL: https://github.com/shenlu89/es-math
 * ======================
 * A collection of mathematical constants and functions implemented by JavaScript and TypeScript (ESNext).
 */

/**
 * Constructor Properties
 * 1. BigInt
 * 2. Number
 */

// BigInt
export const { asIntN, asUintN } = BigInt

// Number
export const n_isFinite = Number.isFinite
export const n_isNaN = Number.isNaN

export const {
  EPSILON,
  isInteger,
  isSafeInteger,
  MAX_SAFE_INTEGER,
  MAX_VALUE,
  MIN_SAFE_INTEGER,
  MIN_VALUE,
  // NaN, // it is identical to global NaN value
  NEGATIVE_INFINITY,
  // parseFloat, // it is identical to global parseFloat function
  // parseInt, // it is identical to global parseInt function
  // POSITIVE_INFINITY, // it is identical to global POSITIVE_INFINITY value
} = Number

/**
 * Other Properties
 * 1. Math
 */

// Math
export const {
  // value properties
  E,
  LN10,
  LN2,
  LOG10E,
  LOG2E,
  PI,
  SQRT1_2,
  SQRT2,
  // function properties
  abs,
  acos,
  acosh,
  asin,
  asinh,
  atan,
  atanh,
  atan2,
  cbrt,
  ceil,
  clz32,
  cos,
  cosh,
  exp,
  expm1,
  floor,
  fround,
  hypot,
  imul,
  log,
  log1p,
  log10,
  log2,
  max,
  min,
  // pow, // x ** y is recommended
  random,
  round,
  sign,
  sin,
  sinh,
  sqrt,
  tan,
  tanh,
  // trunc, // ~~x is recommended
} = Math
