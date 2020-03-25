/**
 * Returns only numbers from a given string
 */
export const numericString = (value) => value.replace(/[^0-9]+/g, '')
