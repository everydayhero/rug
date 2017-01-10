import Color from 'color'
import curry from 'lodash/fp/curry'

import { base } from './constants.js'

/**
 * General Utilities
 */

const throwError = (msg) => { throw new Error(msg) }

export const isInRange = curry((min, max, num) =>
  (num < min || num > max)
    ? throwError(`Please provide a number greater than ${min} and less than ${max}`)
    : num
)

/**
 * Size Utilities
 */

export const calcExponent = curry((initial, exponent) =>
  Math.pow(initial, Math.round(exponent)) / base
)

export const calcModularScale = curry((scale, exponent) =>
  Math.round(base * Math.pow(scale, Math.round(exponent))) / base
)

export const addUnit = curry((unit, value) => `${value}${unit}`)

export const rem = addUnit('rem')
export const em = addUnit('em')

/**
 * Color Utilities
 */

export const opacify = curry((decimal, colorStr) => Color(colorStr).clearer(1 - decimal).rgbString())
export const whiten = curry((decimal, colorStr) => Color(colorStr).whiten(decimal).rgbString())
export const blacken = curry((decimal, colorStr) => Color(colorStr).blacken(decimal).rgbString())