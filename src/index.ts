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

/**
 * 
 */

// Constants

const TAU = 2 * PI

// Functions

const circle_perimeter = (radius:number):number => {
  return radius * TAU
}