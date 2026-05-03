/**
 * Basic arithmetic operations for GanitaSutra math toolbox
 */

/**
 * Adds two numbers
 * @param a - First number
 * @param b - Second number
 * @returns The sum of a and b
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Multiplies two numbers
 * @param a - First number
 * @param b - Second number
 * @returns The product of a and b
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Divides two numbers with error handling for division by zero
 * @param a - Dividend
 * @param b - Divisor
 * @returns The quotient of a divided by b
 * @throws Error if divisor is zero
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

/**
 * Safe division that returns a fallback value instead of throwing
 * @param a - Dividend
 * @param b - Divisor
 * @param fallback - Value to return when division by zero occurs (default: Infinity)
 * @returns The quotient of a divided by b, or fallback if b is zero
 */
export function safeDivide(a: number, b: number, fallback: number = Infinity): number {
  if (b === 0) {
    return fallback;
  }
  return a / b;
}