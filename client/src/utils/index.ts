export function isIE (): boolean {
  return new RegExp('MSIE|Trident').test(navigator.userAgent)
}

export function isObjectEmpty (input: any): boolean {
  if (Object.getOwnPropertyNames) {
    return (Object.getOwnPropertyNames(input).length === 0)
  } else {
    for (let key in input) {
      if (hasProp(input, key)) {
        return false
      }
    }
    return true
  }
}

export function isObject (input: any): boolean {
  // IE8 will treat undefined and null as object if it wasn't for
  // input != null
  return input != null && Object.prototype.toString.call(input) === '[object Object]'
}

export function isArray (input: any): boolean {
  return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]'
}

export function isFunction (input: any): boolean {
  return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]'
}

export function isNumber (input: any): boolean {
  return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]'
}

export function isDate (input: any): boolean {
  return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]'
}

export function isUndefined (input: any): boolean {
  return input === void 0
}

export function hasProp (object: any, prop: string): boolean {
  return object.hasOwnProperty(prop) || Object.prototype.hasOwnProperty.call(object, prop)
}

export function hasArray (input: any): number {
  return isArray(input) ? input.length : 0
}

/**
 * Key generator.
 */
export function keyCode (): string {
  return (`${1e4}-${1e4}-${4e4}-${1e6}`).replace(/[018]/g, (c: any) => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16))
}

/**
 * Date format.
 * 
 * @param {date|any} input
 */
export function dateTimeFormat (input: Date | any = Date.now()): string {
  const $intl = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' })
  let date = new Date(input)
  return $intl.format(date)
}

/**
 * Hidden overflow scroll.
 * 
 * @param {boolean} input 
 */
export function scrollOff (input: boolean = true): void {
  document.body.style.overflow = (input ? 'hidden' : 'auto')
}

/**
 * Truncate limitor text.
 * 
 * @param {string} input
 * @param {number} limit
 */
export function truncate (input: string, limit: number): string {
  if (input.length <= limit) return input

  const bake: string  = '...'
  let x: string = input.substr(0, limit)
  let n: number = input.lastIndexOf(' ')

  if (n > -1) x = input.substr(0, n)

  return `${x}${bake}`
}

/**
 * Convert to Price.
 * 
 * @param {number|string} input
 * @param {number} fix delimiters
 */
export function price (input: number | string, fix: number): string {
  const n: string = Number(input).toFixed(fix || 0).toString()
  return n.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

/**
 * Pad Digits
 * 
 * @param {number} number
 * @param {number} digits
 */
export function pad (number: number, digits: number): number {
  const arr: any = Array(Math.max(digits - String(number).length + 1, 0))
  return arr.join(0) + number
}

/**
 * clone.
 * 
 * @param {object|array} input
 */
export function clone (input: any): any {
  return JSON.parse( JSON.stringify( input ) )
}

/**
 * Convert to Upper Case.
 * 
 * @param {string} input
 */
export function upperCase (input: string): string {
  return String(input).toUpperCase()
}

/**
 * Convert to Lower Case.
 * 
 * @param {string} input
 */
export function lowerCase (input: string | number): string {
  return String(input).toLowerCase()
}

/**
 * Convert to Capitalize.
 * 
 * @param {string} input
 */
export function capitalize (input: string): string {
  const array: any = String(input).split(/[ ]+/)
  return array.map((word: string): string => {
    return `${upperCase(word.charAt(0))}${word.slice(1)}`
  }).join(' ')
}

/**
 * Create an object containing the parameters of the current URL.
 * 
 * @param {string} input
 */
export function getParams (input: string): any {
  return (input.match(/([^?=&]+)(=([^&]*))/g) || [])
    .reduce((a: any, v: any) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a), {})
}
