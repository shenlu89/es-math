/**
 * ======================
 * Author: Shen Lu
 * Name: ECMAScript in Mathematics
 * License: MIT
 * URL: https://github.com/shenlu89/es-math
 * ======================
 * A collection of mathematical constants and functions implemented by JavaScript and TypeScript (ESNext).
 */

import { PI } from './global'

// Common Constants

const TAU = 2 * PI

// Common Functions

const circle_perimeter = (radius) => {
  return radius * TAU
}

export { TAU, circle_perimeter }
