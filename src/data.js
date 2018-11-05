import {registerMethods} from './methods.js'

// Store data values on svg nodes
export function data (a, v, r) {
  if (typeof a === 'object') {
    for (v in a) {
      this.data(v, a[v])
    }
  } else if (arguments.length < 2) {
    try {
      return JSON.parse(this.attr('data-' + a))
    } catch (e) {
      return this.attr('data-' + a)
    }
  } else {
    this.attr('data-' + a,
      v === null ? null
      : r === true || typeof v === 'string' || typeof v === 'number' ? v
      : JSON.stringify(v)
    )
  }

  return this
}

registerMethods('Dom', {data})
