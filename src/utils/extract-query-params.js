/**
 * Extract query params from string.
 * @param {string} query - The route path.
 */
export function extractQueryParams(query) {
  return query
    .substr(1)
    .split('&')
    .reduce((queryParams, param) => {
      const [key, value] = param.split('=')

      queryParams[key] = value
      return queryParams
    }, {})
}
